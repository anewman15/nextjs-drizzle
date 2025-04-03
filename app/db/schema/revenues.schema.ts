import { pgTable, real, uuid, varchar } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import * as zod from "zod";

// Table
export const revenues = pgTable("revenues", {
  id: uuid("id").primaryKey().unique().defaultRandom(),
  month: varchar("month").unique().notNull(),
  revenue: real("revenue").notNull(),
});

// Schemas
export const RevenueSchema = createSelectSchema(revenues);

// Types
export type Revenue = zod.infer<typeof RevenueSchema>;
