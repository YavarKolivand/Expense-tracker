import { IoWallet } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { HiOutlineTag } from "react-icons/hi";
import { NavLink } from "react-router";
import Theme from "./Theme";

function Sidebar() {
  return (
    <>
      <div className="hidden md:flex flex-col items-center justify-between bg-slate-100 md:w-1/5 min-h-screen py-6 px-2 shadow-md dark:bg-slate-800 dark:text-white">
        <aside className="flex flex-col gap-7">
          <div className="flex gap-3 items-center justify-center">
            <IoWallet className="text-indigo-600 text-2xl" />
            <h3 className="font-semibold">Expense Tracker</h3>
          </div>
          <ul className="flex flex-col">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 items-center space-x-auto cursor-pointer text-sm px-3 py-2 rounded-md bg-indigo-300/50 text-indigo-600 transition dark:text-slate-100"
                    : "flex gap-3 items-center space-x-auto cursor-pointer text-sm px-3 py-2 dark:text-slate-300"
                }
              >
                <RxDashboard />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transactions"
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 items-center space-x-auto cursor-pointer text-sm px-3 py-2 rounded-md bg-indigo-300/50 text-indigo-600 transition dark:text-slate-100"
                    : "flex gap-3 items-center space-x-auto cursor-pointer text-sm px-3 py-2 dark:text-slate-300"
                }
              >
                <GrTransaction />
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-3 items-center space-x-auto cursor-pointer text-sm px-3 py-2 rounded-md bg-indigo-300/50 text-indigo-600 transition dark:text-slate-100"
                    : "flex gap-3 items-center space-x-auto cursor-pointer text-sm px-3 py-2 dark:text-slate-300"
                }
              >
                <HiOutlineTag />
                Categories
              </NavLink>
            </li>
          </ul>
        </aside>
        <div className="">
          <Theme />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
