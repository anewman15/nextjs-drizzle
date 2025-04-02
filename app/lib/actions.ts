"use server"

import { revalidatePath } from "next/cache";
import { Customer, Invoice, NewCustomer, NewInvoice } from "./zod-types";

export const createInvoice = async (formData: NewInvoice) => {
  const { amount } = formData;
  const amountInCents = amount * 100;

  const data: NewInvoice = {
    ...formData,
    amount: amountInCents,
  };

  revalidatePath("/dashboard/invoices");
};

export const updateInvoice = async (formData: Invoice) => {
  const { amount, id } = formData;
  const amountInCents = amount * 100;

  const updatedData = {
    ...formData,
    amount: amountInCents,
  };

  revalidatePath("/dashboard/invoices");
};

export const deleteInvoice = async (id: string) => {
  revalidatePath("/dashboard/invoices");
};

export const createCustomer = async (formData: NewCustomer) => {
  revalidatePath("/dashboard/customers");
};

export const updateCustomer = async (formData: Customer) => {
  revalidatePath("/dashboard/customers");
};

export const deleteCustomer = async (id: string) => {
  revalidatePath("/dashboard/customers");
};
