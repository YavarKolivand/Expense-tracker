import { createContext } from "react";
import type { Transaction, transactionCategory, transactionType } from "../types/transaction";

interface TransactionContextType{
    transactions: Transaction[];
    addTransaction: (transaction: Transaction) =>void
    deleteTransaction: (id: string) =>void
    updateTransaction: (transaction: Transaction) =>void
    filteredTransactions: Transaction[];
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    typeFiltered: transactionType | "all";
    setTypeFiltered: React.Dispatch<React.SetStateAction<transactionType | "all">>;
    categoryFiltered: transactionCategory | "all";
    setCategoryFiltered: React.Dispatch<React.SetStateAction<"all" | transactionCategory>>;
    sort: string;
    setSort: React.Dispatch<React.SetStateAction<string>>;
}


const TransactionContext  = createContext<TransactionContextType | undefined>(undefined);

export default TransactionContext;