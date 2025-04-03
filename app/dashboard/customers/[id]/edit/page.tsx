import EditCustomerForm from '@/app/ui/customers/edit-customer-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { db } from '@/app/db';
import { Customer } from '@/app/db/schema/customers.schema';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const customer = await db.query.customers.findFirst({
    where: (customers, { eq }) => eq(customers.id, id),
  }) as Customer;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditCustomerForm customer={customer} />
    </main>
  );
};
