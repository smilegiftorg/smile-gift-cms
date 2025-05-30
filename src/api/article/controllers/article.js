"use strict";

/**
 * page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;
    console.log("ctx.params: ", ctx.params);
    const { seo } = ctx.query;
    let populateFields = {
      image: true,
      gallery: true,
      category: true,
      relatedArticles: {
        populate: {
          image: true,
        },
      },
    };
    if (seo) {
      populateFields = {
        seo: {
          populate: {
            metaSocial: {
              populate: {
                image: true,
              },
            },
            metaImage: true,
          },
        },
      };
    }

    // Find the program by slug
    const entity = await strapi.db.query("api::article.article").findOne({
      where: { slug },
      populate: populateFields,
    });

    // If no program found, return 404
    if (!entity) {
      return ctx.notFound("Program not found");
    }

    const { programs, ...rest } = entity;
    const aliasedEntity = {
      ...rest,
      relatedPrograms: programs,
    };

    // Return the found program
    return this.transformResponse(aliasedEntity);
  },
}));
