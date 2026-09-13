import { useContext, useMemo } from "react";

import Header from "../components/layout/Header";
import EmptyList from "../components/layout/dashboard/EmptyList";
import TransactionContext from "../context/TransactionContext";
import CategorisCards from "../components/layout/categoris/CategorisCards";
import CategorisBreakdown from "../components/layout/categoris/CategorisBreakdown";
import { CATEGORY_META } from "../components/layout/categoris/categoriMeta";


function Categories() {
  const Context = useContext(TransactionContext);

  if (!Context)
    throw new Error("Categories must be inside TransactionProvider");

  const { transactions } = Context;

  const { rows, totalIncome, totalExpense, maxTotal } = useMemo(() => {
    const grouped = CATEGORY_META.map((meta) => {
      const categoryTransactions = transactions.filter(
        (t) => t.category === meta.key,
      );

      const total = categoryTransactions.reduce(
        (sum, t) => sum + t.amount,
        0,
      );

      const income = categoryTransactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

      const expense = categoryTransactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

      return {
        ...meta,
        count: categoryTransactions.length,
        total,
        income,
        expense,
      };
    }).filter((row) => row.count > 0);

    grouped.sort((a, b) => b.total - a.total);

    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    const max = grouped.reduce((m, row) => Math.max(m, row.total), 0);

    return {
      rows: grouped,
      totalIncome: income,
      totalExpense: expense,
      maxTotal: max || 1,
    };
  }, [transactions]);

  if (transactions.length === 0) {
    return (
      <div className="flex flex-col w-full md:w-4/5 dark:bg-slate-900 dark:text-white">
        <Header title="Categories" />
        <div className="container mx-auto my-6 px-2 sm:px-4 md:px-6 lg:px-8">
          <EmptyList />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full md:w-4/5 dark:bg-slate-900 dark:text-white">
      <Header title="Categories" />

      <div className="container mx-auto my-6 flex flex-col gap-6 px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Summary cards */}
        <CategorisCards totalIncome={totalIncome} totalExpense={totalExpense} rows={rows} />
        {/* Category breakdown */}
        <CategorisBreakdown rows={rows} maxTotal={maxTotal} />
      </div>
    </div>
  );
}

export default Categories;