import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ProjectsToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-800 bg-gray-900 p-4 md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <div className="w-full md:max-w-sm">
        <Input placeholder="Search projects"/>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-3">
        <select className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none">
          <option>All</option>
          <option>Active</option>
          <option>Completed</option>
          <option>Archived</option>
        </select>
        <Button>Add Project</Button>
      </div>
    </div>
  );
}
