import clsx from 'clsx';
import { deleteCustomer } from '@/app/lib/actions';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  "use client"

  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}

export const DeleteCustomer = (
  { id, children, className, ...rest }:
    ButtonProps & { id: string }
) => (
  <form
    action={deleteCustomer.bind(null, id) as any}
  >
    <button
      type="submit"
      {...rest}
      className={clsx("rounded-md border p-2 bg-gray-400 hover:bg-red-500", className)}
    >
      {children}
    </button>
  </form>
);
