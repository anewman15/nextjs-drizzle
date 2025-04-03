import { client } from "@/app/db/client";
import * as schema from "@/app/db/schema";
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(client, { schema });
