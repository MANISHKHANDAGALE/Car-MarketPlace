import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
    dbCredentials: {
    url: "postgresql://neondb_owner:npg_HbfI3R7Lvenq@ep-shy-waterfall-a1l8itq5-pooler.ap-southeast-1.aws.neon.tech/WheelVibe?sslmode=require&channel_binding=require",
  },
});
