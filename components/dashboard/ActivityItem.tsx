import { LucideIcon } from "lucide-react";

type ActivityItemProps = {
  title: string;
  time: string;
  icon: LucideIcon;
};

export function ActivityItem({ title, time, icon: Icon }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-gray-800/60 p-4 transition-colors hover:bg-gray-800">
      {/* Icon */}
      <div className="rounded-g bg-indigo-500/10 p-2 text-indigo-400">
        <Icon size={18}></Icon>
      </div>
      {/* Content */}
      <div className="flex-1">
        <p className="font-medium text-white">{title}</p>
        <p className="mt-1 text-sm text-gray-400">{time}</p>
      </div>
    </div>
  );
}
