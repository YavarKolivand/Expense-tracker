import { useContext } from "react";
import { ImArrowDownLeft2, ImArrowUpRight2 } from "react-icons/im";
import { RiDeleteBin6Fill, RiPencilFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import TransactionContext from "../../context/TransactionContext";
import toast from "react-hot-toast";

function MobileTransactions() {
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
  return (
    <>
      <div className="divide-y divide-slate-100 md:hidden dark:divide-slate-700">
        {transactions.map((transaction) => (
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

                <div className="mt-1 flex items-center gap-2">
                  <span
                    className={
                      transaction.category === "salary"
                        ? "rounded-lg bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-600"
                        : transaction.category === "other"
                          ? "rounded-lg bg-orange-50 px-2 py-0.5 text-[11px] font-medium text-orange-600"
                          : "rounded-lg bg-violet-50 px-2 py-0.5 text-[11px] font-medium text-violet-600"
                    }
                  >
                    {transaction.category}
                  </span>

                  <p className="text-xs text-slate-400">{transaction.date}</p>
                </div>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
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
    </>
  );
}

export default MobileTransactions;
