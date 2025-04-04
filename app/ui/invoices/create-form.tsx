"use client"

import { ReactNode } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { NewInvoice, SchemaNewInvoice } from '@/app/db/schema/invoices.schema';
import { CustomerField } from '@/app/db/schema/customers.schema';
import { createInvoice } from '@/app/lib/actions';

export default function Form({ customers }: { customers: CustomerField[] }) {

  const defaultValues: NewInvoice = {
    customer_id: "",
    date: new Date().toISOString().split("T")?.[0],
    amount: 0.00,
    status: "pending",
  };

  const { formState: { errors }, register, handleSubmit } = useForm({
    resolver: zodResolver(SchemaNewInvoice),
    defaultValues,

    mode: "onChange",
    criteriaMode: "all",
    shouldFocusError: true,
    reValidateMode: "onChange"
  });

  const createNewInvoice: SubmitHandler<NewInvoice> = async (data) => {
    await createInvoice(data);

    redirect("/dashboard/invoices");
  };

  return (
    <form onSubmit={handleSubmit(createNewInvoice)}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              id="customer"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              {...register("customer_id")}
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            {
              errors?.customer_id && (
                <span className="text-red-500 text-xs">{errors.customer_id.message as ReactNode}</span>
              )
            }
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                {...register("amount", { valueAsNumber: true })}
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              {
                errors?.amount && (
                  <span className="text-red-500 text-xs">{errors.amount.message as ReactNode}</span>
                )
              }
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  {...register("status")}
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  {...register("status")}
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
            {
              errors?.status && (
                <span className="text-red-500 text-xs">{errors.status.message as ReactNode}</span>
              )
            }
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
};
