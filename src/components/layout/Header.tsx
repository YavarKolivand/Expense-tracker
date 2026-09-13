import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { PiListBold } from "react-icons/pi";
import { IoWallet } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { HiOutlineTag } from "react-icons/hi";
import { Link, NavLink } from "react-router";
import Theme from "./Theme";

interface props {
  title: string;
  welcomeText?: string;
}

function Header({ title, welcomeText }: props) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <header className="container flex justify-between mx-auto h-16 my-6 px-2 sm:px-4 md:px-6 lg:px-8">
        <PiListBold
          onClick={() => setShowSidebar(true)}
          className="text-3xl text-gray-500 cursor-pointer md:hidden"
        />

        <div>
          <h1 className="font-bold text-lg md:text-2xl">{title}</h1>

          <h3 className="text-sm md:text-lg">{welcomeText}</h3>
        </div>

        <div>
          {title !== "New Transaction" && title !== "Edit Transaction" && 
            (<Link
              className="flex items-center text-sm md:text-lg cursor-pointer 
          gap-2 text-white bg-indigo-600 py-2 px-3 md:px-4 rounded-lg 
          hover:bg-indigo-500 transition hover:shadow-lg"
              to="/create"
            >
              <FiPlus />
              Add Transaction
            </Link>)
          }
        </div>
      </header>

      {showSidebar && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setShowSidebar(false)}
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
          />

          {/* Mobile Sidebar */}
          <div className="fixed left-0 top-0 z-50 flex h-screen w-2/3 flex-col items-center justify-between bg-slate-100 px-2 py-6 shadow-md md:hidden dark:bg-slate-800 dark:text-white">
            <aside className="flex flex-col gap-7">
              <div className="flex items-center justify-center gap-3">
                <IoWallet className="text-2xl text-indigo-600" />

                <h3 className="font-semibold">Expense Tracker</h3>
              </div>

              <ul className="flex flex-col">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => setShowSidebar(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 cursor-pointer text-sm px-3 py-2 rounded-md bg-indigo-300/50 text-slate-100 transition"
                        : "flex items-center gap-3 cursor-pointer text-sm px-3 py-2"
                    }
                  >
                    <RxDashboard />
                    Dashboard
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/transactions"
                    onClick={() => setShowSidebar(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 cursor-pointer text-sm px-3 py-2 rounded-md bg-indigo-300/50 text-slate-100 transition"
                        : "flex items-center gap-3 cursor-pointer text-sm px-3 py-2"
                    }
                  >
                    <GrTransaction />
                    Transactions
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/categories"
                    onClick={() => setShowSidebar(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 cursor-pointer text-sm px-3 py-2 rounded-md bg-indigo-300/50 text-slate-100 transition"
                        : "flex items-center gap-3 cursor-pointer text-sm px-3 py-2"
                    }
                  >
                    <HiOutlineTag />
                    Categories
                  </NavLink>
                </li>
              </ul>
            </aside>

            <div>
              <Theme />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
