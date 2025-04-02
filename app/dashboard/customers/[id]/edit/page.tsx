import EditCustomerForm from '@/app/ui/customers/edit-customer-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { mockAllCustomers } from '@/app/lib/mock.data';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const customer = mockAllCustomers[0];

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
      <EditCustomerForm customer={customer}  />
    </main>
  );
};