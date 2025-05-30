module.exports = {
  routes: [
    {
      method: "GET",
      path: "/volunteers/:slug",
      handler: "volunteer.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
