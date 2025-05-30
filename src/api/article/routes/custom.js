module.exports = {
  routes: [
    {
      method: "GET",
      path: "/articles/slug/:slug",
      handler: "article.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
