"use strict";

const strapiFactory =
  require("@strapi/strapi").default || require("@strapi/strapi");

const headerData = {
  title: "Smile Gift",
  subtitle: "CLB Thiện Nguyện",
  contactLabel: "Liên hệ",
  contactPath: "/contact",
  logo: 1,
  navItems: [
    { name: "Trang chủ", nameEn: "Home", path: "/" },
    { name: "Giới thiệu", nameEn: "About", path: "/about" },
    { name: "Dự án", nameEn: "Programs", path: "/programs" },
    { name: "Tin tức", nameEn: "News", path: "/news" },
    { name: "Báo cáo", nameEn: "Reports", path: "/reports" },
    { name: "Tình nguyện", nameEn: "Volunteer", path: "/volunteer" },
    { name: "Quyên góp", nameEn: "Donate", path: "/donate" },
  ],
};

const footerData = {
  aboutTitle: "CLB Thiện Nguyện Smile Gift",
  aboutDescription:
    "Kết nối nghệ thuật và lòng nhân ái - Nơi tập hợp những bạn trẻ yêu thích nghệ thuật và mong muốn dùng tài năng để trao đi yêu thương.",
  quickLinks: [
    { label: "Giới thiệu CLB", href: "/about" },
    { label: "Dự án thiện nguyện", href: "/programs" },
    { label: "Đăng ký tình nguyện viên", href: "/volunteer" },
    { label: "Báo cáo tài chính", href: "/reports" },
    { label: "Quyên góp", href: "/donate" },
  ],
  contactPhone: "0355.749.581",
  contactEmail: "smilegift.vn@gmail.com",
  contactLocation: "TP.HCM – An Giang – các tỉnh miền Tây",
  quote: {
    text: "Đừng bao giờ từ chối nếu bạn vẫn còn cái để cho!",
    author: "Slogan của CLB Thiện Nguyện Smile Gift",
  },
  socialLinks: [
    { platform: "facebook", url: "https://www.facebook.com/smilegift.sg" },
    { platform: "youtube", url: "https://www.youtube.com/@smilegift" },
  ],
  logo: 1,
};

async function seed() {
  const app = await strapiFactory();
  await app.load();

  try {
    const existing = await app.entityService.findMany("api::global.global");
    console.log("existing: ", existing);

    if (existing) {
      const existingEntry = existing;

      await app.entityService.update("api::global.global", existingEntry.id, {
        data: {
          header: {
            logo: headerData.logo,
            title: headerData.title,
            subtitle: headerData.subtitle,
            contactLabel: headerData.contactLabel,
            contactPath: headerData.contactPath,
            navItems: headerData.navItems,
          },
          footer: {
            ...footerData,
          },
        },
      });

      console.log(
        "✅ Updated existing Global entry (ID: " + existingEntry.id + ")."
      );
    } else {
      const created = await app.entityService.create("api::global.global", {
        data: {
          header: {
            logo: headerData.logo,
            title: headerData.title,
            subtitle: headerData.subtitle,
            contactLabel: headerData.contactLabel,
            contactPath: headerData.contactPath,
            navItems: headerData.navItems,
          },
          footer: {
            ...footerData,
          },
        },
      });

      console.log("✅ Created new Global entry (ID: " + created.id + ").");
    }
  } catch (err) {
    console.error("❌ Error seeding Global Header", err);
  }

  await app.destroy();
}

seed();
