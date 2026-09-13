import { Toaster } from "react-hot-toast";
import Sidebar from "./components/layout/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/transaction/Transactions";
import Categories from "./pages/Categories";
import TransactionProvider from "./context/TransactionProvider";
import Create from "./pages/transaction/Create";
import Edit from "./pages/transaction/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container flex min-h-screen bg-slate-50 dark:bg-slate-950 dark:text-white">
          <TransactionProvider>
            <Sidebar />

            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/transactions" element={<Transactions />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:id" element={<Edit />} />

              <Route path="/categories" element={<Categories />} />
            </Routes>
          </TransactionProvider>
        </div>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
