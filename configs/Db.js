import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./schema"
 // or .env.local

const sql = neon(import.meta.env.VITE_DATABASE_URL);
export const db = drizzle({ client: sql,schema });
