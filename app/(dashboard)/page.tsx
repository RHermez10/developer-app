import { PageHeader } from "@/components/shared/PageHeader";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Overview of your development activity."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
          Stats Card
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
          Stats Card
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
          Stats Card
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
          Stats Card
        </div>
      </div>
    </div>
  );
}
