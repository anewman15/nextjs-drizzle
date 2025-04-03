import { db } from "@/app/db";
import { customers, invoices, revenues } from "@/app/db/schema";
import {
  pqFilteredCustomersTable,
  pqFilteredInvoicesTable,
  pqLatestInvoices,
} from "@/app/db/schema/views.schema";
import { asc, count, desc, eq, ilike, or, sql } from "drizzle-orm";
import { formatCurrency } from "./utils";

const { id: customersId, name, email, image_url } = customers;
const { id: invoicesId, customer_id, amount, date, status } = invoices;

export async function fetchRevenue() {
  try {
    const data = await db.select().from(revenues);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchLatestInvoices() {
  try {
    const data = await pqLatestInvoices.orderBy(desc(invoices.date)).limit(5);

    const latestInvoices = data.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount as number),
    }));

    return latestInvoices;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}

export async function fetchCardData() {
  try {
    const invoiceCountPromise = await db
      .select({ count: count(invoices.id).as("invoices_count") })
      .from(invoices);
    const customerCountPromise = await db
      .select({ count: count().as("invoices_count") })
      .from(customers);
    const invoiceStatusPaidPromise = await db
      .select({
        paid: sql`SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END)`.as(
          "paid"
        ),
      })
      .from(invoices);
    const invoiceStatusPendingPromise = await db
      .select({
        pending:
          sql`SUM(CASE WHEN ${status} = 'pending' THEN ${amount} ELSE 0 END)`.as(
            "pending"
          ),
      })
      .from(invoices);

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPaidPromise,
      invoiceStatusPendingPromise,
    ]);

    const numberOfInvoices = Number(data[0][0].count ?? "0");
    const numberOfCustomers = Number(data[1][0]?.count ?? "0");
    const totalPaidInvoices = formatCurrency(
      (data[2][0]?.paid as number) ?? "0"
    );
    const totalPendingInvoices = formatCurrency(
      (data[3][0]?.pending as number) ?? "0"
    );

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}

const ITEMS_PER_PAGE = 10;

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const filteredInvoicesTable = await pqFilteredInvoicesTable
      .where(
        or(
          ilike(customers.name, `%${query}%`),
          ilike(customers.email, `%${query}%`)
        )
      )
      .limit(ITEMS_PER_PAGE)
      .offset(offset);

    return filteredInvoicesTable;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const data = await db
      .select({ count: count(invoices.id) })
      .from(invoices)
      .leftJoin(customers, eq(invoices.customer_id, customers.id))
      .where(
        or(
          ilike(customers.name, `%${query}%`),
          ilike(customers.email, `%${query}%`)
        )
      );

    const totalPages = Math.ceil(Number(data?.[0]?.count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await db.select().from(invoices).where(eq(invoicesId, id));

    const invoice = data[0];
    return { ...invoice, amount: invoice.amount / 100 };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice.");
  }
}

export async function fetchCustomers() {
  try {
    const allCustomers = await db
      .select({
        id: customersId,
        name,
      })
      .from(customers)
      .orderBy(asc(name));

    return allCustomers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  }
}

export async function fetchFilteredCustomers(
  query: string,
  currentPage: number
) {
  try {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    const data = await pqFilteredCustomersTable
      .where(or(ilike(name, `%${query}%`), ilike(email, `%${query}%`)))
      .limit(ITEMS_PER_PAGE)
      .offset(offset);

    const filteredCustomers = data.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending as number),
      total_paid: formatCurrency(customer.total_paid as number),
    }));

    return filteredCustomers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch customer table.");
  }
}

export async function fetchCustomersPages(query: string) {
  try {
    const customerPagesCount = await db
      .select({
        count: count(customersId),
      })
      .from(customers)
      .where(or(ilike(name, `%${query}%`), ilike(email, `%${query}%`)));

    const totalPages = Math.ceil(
      Number(customerPagesCount?.[0]?.count) / ITEMS_PER_PAGE
    );
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}
