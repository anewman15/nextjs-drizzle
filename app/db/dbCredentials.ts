export const dbCredentials = {
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT_NO!),
  user: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
};
