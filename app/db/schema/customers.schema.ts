import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import * as zod from "zod";

export const customers = pgTable("customers", {
  id: uuid("id").primaryKey().unique().defaultRandom(),
  name: varchar("name").notNull(),
  email: varchar("email").unique().notNull(),
  image_url: varchar("image_url")
    .notNull()
    .default("/customers/balazs-orban.png"),
});

export const SchemaCustomer = createSelectSchema(customers);
export const SchemaCustomerList = zod.array(SchemaCustomer);
export const SchemaCustomerEdit = createInsertSchema(customers, {
  id: (schema) => schema.uuid().nonempty(),
  name: (schema) =>
    schema
      .min(1, { message: "Name cannot be empty" })
      .max(55, { message: "Name should not exceed 55 characters" }),
  email: (schema) =>
    schema
      .email({ message: "Enter a valid email" })
      .nonempty("Please enter your email"),
  image_url: (schema) => schema.optional(),
});
export const SchemaNewCustomer = createInsertSchema(customers, {
  name: (schema) =>
    schema
      .min(1, { message: "Name cannot be empty" })
      .max(55, { message: "Name should not exceed 55 characters" }),
  email: (schema) =>
    schema
      .email({ message: "Enter a valid email" })
      .nonempty("Please enter your email"),
  image_url: (schema) => schema.optional(),
}).omit({
  id: true,
});

export type Customer = zod.infer<typeof SchemaCustomer>;
export type CustomerEdit = zod.infer<typeof SchemaCustomerEdit>;
export type NewCustomer = zod.infer<typeof SchemaNewCustomer>;
export type CustomerField = Pick<Customer, "id" | "name">;
