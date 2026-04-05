module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      connectionString:
        "postgresql://postgres.gaicbawgdmknchhyvdob:NZ2YVJiaE8kREsym@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?sslmode=require",
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
