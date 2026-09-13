import SummaryCard from "./SummaryCard";
import { VscDownload } from "react-icons/vsc";
import { LiaUploadSolid } from "react-icons/lia";
import { LiaWalletSolid } from "react-icons/lia";
import { FiPieChart } from "react-icons/fi";
// import type { Transaction } from "../../../types/transaction";
import { useContext } from "react";
import TransactionContext from "../../../context/TransactionContext";

// interface transactionsTypesSummary {
//   transactions: Transaction[];
// }

function SummaryCards() {
  const context = useContext(TransactionContext);
  
  if(!context){
    throw new Error("summaryCards must be used inside TransactionProvider")
  }
  
  const {transactions} = context;
  

  const incomes = transactions.reduce((total, transaction) => {
    if (transaction.type === "income") {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  const expenses = transactions.reduce((total, transaction) => {
    if (transaction.type === "expense") {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  const balance = incomes - expenses;

  const totalTransactions = transactions.length;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          title="Total Income"
          value={incomes}
          subtitle="IRR"
          icon={<VscDownload />}
          iconClassName="text-emerald-600 bg-emerald-50"
          valueClassName="text-emerald-500"
        />
        <SummaryCard
          title="Total Expense"
          value={expenses}
          subtitle="IRR"
          icon={<LiaUploadSolid />}
          iconClassName="text-rose-600 bg-rose-50"
          valueClassName="text-rose-500"
        />
        <SummaryCard
          title="Balance"
          value={balance}
          subtitle="IRR"
          icon={<LiaWalletSolid />}
          iconClassName="text-indigo-600 bg-indigo-50"
          valueClassName="text-indigo-500"
        />
        <SummaryCard
          title="Transactions"
          value={totalTransactions}
          subtitle="This mounth"
          icon={<FiPieChart />}
          iconClassName="text-amber-600 bg-amber-50"
          valueClassName="text-amber-500"
        />
      </div>
    </>
  );
}

export default SummaryCards;
