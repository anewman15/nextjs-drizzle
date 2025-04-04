import { Suspense } from "react";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

import { CreateInvoice } from "@/app/ui/invoices/buttons";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import CustomerInvoicesTable from "@/app/ui/customers/customer-invoices-table";
import { mockCustomerById, mockPendingCustomerInvoices } from "@/app/lib/mock.data";
import { Customer, Invoice } from "@/app/lib/zod-types";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const customerById = mockCustomerById;

  const customerInvoices = customerById?.invoices as Invoice[];

  const pendingCustomerInvoices = mockPendingCustomerInvoices;

  return (
    <main className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: `${id}`,
            href: `/dashboard/customers/${id}`,
            active: true,
          },
        ]}
      />
      <div className="flex w-full items-center justify-between">
          <div className="flex flex-nowrap justify-start items-center">
            <Image
              src={customerById?.image_url as string}
              className="mr-2 rounded-full"
              width={64}
              height={64}
              alt={`${customerById?.name}'s profile picture`}
            />
            <div>
              <h1 className={`${lusitana.className} text-3xl font-semibold`}>
                {customerById?.name}
              </h1>
              <div className="text-sm text-gray-600">{customerById?.email}</div>
            </div>
          </div>
        <CreateInvoice />
      </div>
      <hr className="my-1" />
      <div className="my-6">
        <div>
          <h2 className="text-xl">{customerInvoices?.length} Pending Invoices</h2>
          <div className="my-0">
            <Suspense fallback={<InvoicesTableSkeleton />}>
              {
                customerInvoices?.length > 0 ? (
                  <CustomerInvoicesTable
                    customer={customerById as Customer}
                    invoicesList={pendingCustomerInvoices as Invoice[]}
                  />
                ) : (
                  <p
                    className="my-4 py-4 text-center text-gray-400">
                    {customerById?.name} has no pending invoices!
                  </p>
                )
              }
            </Suspense>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="my-0 text-xl">All Invoices</h2>
          <div className="">
            <Suspense fallback={<InvoicesTableSkeleton />}>
              {
                customerInvoices?.length > 0 ? (
                  <CustomerInvoicesTable
                    customer={customerById as Customer}
                    invoicesList={customerInvoices}
                  />
                ) : (
                  <p
                    className="my-4 py-4 text-center text-gray-400">
                    {customerById?.name} has not purchased anything yet.
                  </p>
                )
              }
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};
