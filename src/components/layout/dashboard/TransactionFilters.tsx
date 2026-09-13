import { LuSearch } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useContext } from "react";
import TransactionContext from "../../../context/TransactionContext";
import type {
  transactionCategory,
  transactionType,
} from "../../../types/transaction";

function TransactionFilters() {
  const Context = useContext(TransactionContext);
  if (!Context)
    throw new Error("TransactionTable must be inside TransactionProvider");
  const {
    setSearch,
    setTypeFiltered,
    setCategoryFiltered,
    setSort,
    typeFiltered,
    categoryFiltered,
    sort,
  } = Context;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFiltered(e.target.value as transactionType | "all");
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFiltered(e.target.value as transactionCategory | "all");
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  return (
    <>
      <div className="mt-6 rounded-lg border border-slate-200 bg-white p-2 shadow-sm dark:bg-slate-800 dark:text-slate-300">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <LuSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search transactions..."
              className="h-11 w-full rounded-lg border 
              border-slate-200 bg-slate-50 pl-10 pr-4 text-sm 
              text-slate-700 outline-none transition placeholder:text-slate-400 
              focus:border-slate-300 focus:bg-white focus:ring-2 
              focus:ring-slate-100 dark:bg-slate-700 dark:text-slate-200 
              dark:focus:bg-slate-600 dark:focus:ring-slate-500 dark:focus:border-slate-500"
            />
          </div>

          {/* Filters */}
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:w-auto">
            {/* Type */}
            <div className="relative">
              <select
                value={typeFiltered}
                onChange={handleTypeChange}
                className="h-11 w-full min-w-37.5 appearance-none rounded-lg 
              border border-slate-200 bg-white px-4 pr-10 text-sm font-medium 
              text-slate-600 outline-none transition hover:border-slate-300 
              focus:border-slate-300 focus:ring-2 focus:ring-slate-100
              dark:bg-slate-700 dark:text-slate-200 
              dark:focus:bg-slate-600 dark:focus:ring-slate-500 dark:focus:border-slate-500"
              >
                <option value="all">All Types</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>

              <IoIosArrowDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            {/* Category */}
            <div className="relative">
              <select
                value={categoryFiltered}
                onChange={handleCategoryChange}
                className="h-11 w-full min-w-40 appearance-none rounded-lg border 
              border-slate-200 bg-white px-4 pr-10 text-sm font-medium text-slate-600 
              outline-none transition hover:border-slate-300 focus:border-slate-300 
              focus:ring-2 focus:ring-slate-100 dark:bg-slate-700 dark:text-slate-200 
              dark:focus:bg-slate-600 dark:focus:ring-slate-500 dark:focus:border-slate-500"
              >
                <option value="all">All Categories</option>
                <option value="food">Food</option>
                <option value="shopping">Shopping</option>
                <option value="transport">Transport</option>
                <option value="bills">Bills</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="salary">Salary</option>
                <option value="other">Other</option>
              </select>

              <IoIosArrowDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={handleSortChange}
                className="h-11 w-full min-w-37.5 appearance-none rounded-lg border 
              border-slate-200 bg-white px-4 pr-10 text-sm font-medium text-slate-600 
              outline-none transition hover:border-slate-300 focus:border-slate-300 
              focus:ring-2 focus:ring-slate-100 dark:bg-slate-700 dark:text-slate-200 
              dark:focus:bg-slate-600 dark:focus:ring-slate-500 dark:focus:border-slate-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Amount</option>
                <option value="lowest">Lowest Amount</option>
              </select>
              <IoIosArrowDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionFilters;

