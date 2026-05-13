import { PageHeader } from "@/components/shared/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Projects"
        description="Manage and track your development projects."
      />

      <div className="rounded-x1 border border-gray-800 bg-gray-900 p-6">
        Projects content coming soon
      </div>
      <Button>New Project</Button>
      <Badge>In progress</Badge>
    </div>
  );
}
