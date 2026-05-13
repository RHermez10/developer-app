import { PageHeader } from "@/components/shared/PageHeader";
import { Card } from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Overview of your development activity."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
       <Card>Projects Stats</Card>
       <Card>Applications Stats</Card>
       <Card>Learning Progress</Card>
       <Card>Activity</Card>
      </div>
    </div>
  );
}
