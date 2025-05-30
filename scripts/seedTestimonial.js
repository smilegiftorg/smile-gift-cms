"use strict";

const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");
const { promisify } = require("util");
const strapiFactory =
  require("@strapi/strapi").default || require("@strapi/strapi");

const streamPipeline = promisify(pipeline);

const testimonials = [
  {
    name: "Nguyễn Minh Huy",
    role: "Tình nguyện viên",
    content:
      "Tham gia Smile Gift là một trong những quyết định ý nghĩa nhất của tôi. Được sử dụng khả năng ca hát để mang lại niềm vui cho người khác là điều tuyệt vời.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    name: "Trần Thị Mỹ Linh",
    role: "Mạnh thường quân",
    content:
      "Tôi đã theo dõi các hoạt động của Smile Gift từ những ngày đầu. Sự chuyên nghiệp và minh bạch trong từng dự án là lý do tôi luôn tin tưởng đồng hành.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    name: "Phạm Văn Tùng",
    role: "Người thụ hưởng",
    content:
      "Khi biết có những bạn trẻ sẵn sàng dùng tài năng của mình để giúp đỡ người khác như chúng tôi, tôi thực sự xúc động. Cảm ơn Smile Gift rất nhiều.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
  },
];

async function seed() {
  const app = await strapiFactory();
  await app.load();

  for (const item of testimonials) {
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
        console.warn(`❌ Failed to upload image for: ${item.name}`);
        continue;
      }

      // Create testimonial entry
      await app.entityService.create("api::testimonial.testimonial", {
        data: {
          name: item.name,
          role: item.role,
          content: item.content,
          image: imageId, // assuming image field is media (single type)
        },
      });

      console.log(`✅ Seeded: ${item.name}`);
    } catch (err) {
      console.error(`❌ Error seeding item: ${item.name}`, err);
    }
  }

  await app.destroy();
  console.log("✅ Testimonials seed complete.");
}

seed();
