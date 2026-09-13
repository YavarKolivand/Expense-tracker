import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import type {
  Transaction,
  transactionCategory,
  transactionType,
} from "../types/transaction";
import TransactionContext from "./TransactionContext";

interface TransactionProviderProps {
  children: ReactNode;
}

function TransactionProvider({ children }: TransactionProviderProps) {
  const [search, setSearch] = useState("");
  const [typeFiltered, setTypeFiltered] = useState<transactionType | "all">(
    "all",
  );
  const [categoryFiltered, setCategoryFiltered] = useState<
    transactionCategory | "all"
  >("all");
  const [sort, setSort] = useState("newest");

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const localTransactins = localStorage.getItem("transactions");
    return localTransactins ? JSON.parse(localTransactins) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((prevTransactions) => [transaction, ...prevTransactions]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id),
    );
  };

  const updateTransaction = (updatedTransaction: Transaction) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction,
      ),
    );
  };

  const filteredTransactions = transactions
    .filter((transaction) => {
      const searchMatch = transaction.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const typeMatch =
        typeFiltered === "all" || transaction.type === typeFiltered;

      const categoryMatch =
        categoryFiltered === "all" || transaction.category === categoryFiltered;

      return searchMatch && typeMatch && categoryMatch;
    })
    .sort((a, b) => {
      if (sort === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }

      if (sort === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }

      if (sort === "highest") {
        return b.amount - a.amount;
      }

      if (sort === "lowest") {
        return a.amount - b.amount;
      }

      return 0;
    });

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        filteredTransactions,
        sort,
        setSort,
        search,
        setSearch,
        categoryFiltered,
        setCategoryFiltered,
        typeFiltered,
        setTypeFiltered,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;
