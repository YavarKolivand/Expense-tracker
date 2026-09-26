import { ImArrowDownLeft2 } from "react-icons/im";
import { ImArrowUpRight2 } from "react-icons/im";
import { Link, useNavigate } from "react-router";
import { RiPencilFill } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useContext, useState } from "react";
import TransactionContext from "../../../context/TransactionContext";
import EmptyList from "./EmptyList";
import toast from "react-hot-toast";

function TransactionTable() {
  const Context = useContext(TransactionContext);
  const navigate = useNavigate();

  const [showAll, setShowAll] = useState(false);

  if (!Context)
    throw new Error("TransactionTable must be inside TransactionProvider");
  const { transactions, filteredTransactions } = Context;

  const handleDelete = (id: string) => {
    const { deleteTransaction } = Context;
    deleteTransaction(id);
    toast.error("Transaction deleted!");
  };

  const displayedTransactions = showAll
    ? filteredTransactions
    : filteredTransactions.slice(0, 3);

  if (transactions.length === 0) {
    return <EmptyList />;
  }

  if (filteredTransactions.length === 0) {
    return (
      <div className="mt-6 rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm dark:bg-slate-800 dark:text-slate-300">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          No trnasactions found with this filter.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:bg-slate-800 dark:text-slate-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-300">
              Recent Transactions
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Your latest financial activity
            </p>
          </div>

          <Link
            to="/transactions"
            type="button"
            className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
          >
            View all
          </Link>
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70 dark:bg-slate-800 dark:text-slate-300">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Transaction
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Category
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Date
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Type
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Amount
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {displayedTransactions &&
                displayedTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="group transition-colors hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={
                            transaction.type === "income"
                              ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"
                              : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600"
                          }
                        >
                          {transaction.type === "income" ? (
                            <ImArrowDownLeft2 />
                          ) : (
                            <ImArrowUpRight2 />
                          )}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-300">
                            {transaction.title}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-400">
                            {transaction.category}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={
                          transaction.category === "salary"
                            ? "rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600"
                            : transaction.category === "other"
                              ? "rounded-lg bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600"
                              : "rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-600"
                        }
                      >
                        {transaction.category}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-500">
                      {transaction.date}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={
                          transaction.type === "income"
                            ? "inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600"
                            : "inline-flex items-center gap-1.5 text-xs font-medium text-rose-600"
                        }
                      >
                        <span
                          className={
                            transaction.type === "income"
                              ? "h-1.5 w-1.5 rounded-full bg-emerald-500"
                              : "h-1.5 w-1.5 rounded-full bg-rose-500"
                          }
                        ></span>
                        {transaction.type}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={
                          transaction.type === "income"
                            ? "text-sm font-bold text-emerald-600"
                            : "text-sm font-bold text-rose-600"
                        }
                      >
                        {transaction.type === "income"
                          ? `+ ${transaction.amount.toLocaleString("en-US")}`
                          : `- ${transaction.amount.toLocaleString("en-US")}`}
                      </span>
                    </td>

                    <td className="flex px-5 py-4">
                      <button
                        onClick={() => navigate(`/edit/${transaction.id}`)}
                        type="button"
                        aria-label="Transaction options"
                        className="flex cursor-pointer h-8 w-8 items-center justify-center rounded-lg text-slate-400 opacity-50 transition-all hover:bg-slate-100 hover:text-slate-600 group-hover:opacity-100"
                      >
                        <RiPencilFill />
                      </button>
                      <button
                        onClick={() => handleDelete(transaction.id)}
                        type="button"
                        aria-label="Transaction options"
                        className="flex cursor-pointer h-8 w-8 items-center justify-center rounded-lg text-rose-400 opacity-50 transition-all hover:bg-slate-100 group-hover:opacity-100 hover:text-rose-600"
                      >
                        <RiDeleteBin6Fill />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Transactions */}
        <div className="divide-y divide-slate-100 md:hidden">
          {/* Mobile Transaction 1 */}
          {displayedTransactions &&
            displayedTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between gap-3 px-4 py-4"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className={
                      transaction.type === "income"
                        ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"
                        : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600"
                    }
                  >
                    {transaction.type === "income" ? (
                      <ImArrowDownLeft2 />
                    ) : (
                      <ImArrowUpRight2 />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-300">
                      {transaction.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {transaction.date}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <p
                    className={
                      transaction.type === "income"
                        ? "text-sm font-bold text-emerald-600"
                        : "text-sm font-bold text-rose-600"
                    }
                  >
                    {transaction.type === "income"
                      ? `+ ${transaction.amount}`
                      : `- ${transaction.amount}`}
                  </p>

                  <button
                    onClick={() => navigate(`/edit/${transaction.id}`)}
                    type="button"
                    aria-label="Edit transaction"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-emerald-50 hover:text-emerald-500"
                  >
                    <RiPencilFill />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(transaction.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-rose-400 transition-colors hover:bg-rose-50 hover:text-rose-500"
                    aria-label="Delete transaction"
                  >
                    <RiDeleteBin6Fill size={16} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="border-t border-slate-100 mt-3">
        {filteredTransactions.length > 3 && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="w-full py-1 text-sm transition cursor-pointer text-slate-500 hover:text-indigo-600"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </>
  );
}

export default TransactionTable;
