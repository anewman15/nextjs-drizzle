import { db } from "@/app/db";
import { customers, invoices } from "@/app/db/schema";
import { asc, count, desc, eq, sql } from "drizzle-orm";
import { pgView } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import * as zod from "zod";

const { id: customersId, name, email, image_url } = customers;
const { id: invoicesId, customer_id, amount, date, status } = invoices;

// Queries
export const pqLatestInvoices = db
  .select({
    id: invoicesId,
    name,
    email,
    amount,
    image_url,
  })
  .from(invoices)
  .leftJoin(customers, eq(customer_id, customersId));

export const pqInvoicesTable = db
  .select({
    id: invoicesId,
    customer_id,
    name,
    email,
    amount,
    image_url,
    date,
    status,
  })
  .from(invoices)
  .leftJoin(customers, eq(customer_id, customersId));

export const pqFilteredInvoicesTable = db
  .select({
    id: invoicesId,
    amount,
    date,
    status,
    name,
    email,
    image_url,
  })
  .from(invoices)
  .leftJoin(customers, eq(customer_id, customersId))
  .orderBy(desc(invoices.date));

export const pqFilteredCustomersTable = db
  .select({
    id: customers.id,
    name,
    email,
    image_url,
    total_invoices: count(invoices.id).as("total_invoices"),
    total_pending:
      sql`SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END)`.as(
        "total_pending"
      ),
    total_paid:
      sql`SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END)`.as(
        "total_paid"
      ),
  })
  .from(customers)
  .leftJoin(invoices, eq(customersId, customer_id))
  .groupBy(customersId, name, email, image_url)
  .orderBy(asc(name));

// Views
export const viewLatestInvoices =
  pgView("latest_invoices").as(pqLatestInvoices);
export const viewInvoicesTable = pgView("invoices_table").as(pqInvoicesTable);
export const viewFilteredInvoicesTable = pgView("filtered_invoices_table").as(
  pqFilteredInvoicesTable
);
export const viewFilteredCustomersTable = pgView("filtered_customers_table").as(
  pqFilteredCustomersTable
);

// Schemas
const SchemaLatestInvoices = createSelectSchema(viewLatestInvoices);
const SchemaInvoicesTable = createSelectSchema(viewInvoicesTable);
const SchemaFilteredInvoicesTable = createSelectSchema(
  viewFilteredInvoicesTable
);
const SchemaFilteredCustomersTable = createSelectSchema(
  viewFilteredCustomersTable
);
const SchemaCustomersTable = SchemaFilteredCustomersTable;

// Types
export type LatestInvoiceRaw = zod.infer<typeof SchemaLatestInvoices>;
export type LatestInvoice = Omit<LatestInvoiceRaw, "amount"> & {
  amount: string;
};
export type InvoicesTable = zod.infer<typeof SchemaInvoicesTable>;
export type FilteredInvoicesTable = zod.infer<
  typeof SchemaFilteredInvoicesTable
>;
export type CustomersTableType = zod.infer<typeof SchemaCustomersTable>;
export type FormattedCustomersTable = zod.infer<
  typeof SchemaFilteredCustomersTable
>;
