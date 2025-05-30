// scripts/seedAboutPage.js
const strapiFactory =
  require("@strapi/strapi").default || require("@strapi/strapi");

const header = {
  title: "Dự án thiện nguyện",
  description:
    "Khám phá các chương trình thiện nguyện đã và đang được triển khai bởi CLB Thiện Nguyện Smile Gift.",
};

const joinUsData = {
  title: "Câu Chuyện Smile Gift",
  description:
    "Mỗi đóng góp, dù là thời gian, tài năng hay tài chính đều mang ý nghĩa to lớn. Cùng nhau, chúng ta có thể tạo ra những tác động tích cực đến cộng đồng. Đăng ký tình nguyện viên",
  buttons: [
    {
      text: "Đăng ký tình nguyện viên",
      variant: "secondary",
      icon: "FaCreditCard",
      link: "/volunteer",
    },
    {
      text: "Ủng hộ hoạt động",
      variant: "outline",
      icon: "FaFileAlt",
      link: "/donate",
    },
  ],
};

async function seed() {
  const app = await strapiFactory();
  await app.load();

  const existingAboutPages = await app.entityService.findMany(
    "api::page.page",
    {
      filters: { slug: "programs" },
      populate: ["header", "sessions", "sessions.members.image"],
    }
  );

  const sessions = [
    {
      __component: "sections.header",
      ...header,
    },
    {
      __component: "sections.join-us-cta",
      ...joinUsData,
    },
  ];

  if (!existingAboutPages || existingAboutPages.length === 0) {
    await app.entityService.create("api::page.page", {
      data: {
        title: "Dự án thiện nguyện",
        slug: "programs",
        sessions: sessions,
      },
    });
    console.log("Page created.");
  } else {
    const aboutPageId = existingAboutPages[0].id;
    await app.entityService.update("api::page.page", aboutPageId, {
      data: {
        sessions: sessions,
      },
    });
    console.log("Page updated.");
  }

  await app.destroy();
}

seed();
