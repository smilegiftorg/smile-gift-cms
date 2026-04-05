module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "aws-1-ap-southeast-1.pooler.supabase.com",
      port: 6543,
      database: "postgres",
      user: "postgres.gaicbawgdmknchhyvdob",
      password: "NZ2YVJiaE8kREsym",
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
