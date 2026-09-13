import type { transactionCategory } from "../../../types/transaction";
import {
  LuUtensils,
  LuShoppingBag,
  LuCar,
  LuReceipt,
  LuClapperboard,
  LuHeartPulse,
  LuWallet,
  LuLayoutGrid,
} from "react-icons/lu";

type CategoryMeta = {
  key: transactionCategory;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  barColor: string;
};

export const CATEGORY_META: CategoryMeta[] = [
  {
    key: "food",
    label: "Food",
    icon: LuUtensils,
    iconBg: "bg-orange-50 dark:bg-orange-500/10",
    iconColor: "text-orange-600 dark:text-orange-400",
    barColor: "bg-orange-500",
  },
  {
    key: "shopping",
    label: "Shopping",
    icon: LuShoppingBag,
    iconBg: "bg-violet-50 dark:bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    barColor: "bg-violet-500",
  },
  {
    key: "transport",
    label: "Transport",
    icon: LuCar,
    iconBg: "bg-sky-50 dark:bg-sky-500/10",
    iconColor: "text-sky-600 dark:text-sky-400",
    barColor: "bg-sky-500",
  },
  {
    key: "bills",
    label: "Bills",
    icon: LuReceipt,
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    barColor: "bg-amber-500",
  },
  {
    key: "entertainment",
    label: "Entertainment",
    icon: LuClapperboard,
    iconBg: "bg-pink-50 dark:bg-pink-500/10",
    iconColor: "text-pink-600 dark:text-pink-400",
    barColor: "bg-pink-500",
  },
  {
    key: "health",
    label: "Health",
    icon: LuHeartPulse,
    iconBg: "bg-rose-50 dark:bg-rose-500/10",
    iconColor: "text-rose-600 dark:text-rose-400",
    barColor: "bg-rose-500",
  },
  {
    key: "salary",
    label: "Salary",
    icon: LuWallet,
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    barColor: "bg-blue-500",
  },
  {
    key: "other",
    label: "Other",
    icon: LuLayoutGrid,
    iconBg: "bg-slate-100 dark:bg-slate-500/10",
    iconColor: "text-slate-600 dark:text-slate-400",
    barColor: "bg-slate-500",
  },
];