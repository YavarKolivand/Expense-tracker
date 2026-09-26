import type { transactionCategory } from "../../../types/transaction";

interface breakdownType {
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
  maxTotal: number;
}

function CategorisBreakdown({ rows, maxTotal }: breakdownType) {
  return (
    <>
      <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="border-b border-slate-100 px-3 py-4 dark:border-slate-700">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-200">
            Breakdown by Category
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            How your transactions are distributed across categories
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 xl:grid-cols-3">
          {rows.map((row) => {
            const Icon = row.icon;
            const percentage = Math.round((row.total / maxTotal) * 100);

            return (
              <div
                key={row.key}
                className="rounded-lg border border-slate-200 p-4 transition-colors hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${row.iconBg} ${row.iconColor}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {row.label}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">
                        {row.count}{" "}
                        {row.count === 1 ? "transaction" : "transactions"}
                      </p>
                    </div>
                  </div>

                  <p className="shrink-0 text-sm font-bold text-slate-800 dark:text-slate-200">
                    {row.total.toLocaleString("en-US")}
                  </p>
                </div>

                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                  <div
                    className={`h-full rounded-full ${row.barColor}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                {row.income > 0 && row.expense > 0 && (
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className="text-emerald-600 dark:text-emerald-400">
                      + {row.income}
                    </span>
                    <span className="text-rose-600 dark:text-rose-400">
                      - {row.expense}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CategorisBreakdown;
