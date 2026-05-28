import {
  Briefcase,
  FolderKanban,
  Flame,
  TrendingUp,
  CheckCircle,
  Code2,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { PageHeader } from "@/components/shared/page-header";
import { ActivityItem } from "@/features/dashboard/components/activity-item";
import { DashboardWidget } from "@/components/dashboard/dashboard-widget";
import { StatCard } from "@/features/dashboard/components/stat-card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Overview of your development activity"
      />
      {/*Stats Grid */}{" "}
      <FadeIn delay={0.1}>
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Projects"
            value="4"
            description="Active projects"
            trend="+2 this month"
            icon={FolderKanban}
          />

          <StatCard
            title="Applications"
            value="12"
            description="Job applications"
            trend="+5 this week"
            icon={Briefcase}
          />

          <StatCard
            title="Streak"
            value="18"
            description="Days learning"
            trend="+3 days"
            icon={Flame}
          />

          <StatCard
            title="Skills Progress"
            value="76%"
            description="Completion rate"
            trend="+12%"
            icon={TrendingUp}
          />
        </section>
      </FadeIn>
      {/*Main Grid*/}
      <FadeIn delay={0.2}>
        <section className="grid gap-6 lg:grid-cols-3">
          {/*Activity Feed*/}
          <DashboardWidget title="Recent Activity" className="lg:col-span-2">
            <div className="space-y-4">
              <ActivityItem
                title="Updated portfolio project"
                time="2 hours ago"
                icon={Rocket}
              />

              <ActivityItem
                title="Applied to frontend role"
                time="Yesterday"
                icon={Briefcase}
              />

              <ActivityItem
                title="Completed React course"
                time="2 days ago"
                icon={CheckCircle}
              />

              <ActivityItem
                title="Started TypeScript practice"
                time="3 days ago"
                icon={Code2}
              />
            </div>
          </DashboardWidget>
          {/*Quick Actions*/}
          <DashboardWidget title="Quick Actions">
            <div className="space-y-3">
              <Link href="/projects?create=true">
                <button className="w-full mb-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">
                  {" "}
                  Add Project
                </button>
              </Link>
              <Link href="/applications?create=true">
                <button className="w-full rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
                  Add Application
                </button>
              </Link>
            </div>
          </DashboardWidget>
        </section>
      </FadeIn>
    </div>
  );
}
