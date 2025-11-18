const uatConfig = {
  name: "UAT Environment",
  dataStore: {
    host: process.env.UAT_DB_HOST,
    port: Number(process.env.UAT_DB_PORT || 5432),
    database: process.env.UAT_DB_NAME,
    username: process.env.UAT_DB_USER,
    password: process.env.UAT_DB_PASSWORD,
  },
};

export default uatConfig;
