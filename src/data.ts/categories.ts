import type { transactionCategory } from "../types/transaction";

export const categories: {
  value: transactionCategory;
  label: string;
}[] = [
  {
    value: "food",
    label: "Food",
  },
  {
    value: "shopping",
    label: "Shopping",
  },
  {
    value: "transport",
    label: "Transport",
  },
  {
    value: "bills",
    label: "Bills",
  },
  {
    value: "entertainment",
    label: "Entertainment",
  },
  {
    value: "health",
    label: "Health",
  },
  {
    value: "salary",
    label: "Salary",
  },
  {
    value: "other",
    label: "Other",
  },
];
