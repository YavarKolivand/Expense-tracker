import SummaryCards from "../components/layout/dashboard/SummaryCards";
import Header from "../components/layout/Header";
import TransactionFilters from "../components/layout/dashboard/TransactionFilters";
import TransactionTable from "../components/layout/dashboard/TransactionTable";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col w-full md:w-4/5 bg-white text-slate-800 dark:bg-slate-900 dark:text-white">
        <Header title="Dashboard" welcomeText="Welcome back, Yavar 👋" />
        <div className="container mx-auto my-6 px-2 sm:px-4 md:px-6 lg:px-8">
          <SummaryCards />
          <TransactionFilters />
          <TransactionTable />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
