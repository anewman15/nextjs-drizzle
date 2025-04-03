import { db } from "@/app/db";
import { seed } from "drizzle-seed";
import * as schema from "./schema";

export async function seedDatabase() {
  await seed(db, schema).refine((f) => ({
    customers: {
      count: 124,
      columns: {
        name: f.fullName(),
        image_url: f.valuesFromArray({
          values: [
            "/customers/evil-rabbit.png",
            "/customers/delba-de-oliveira.png",
            "/customers/lee-robinson.png",
            "/customers/michael-novotny.png",
            "/customers/amy-burns.png",
            "/customers/balazs-orban.png",
          ],
        }),
      },
    },
    invoices: {
      count: 206,
      columns: {
        amount: f.int({
          minValue: 1000,
          maxValue: 9000,
        }),
      },
    },
    revenues: {
      count: 12,
      columns: {
        month: f.valuesFromArray({
          values: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          isUnique: true,
        }),
        revenue: f.int({
          minValue: 10000,
          maxValue: 90000,
        }),
      },
    },
  }));

  // --> You can also perform seeding with usual database operations

  // await db.insert(schema.customers).values({
  // name: "Yablo Schuman",
  // email: "yschuman@codenail.com"
  // });
  // await db.insert(schema.invoices).values({
  //   customer_id: "a509a5fc-cf15-47b8-b4dd-9a6dabf3f656",
  //   date: new Date().toISOString().split("T")[0],
  //   amount: 2000,
  //   status: "paid",
  // });
}

seedDatabase();
