import { LucideIcon } from "lucide-react";
type StatCardProps = {
  title: string;
  value: string;
  description: string;
  trend?: string;
  icon: LucideIcon;
};

export function StatCard({
  title,
  value,
  description,
  trend,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-gray-700">
      {/* Top */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-400"> {title} </p>
        <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400">
          <Icon size={18}></Icon>
        </div>
      </div>

      {/* Main value */}
      <div className="mt-4">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          {value}
        </h2>
        <div className="mt-2 flex items-center gap-2">
          {trend && (
            <span className="text-sm font-medium text-green-400">{trend}</span>
          )}

          <span className="text-sm text-gray-500">{description}</span>
        </div>
      </div>
    </div>
  );
}
