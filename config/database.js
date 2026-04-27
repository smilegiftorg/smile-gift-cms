module.exports = ({ env }) => {
  console.log("ALL ENV:", process.env);

  return {
    connection: {
      client: "postgres",
      connection: env("DATABASE_URL"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
  };
};
