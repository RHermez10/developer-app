import { DashboardWidget } from "@/components/dashboard/DashboardWidget";
import { PageHeader } from "@/components/shared/PageHeader";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Overview of your development activity"
      />

      {/*Stats Grid */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardWidget title="Projects">
          <p className="text-3xl font-bold text-white">4</p>
          <p className="mt-2 text-sm text-gray-400"> Active projects</p>
        </DashboardWidget>
        <DashboardWidget title="Applications">
          <p className="text-3xl font-bold text-white">12</p>
          <p className="mt-2 text-sm text-gray-400"> Job applications</p>
        </DashboardWidget>
        <DashboardWidget title="Streak">
          <p className="text-3xl font-bold text-white">18</p>
          <p className="mt-2 text-sm text-gray-400"> Days learning</p>
        </DashboardWidget>
        <DashboardWidget title="Skills Progress">
          <p className="text-3xl font-bold text-white">76%</p>
          <p className="mt-2 text-sm text-gray-400">Completion rate</p>
        </DashboardWidget>
      </section>
      {/*Main Grid*/}
      <section className="grid gap-6 lg:grid-cols-3">
        {/*Activity Feed*/}
        <DashboardWidget title="Recent Activity" className="lg:col-span-2">
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-800 p-4">
              {" "}
              Updated portfolio project
            </div>
            <div className="rounded-lg bg-gray-800 p-4">
              Applied to frontend role
            </div>
            <div className="rounded-lg bg-gray-800 p-4">
              {" "}
              Completed React course
            </div>
          </div>
        </DashboardWidget>
        {/*Quick Actions*/}
        <DashboardWidget title="Quick Actions">
          <div className="space-y-3">
            <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">
              {" "}
              Add Project
            </button>
            <button className="w-full rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
              Add Application
            </button>
          </div>
        </DashboardWidget>
      </section>
    </div>
  );
}
