import { LuReceipt, LuPlus } from "react-icons/lu";
import { Link } from "react-router";

function EmptyList() {
  return (
    <>
      <div className="flex items-center justify-center mt-7">
        <div className="flex flex-col items-center gap-4 max-w-sm text-center px-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 dark:bg-slate-800">
            <LuReceipt className="text-4xl text-indigo-500 dark:text-indigo-400" />
          </div>

          <div className="space-y-1.5">
            <h2 className="text-gray-700 dark:text-slate-200 font-semibold text-lg">
              No transactions yet
            </h2>
            <p className="text-sm text-gray-400 dark:text-slate-400">
              Adding your first transaction.
            </p>
          </div>

          <Link
            to="/create"
            className="flex items-center gap-1.5 text-sm font-semibold cursor-pointer text-white bg-indigo-600 py-2.5 px-4 rounded-lg hover:bg-indigo-500 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            <LuPlus className="text-base" />
            New transaction
          </Link>
        </div>
      </div>
    </>
  );
}

export default EmptyList;
