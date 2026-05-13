import StatsGrid from "@/components/dashboard/StatsGrid";
import SkillChart from "@/components/dashboard/SkillChart";
import ProjectsOverview from "@/components/dashboard/ProjectsOverview";
import ApplicationsOverview from "@/components/dashboard/ApplicationsOverview";
import ActivityFeed from "@/components/dashboard/ActivityFeed";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">
          Welcome back 👋
        </h1>
        <p className="text-muted-foreground">
          Here’s your developer progress overview
        </p>
      </div>

      {/* Stats */}
      <StatsGrid />

      {/* Chart */}
      <SkillChart />

      {/* Middle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectsOverview />
        <ApplicationsOverview />
      </div>

      {/* Activity */}
      <ActivityFeed />
    </div>
  );
}