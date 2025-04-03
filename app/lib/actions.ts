"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/app/db";
import { Customer, customers, NewCustomer } from "@/app/db/schema/customers.schema";
import { Invoice, invoices, NewInvoice } from "@/app/db/schema/invoices.schema";

export const createInvoice = async (formData: NewInvoice) => {
  const { amount } = formData;
  const amountInCents = amount * 100;

  const data: NewInvoice = {
    ...formData,
    amount: amountInCents,
  };

  try {
    await db.insert(invoices).values(data);
  } catch (e: any) {
    return e;
  }

  revalidatePath("/dashboard/invoices");
};

export const updateInvoice = async (formData: Invoice) => {
  const { amount, id } = formData;
  const amountInCents = amount * 100;

  const updatedData = {
    ...formData,
    amount: amountInCents,
  };

  try {
    await db
      .update(invoices)
      .set(updatedData)
      .where(eq(invoices.id, id as string));
  } catch (e: any) {
    return e;
  }

  revalidatePath("/dashboard/invoices");
};

export const deleteInvoice = async (id: string) => {
  try {
    await db.delete(invoices).where(eq(invoices.id, id));
  } catch (e) {
    return e;
  }

  revalidatePath("/dashboard/invoices");
};

export const createCustomer = async (formData: NewCustomer) => {
  try {
    await db.insert(customers).values(formData);
  } catch (e: any) {
    return e;
  }

  revalidatePath("/dashboard/customers");
};

export const updateCustomer = async (formData: Customer) => {
  try {
    await db
      .update(customers)
      .set(formData)
      .where(eq(customers.id, formData?.id));
  } catch (e: any) {
    return e;
  }

  revalidatePath("/dashboard/customers");
};

export const deleteCustomer = async (id: string) => {
  try {
    await db.delete(customers).where(eq(customers.id, id));
  } catch (e) {
    return e;
  }

  revalidatePath("/dashboard/customers");
};
