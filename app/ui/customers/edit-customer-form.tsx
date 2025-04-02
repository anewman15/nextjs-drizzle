"use client"

import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EnvelopeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { Customer, SchemaCustomer } from "@/app/lib/zod-types";

export default function EditCustomerForm({ customer }: { customer: Customer }) {
  const defaultValues: Customer = {
    ...customer,
  };

  const { formState: { errors }, handleSubmit, register } = useForm({
    resolver: zodResolver(SchemaCustomer),
    defaultValues,

    mode: "onChange",
    criteriaMode: "all",
    shouldFocusError: true,
    reValidateMode: "onSubmit"
  });

  const updateCurrentCustomer: SubmitHandler<Customer> = async (data) => {
    redirect("/dashboard/customers");
  };

  return (
    <form onSubmit={handleSubmit(updateCurrentCustomer)}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                {...register("name")}
                type="text"
                placeholder="Enter your name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              {
                errors?.name && (
                  <span className="text-red-500 text-xs">{errors.name.message as ReactNode}</span>
                )
              }
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              {
                errors?.email && (
                  <span className="text-red-500 text-xs">{errors.email.message as ReactNode}</span>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};
