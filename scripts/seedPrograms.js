const strapiFactory =
  require("@strapi/strapi").default || require("@strapi/strapi");

const allPrograms = [
  {
    title: 'Đêm nhạc "Yêu Là Đủ" gây quỹ phát cơm',
    date: "2025-07-28",
    location: "Nhà văn hóa Q3",
    description:
      "Chương trình âm nhạc đặc biệt với sự tham gia của các nghệ sĩ trẻ, gây quỹ cho hoạt động phát cơm từ thiện.",
    category: "Gây quỹ",
    status: "upcoming",
    image: 2,
  },
  {
    title: "Công quả tại Chùa Phổ Quang",
    date: "2025-08-10",
    location: "Tân Bình",
    description:
      "Hoạt động công quả tại chùa, hỗ trợ công tác chuẩn bị và phân phát thực phẩm cho người nghèo.",
    category: "Công quả",
    status: "upcoming",
    image: 2,
  },
  {
    title: "Chương trình mổ mắt từ thiện",
    date: "2025-08-25",
    location: "Bệnh viện Mắt Tp.HCM",
    description:
      "Hỗ trợ chi phí phẫu thuật mắt cho các bệnh nhân nghèo tại khu vực nông thôn.",
    category: "Y tế",
    status: "upcoming",
    image: 2,
  },
  {
    title: "Công quả ở Tổ Đình Phật Bửu",
    date: "2025-03-15",
    location: "Quận 10, TP.HCM",
    description:
      "Chương trình công quả tại Tổ Đình Phật Bửu, phân phát thực phẩm và quà cho người già neo đơn.",
    category: "Công quả",
    status: "completed",
    image: 2,
  },
  {
    title: 'Đêm nhạc gây quỹ "ĐÊM"',
    date: "2025-03-05",
    location: "Nhà văn hóa Thanh Niên",
    description:
      'Đêm nhạc gây quỹ với chủ đề "ĐÊM", quyên góp được 50 triệu đồng cho quỹ học bổng sinh viên.',
    category: "Gây quỹ",
    status: "completed",
    image: 2,
  },
  {
    title: "Tặng quà Tết cho người vô gia cư",
    date: "2025-01-20",
    location: "Trung tâm TP.HCM",
    description:
      "Chương trình tặng quà Tết cho người vô gia cư tại khu vực trung tâm thành phố.",
    category: "Tặng quà",
    status: "completed",
    image: 2,
  },
];

async function seed() {
  const app = await strapiFactory();
  await app.load();

  try {
    const existingPrograms = await app.entityService.findMany(
      "api::program.program",
      { fields: ["title"] }
    );

    for (const program of allPrograms) {
      const existingProgram = existingPrograms.find(
        (p) => p.title === program.title
      );

      // Find the category by name
      const categoryEntity = await app.entityService.findMany(
        "api::category.category",
        {
          filters: { name: program.category },
        }
      );

      if (!categoryEntity.length) {
        console.warn(`Category not found: ${program.category}`);
        continue;
      }

      const categoryId = categoryEntity[0].id;

      const dataToSave = {
        ...program,
        category: categoryId,
        image: program.image || null,
      };

      if (existingProgram) {
        await app.entityService.update(
          "api::program.program",
          existingProgram.id,
          { data: dataToSave }
        );
        console.log(`Updated program: ${program.title}`);
      } else {
        await app.entityService.create("api::program.program", {
          data: dataToSave,
        });
        console.log(`Created program: ${program.title}`);
      }
    }

    console.log("Programs seeding completed.");
  } catch (error) {
    console.error("Error seeding programs:", error);
  } finally {
    await app.destroy();
  }
}

seed();
