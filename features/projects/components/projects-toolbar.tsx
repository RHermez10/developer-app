import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ProjectsToolbarProps = {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onAddProject: () => void;
};

export function ProjectsToolbar({
  search,
  status,
  onSearchChange,
  onStatusChange,
  onAddProject,
}: ProjectsToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-800 bg-gray-900 p-4 md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <div className="w-full md:max-w-sm">
        <Input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      {/* Actions */}
      <div className="flex items-center gap-3">
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none"
        >
          <option value="ALL">All</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Archived">Archived</option>
        </select>
        <Button onClick={onAddProject}>Add Project</Button>
      </div>
    </div>
  );
}
