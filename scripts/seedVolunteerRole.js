"use strict";

const strapiFactory =
  require("@strapi/strapi").default || require("@strapi/strapi");

const volunteerRoles = [
  {
    id: 1,
    icon: "FaPeopleCarry",
    title: "Tham gia công quả",
    description:
      "Hỗ trợ tại các buổi phát quà, phát cơm, công quả tại chùa và các hoạt động thiện nguyện trực tiếp.",
  },
  {
    id: 2,
    icon: "FaMicrophone",
    title: "Hát, diễn, làm MC",
    description:
      "Tham gia biểu diễn trong các đêm nhạc, sự kiện gây quỹ, hoặc làm MC dẫn chương trình.",
  },
  {
    id: 3,
    icon: "FaCamera",
    title: "Hỗ trợ media",
    description:
      "Chụp ảnh, quay video, thiết kế đồ họa, viết bài, xử lý hậu kỳ cho các chương trình.",
  },
  {
    id: 4,
    icon: "FaUserPlus",
    title: "Hỗ trợ tổ chức",
    description:
      "Chụp ảnh, quay video, thiết kế đồ họa, viết bài, xử lý hậu kỳ cho các chương trình.",
  },
];

async function seed() {
  const app = await strapiFactory();
  await app.load();

  for (const role of volunteerRoles) {
    try {
      const existing = await app.db
        .query("api::volunteer-role.volunteer-role")
        .findOne({
          where: { title: role.title },
        });

      if (existing) {
        console.log(`⚠️ Skipped (exists): ${role.title}`);
        continue;
      }

      await app.entityService.create("api::volunteer-role.volunteer-role", {
        data: role,
      });

      console.log(`✅ Created: ${role.title}`);
    } catch (err) {
      console.error(`❌ Error creating: ${role.title}`, err);
    }
  }

  await app.destroy();
  console.log("✅ Volunteer roles seed complete.");
}

seed();
