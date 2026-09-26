import { LuTrendingUp, LuTrendingDown, LuLayoutGrid } from "react-icons/lu";
import type { transactionCategory } from "../../../types/transaction";

interface categorisCardsType {
    totalIncome: number;
    totalExpense: number;
    rows: {
        count: number;
        total: number;
        income: number;
        expense: number;
        key: transactionCategory;
        label: string;
        icon: React.ComponentType<{
          className?: string;
        }>;
        iconBg: string;
        iconColor: string;
        barColor: string;
      }[];
}

function CategorisCards({totalIncome, totalExpense, rows}: categorisCardsType) {

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            <LuTrendingUp size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-400">Total Income</p>
            <p className="mt-0.5 truncate text-lg font-bold text-emerald-600 dark:text-emerald-400">
              + {totalIncome.toLocaleString("en-US")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">
            <LuTrendingDown size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-400">Total Expense</p>
            <p className="mt-0.5 truncate text-lg font-bold text-rose-600 dark:text-rose-400">
              - {totalExpense.toLocaleString("en-US")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
            <LuLayoutGrid size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-400">
              Active Categories
            </p>
            <p className="mt-0.5 truncate text-lg font-bold text-slate-800 dark:text-slate-200">
              {rows.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategorisCards;
