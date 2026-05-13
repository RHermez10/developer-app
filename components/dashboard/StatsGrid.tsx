import StatCard from "./StatCard";


export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard label="Projects" value="8" />
      <StatCard label="Applications" value="12" />
      <StatCard label="Interviews" value="3" />
      <StatCard label="Streak" value="5 days" />
    </div>
  );
}