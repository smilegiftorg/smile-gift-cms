// scripts/seedHomepage.js
const strapiFactory =
  require("@strapi/strapi").default || require("@strapi/strapi");
const {
  heroData,
  aboutPreviewData,
  impactStatsData,
  programsData,
  galleryPreviewData,
  testimonialData,
  newsPreviewData,
  volunteerCTAData,
  donationData,
  seoData,
} = require("./data");
// const uploadFile = require("./file");

async function seed() {
  const app = await strapiFactory();
  await app.load();
  // await uploadFile(
  //   "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
  //   app
  // );
  const existingHomepageData = await app.entityService.findMany(
    "api::homepage.homepage",
    { populate: ["hero.buttons", "hero.backgroundImage"] }
  );

  const homepageSections = [
    {
      __component: "sections.hero",
      ...heroData,
    },
    {
      __component: "sections.about-preview",
      ...aboutPreviewData,
    },
    {
      __component: "sections.impact-stats",
      ...impactStatsData,
    },
    {
      __component: "sections.featured-programs",
      ...programsData,
    },
    {
      __component: "sections.gallery-preview",
      ...galleryPreviewData,
    },
    {
      __component: "sections.testimonial",
      ...testimonialData,
    },
    {
      __component: "sections.news-preview",
      ...newsPreviewData,
    },
    {
      __component: "sections.volunteer-cta",
      ...volunteerCTAData,
    },
    {
      __component: "sections.donation",
      ...donationData,
    },
    {
      __component: "shared.seo",
      ...seoData,
    },
  ];

  const existingHomepage = Array.isArray(existingHomepageData)
    ? existingHomepageData[0]
    : [existingHomepageData];
  if (!existingHomepage || existingHomepage.length === 0) {
    await app.entityService.create("api::homepage.homepage", {
      data: { sections: homepageSections },
    });
    console.log("Homepage created with dynamic zone");
  } else {
    const homepageId = existingHomepage[0].id;
    await app.entityService.update("api::homepage.homepage", homepageId, {
      data: { sections: homepageSections },
    });
    console.log("Homepage updated with dynamic zone");
  }

  await app.destroy();
}

seed();
