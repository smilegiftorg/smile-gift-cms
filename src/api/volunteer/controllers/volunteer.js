"use strict";

/**
 * volunteer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::volunteer.volunteer",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const { seo } = ctx.query;
      let populateFields = {
        image: true,
        gallery: true,
        category: true,
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
      const entity = await strapi.db.query("api::volunteer.volunteer").findOne({
        where: { slug },
        populate: populateFields,
      });

      // If no program found, return 404
      if (!entity) {
        return ctx.notFound("Program not found");
      }

      // Return the found program
      return this.transformResponse(entity);
    },
  })
);
