export type transactionType = "income" | "expense";

export type transactionCategory =
  | "food"
  | "shopping"
  | "transport"
  | "bills"
  | "entertainment"
  | "health"
  | "salary"
  | "other";

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: transactionType;
  category: transactionCategory;
  date: string;
}
