"use strict";

const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");
const { promisify } = require("util");
const strapiFactory =
  require("@strapi/strapi").default || require("@strapi/strapi");

const streamPipeline = promisify(pipeline);

const allNews = [
  {
    title: "Smile Gift: Nhóm bạn trẻ biến nghệ thuật thành thiện nguyện",
    description:
      "Hành trình đặc biệt của những bạn trẻ dùng tài năng nghệ thuật để giúp đỡ cộng đồng và lan tỏa giá trị tốt đẹp trong xã hội.",
    author: "Minh Anh",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
    categoryName: "Truyền thông",
  },
  {
    title: "Họ là những người trẻ, hát để sẻ chia – diễn để lan tỏa",
    description:
      "Câu chuyện cảm động về những tình nguyện viên đầy nhiệt huyết, dùng giọng hát và khả năng diễn xuất để mang lại niềm vui cho người khó khăn.",
    author: "Thanh Tùng",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
    categoryName: "Truyền thông",
  },
  {
    title:
      'Chiến dịch "Mắt sáng cho người già" đạt mục tiêu phẫu thuật cho 100 bệnh nhân',
    description:
      "Sau 3 tháng phát động, chiến dịch đã hỗ trợ chi phí phẫu thuật mắt cho 100 người cao tuổi có hoàn cảnh khó khăn.",
    author: "Quốc Tuấn",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
    categoryName: "Truyền thông",
  },
  {
    title:
      "Gương mặt TNV tiêu biểu: Nguyễn Thành Trung và hành trình 20 chương trình thiện nguyện",
    description:
      "Câu chuyện cảm động về chàng trai 22 tuổi đã tham gia hơn 20 chương trình thiện nguyện cùng Smile Gift.",
    author: "Thu Hương",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    categoryName: "Truyền thông",
  },
];

async function seed() {
  const app = await strapiFactory();
  await app.load();

  for (const item of allNews) {
    try {
      const category = await app.entityService.findMany(
        "api::category.category",
        {
          filters: { name: item.categoryName },
          limit: 1,
        }
      );

      if (!category.length) {
        console.warn(`❌ Category not found: ${item.categoryName}`);
        continue;
      }

      const categoryId = category[0].id;

      // Tìm article theo title
      const existing = await app.entityService.findMany(
        "api::article.article",
        {
          filters: { title: item.title },
          limit: 1,
        }
      );

      // Upload ảnh
      const fileName = path.basename(item.image.split("?")[0]);
      const tmpPath = path.join(__dirname, fileName);

      const response = await axios({
        method: "GET",
        url: item.image,
        responseType: "stream",
      });

      await streamPipeline(response.data, fs.createWriteStream(tmpPath));

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

      fs.unlinkSync(tmpPath);

      const imageId = uploadedFiles[0]?.id;

      if (!imageId) {
        console.warn(`❌ Failed to upload image for: ${item.title}`);
        continue;
      }

      const data = {
        title: item.title,
        description: item.description,
        author: item.author,
        image: imageId,
        category: categoryId,
      };

      if (existing.length) {
        // Update nếu đã tồn tại
        await app.entityService.update("api::article.article", existing[0].id, {
          data,
        });
        console.log(`🔁 Updated: ${item.title}`);
      } else {
        // Create nếu chưa có
        await app.entityService.create("api::article.article", { data });
        console.log(`✅ Created: ${item.title}`);
      }
    } catch (err) {
      console.error(`❌ Error processing article: ${item.title}`, err);
    }
  }

  await app.destroy();
  console.log("✅ Seeding complete.");
}

seed();
