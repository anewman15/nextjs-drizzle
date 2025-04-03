import { relations } from "drizzle-orm";
import { customers } from "./customers.schema";
import { invoices } from "./invoices.schema";

export const customersRelations = relations(customers, ({ many }) => ({
  invoices: many(invoices),
}));

export const invoicesRelations = relations(invoices, ({ one }) => ({
  customer: one(customers, {
    fields: [invoices.customer_id],
    references: [customers.id],
  }),
}));
