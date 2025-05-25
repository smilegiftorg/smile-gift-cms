"use strict";

const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");
const { promisify } = require("util");
const strapiFactory =
  require("@strapi/strapi").default || require("@strapi/strapi");

const streamPipeline = promisify(pipeline);

const imageGallery = [
  {
    title: "Công quả ở Tổ Đình Phật Bửu",
    image: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg",
    date: "Tháng 3/2025",
    category: "Công quả",
  },
  {
    title: 'Đêm nhạc gây quỹ "ĐÊM"',
    image: "https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg",
    date: "Tháng 3/2025",
    category: "Sự kiện",
  },
  {
    title: "Tặng quà Tết cho người vô gia cư",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
    date: "Tháng 1/2025",
    category: "Tặng quà",
  },
  {
    title: "Chương trình khám mắt miễn phí",
    image: "https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg",
    date: "Tháng 12/2024",
    category: "Y tế",
  },
  {
    title: "Trao học bổng cho học sinh nghèo",
    image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg",
    date: "Tháng 11/2024",
    category: "Giáo dục",
  },
  {
    title: "Phát cơm từ thiện Q.3",
    image: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg",
    date: "Tháng 10/2024",
    category: "Công quả",
  },
  {
    title: "Hội nghị tình nguyện viên 2024",
    image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg",
    date: "Tháng 9/2024",
    category: "Sự kiện",
  },
  {
    title: "Tặng quà cho trẻ em vùng cao",
    image: "https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg",
    date: "Tháng 8/2024",
    category: "Tặng quà",
  },
  {
    title: "Xây dựng thư viện ở Long An",
    image: "https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg",
    date: "Tháng 7/2024",
    category: "Giáo dục",
  },
];

async function seed() {
  const app = await strapiFactory();
  await app.load();

  const categoryCache = {};

  for (const item of imageGallery) {
    try {
      const fileName = path.basename(item.image.split("?")[0]);
      const tmpPath = path.join(__dirname, fileName);

      // Download image
      const response = await axios({
        method: "GET",
        url: item.image,
        responseType: "stream",
      });
      await streamPipeline(response.data, fs.createWriteStream(tmpPath));

      // Upload to Strapi
      const uploadedFiles = await app
        .plugin("upload")
        .service("upload")
        .upload({
          data: {},
          files: {
            path: tmpPath,
            name: fileName,
            type: response.headers["content-type"],
            size: fs.statSync(tmpPath).size,
          },
        });

      fs.unlinkSync(tmpPath); // Delete temp file

      const imageId = uploadedFiles[0]?.id;
      if (!imageId) {
        console.warn(`❌ Failed to upload image for: ${item.title}`);
        continue;
      }

      // Check or create category
      let categoryId = categoryCache[item.category];
      if (!categoryId) {
        const existingCategory = await app.entityService.findMany(
          "api::category.category",
          {
            filters: { name: item.category },
            limit: 1,
          }
        );

        if (existingCategory.length > 0) {
          categoryId = existingCategory[0].id;
        } else {
          const newCategory = await app.entityService.create(
            "api::category.category",
            {
              data: { name: item.category },
            }
          );
          categoryId = newCategory.id;
        }

        categoryCache[item.category] = categoryId;
      }

      // Check if gallery item exists
      const existingGalleryItems = await app.entityService.findMany(
        "api::gallery.gallery",
        {
          filters: { title: item.title },
          limit: 1,
        }
      );

      if (existingGalleryItems.length > 0) {
        const existingGallery = existingGalleryItems[0];
        // Update existing gallery item
        await app.entityService.update(
          "api::gallery.gallery",
          existingGallery.id,
          {
            data: {
              title: item.title,
              date: item.date,
              category: categoryId,
              image: imageId,
            },
          }
        );
        console.log(`🔄 Updated: ${item.title}`);
      } else {
        // Create new gallery item
        await app.entityService.create("api::gallery.gallery", {
          data: {
            title: item.title,
            date: item.date,
            category: categoryId,
            image: imageId,
          },
        });
        console.log(`✅ Created: ${item.title}`);
      }
    } catch (err) {
      console.error(`❌ Error seeding item: ${item.title}`, err);
    }
  }

  await app.destroy();
  console.log("✅ Gallery seed complete.");
}

seed();
