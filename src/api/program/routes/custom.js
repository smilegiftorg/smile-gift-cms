module.exports = {
  routes: [
    {
      method: "GET",
      path: "/programs/:slug",
      handler: "program.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
