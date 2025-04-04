import * as zod from "zod";

export const SchemaCustomer = zod.object({
  id: zod.string().uuid(),
  name: zod
    .string()
    .min(1, { message: "Name cannot be empty" })
    .max(55, { message: "Name should not exceed 55 characters" }),
  email: zod.string().email({ message: "Enter a valid email" }),
  image_url: zod.string(),
});

export const SchemaNewCustomer = SchemaCustomer
  .omit({
    id: true,
  })
  .partial({ image_url: true });

export const SchemaInvoice = zod.object({
  id: zod.string().uuid().nonempty(),
  date: zod.string().date(),
  amount: zod
    .number()
    .positive({ message: "Invoice amount must be positive" })
    .min(1, { message: "Minimum amount must be 1$" }),
  status: zod.enum(["paid", "pending"]),
  customer_id: zod.string().uuid({ message: "Please choose a customer " }),
});

export const SchemaNewInvoice = SchemaInvoice.omit({
  id: true,
});

export type Customer = zod.infer<typeof SchemaCustomer>;
export type NewCustomer = zod.infer<typeof SchemaNewCustomer>;
export type CustomerField = Pick<Customer, "id" | "name">;
export type Invoice = zod.infer<typeof SchemaInvoice>;
export type NewInvoice = zod.infer<typeof SchemaNewInvoice>;
