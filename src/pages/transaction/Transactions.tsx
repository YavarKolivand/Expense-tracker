import toast from "react-hot-toast";
import EmptyList from "../../components/layout/dashboard/EmptyList";
import Header from "../../components/layout/Header";
import { useContext } from "react";
import TransactionContext from "../../context/TransactionContext";
import { useNavigate } from "react-router";
import { RiDeleteBin6Fill, RiPencilFill } from "react-icons/ri";
import { ImArrowDownLeft2, ImArrowUpRight2 } from "react-icons/im";
import MobileTransactions from "../../components/layout/MobileTransactions";

function Transactions() {
  const Context = useContext(TransactionContext);
  const navigate = useNavigate();

  if (!Context)
    throw new Error("TransactionTable must be inside TransactionProvider");
  const { transactions } = Context;

  const handleDelete = (id: string) => {
    const { deleteTransaction } = Context;
    deleteTransaction(id);
    toast.error("Transaction deleted!");
  };

  if (transactions.length === 0) {
    return <EmptyList />;
  }

  return (
    <>
      <div className="flex flex-col w-full md:w-4/5 dark:bg-slate-900 dark:text-white">
        <Header title="Transactions" />
        <div className="container mx-auto my-6 px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="overflow-hidden rounded-md border border-slate-300 shadow-sm bg-white dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
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
                  {transactions &&
                    transactions.map((transaction) => (
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
                              ? `+ ${transaction.amount}`
                              : `- ${transaction.amount}`}
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
            <MobileTransactions />
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
