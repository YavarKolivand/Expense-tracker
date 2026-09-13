import { useParams } from "react-router"
import Header from "../../components/layout/Header";
import { useContext, useEffect, useState } from "react";
import TransactionContext from "../../context/TransactionContext";
import type { transactionCategory, transactionType } from "../../types/transaction";
import toast from "react-hot-toast";

function Edit() {
   const {id} = useParams();
   const context = useContext(TransactionContext);
   if(!context){
    throw new Error("Edit transaction failed!")
   }
   const {transactions} = context;
   const {updateTransaction} = context;

    const transaction = transactions.find((item)=> item.id === id);

    const [title , setTitle] = useState<string>("");
    const [amount , setAmount] = useState<number>(0);
    const [type , setType] = useState<transactionType>("income");
    const [category , setCategory] = useState<transactionCategory>();
    const [date , setDate] = useState<string>("");

    useEffect(()=>{
      if(transaction){
        setTitle(transaction.title);
        setAmount(transaction.amount)
        setCategory(transaction.category)
        setType(transaction.type)
        setDate(transaction.date)
      }
    },[transaction])


   const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>)=> {
    e.preventDefault();

    updateTransaction({
        id: transaction?.id as string,
        title ,
        amount,
        type,
        category: category as transactionCategory,
        date
    })
    toast.success('Transaction updated!')
   }
    
  return (
    <>
      <div className="flex flex-col w-full md:w-4/5 bg-white text-slate-800 dark:bg-slate-900 dark:text-white">
        <div className="container mx-auto my-6 px-2 sm:px-4 md:px-6 lg:px-8">
           <Header title="Edit Transaction"/>

          
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 px-4 py-6 sm:px-6 dark:bg-slate-900 dark:text-white">
                  <div className="max-w-150 flex flex-col gap-2">
                    <label>Title:</label>
                    <input
                      value={title}
                      onChange={(e)=> setTitle(e.target.value)}
                      className=" bg-slate-100 text-slate-600 px-4 py-2 rounded-md border border-slate-200 dark:bg-slate-800 dark:text-slate-300"
                      type="text"
                    />
                    {title ? "" :<p className="text-xs font-bold text-rose-500">Title is required!</p>}
                  </div>
                  <div className="max-w-150 flex flex-col gap-2">
                    <label>Amount:</label>
                    <input
                      value={amount}
                      onChange={(e)=> setAmount(Number(e.target.value))}
                      className=" bg-slate-100 text-slate-600 px-4 py-2 rounded-md border border-slate-200 dark:bg-slate-800 dark:text-slate-300"
                      type="number"
                    />
                     {amount ? "" :<p className="text-xs font-bold text-rose-500">Amount is required!</p>}
                  </div>
                  <div className="max-w-150 flex flex-col gap-2">
                    <label>Type:</label>
                    <select
                    value={type}
                    onChange={(e) =>
                      setType(e.target.value as transactionType)
                    }
                    className=" bg-slate-100 text-slate-600 px-4 py-2 rounded-md border border-slate-200 dark:bg-slate-800 dark:text-slate-300"
                  >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                  </select>
                  </div>
                  <div className="max-w-150 flex flex-col gap-2">
                    <label>Category:</label>
      
                    <select
                     value={category}
                     onChange={(e)=> setCategory(e.target.value as transactionCategory)}
                     className=" bg-slate-100 text-slate-600 px-4 py-2 rounded-md border border-slate-200 dark:bg-slate-800 dark:text-slate-300"
                    >
                      
                      <option value="food">Food</option>
                      <option value="shopping">Shopping</option>
                      <option value="transport">Transport</option>
                      <option value="bills">Bills</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="health">Health</option>
                      <option value="salary">Salary</option>
                      <option value="other">Other</option>
                    </select>

                     {category ? "" :<p className="text-xs font-bold text-rose-500">Category is required!</p>}
                  </div>
                  <div className="max-w-150 flex flex-col gap-2">
                    <label>Date:</label>
                    <input
                     value={date}
                     onChange={(e)=> setDate(e.target.value)}
                      className="bg-slate-100 text-slate-600 px-4 py-2 rounded-md border border-slate-200 dark:bg-slate-800 dark:text-slate-300"
                      type="date"
                    />
                     {date ? "" :<p className="text-xs font-bold text-rose-500">Date is required!</p>}
                  </div>
                  <button
                    disabled= {title ==="" || !amount || !category || !date}
                    type="submit"
                    className="w-fit mt-4 items-center text-sm md:text-lg cursor-pointer
                              text-white bg-indigo-600 py-2 px-3 md:px-4 rounded-lg
                              hover:bg-indigo-500 transition hover:shadow-lg
                              disabled:cursor-not-allowed disabled:bg-indigo-400"
                  >
                    Edit Transaction
                  </button>
                </div>
            </form>
          
        </div>
      </div>
    </>
  )
}

export default Edit