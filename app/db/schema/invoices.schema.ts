import { date, pgEnum, pgTable, real, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import * as zod from "zod";
import { customers } from "@/app/db/schema/customers.schema";

export const enumInvoiceStatus = pgEnum("enumInvoiceStatus", [
  "pending",
  "paid",
]);

// Table
export const invoices = pgTable("invoices", {
  id: uuid("id").primaryKey().unique().defaultRandom(),
  date: date("date").notNull().defaultNow(),
  amount: real("amount").notNull(),
  status: enumInvoiceStatus("status").notNull(),
  customer_id: uuid("customer_id")
    .notNull()
    .references(() => customers.id, {
      onDelete: "cascade",
      onUpdate: "restrict",
    }),
});

// Schemas
export const SchemaInvoice = createSelectSchema(invoices);
export const SchemaNewInvoice = createInsertSchema(invoices, {
  date: (schema) =>
    schema.date().nonempty({ message: "Invoice date is mandatory" }),
  amount: (schema) =>
    schema
      .positive({ message: "Invoice amount must be positive" })
      .min(1, { message: "Minimum amount must be 1$" }),
  status: (schema) => schema.default("pending"),
  customer_id: (schema) => schema.uuid({ message: "Please choose a customer" }),
}).omit({
  id: true,
});
export const SchemaInvoiceEdit = createInsertSchema(invoices, {
  id: (schema) => schema.uuid().nonempty(),
  date: (schema) =>
    schema.date().nonempty({ message: "Invoice date is mandatory" }),
  amount: (schema) =>
    schema
      .positive({ message: "Invoice amount must be positive" })
      .min(1, { message: "Minimum amount must be 1$" }),
  status: (schema) => schema.default("pending"),
  customer_id: (schema) =>
    schema.uuid({ message: "Please choose a customer " }),
});

// Types
export type Invoice = zod.infer<typeof SchemaInvoice>;
export type InvoiceEdit = zod.infer<typeof SchemaInvoiceEdit>;
export type NewInvoice = zod.infer<typeof SchemaNewInvoice>;
export type InvoiceForm = Omit<Invoice, "date">;
