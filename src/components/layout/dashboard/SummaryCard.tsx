interface SummaryCardProps {
  title: string;
  value: number;
  subtitle: string;
  icon: any;
  iconClassName: string;
  valueClassName: string;
}

function SummaryCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconClassName,
  valueClassName,
}: SummaryCardProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md dark:bg-slate-800">
      <div className="space-y-2 ">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-300">
          {title}
        </p>

        <h3 className={`text-2xl font-bold tracking-tight ${valueClassName}`}>
          {value.toLocaleString("en-US")}
        </h3>

        <p className="text-xs font-medium text-slate-400 dark:text-slate-300">
          {subtitle}
        </p>
      </div>

      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconClassName}`}
      >
        {Icon}
      </div>
    </div>
  );
}

export default SummaryCard;
