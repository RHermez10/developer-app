import { Briefcase, Calendar, MapPin, Pencil, Trash2 } from "lucide-react";

type ApplicationStatus = "Applied" | "Interview" | "Offer" | "Rejected";

type ApplicationCardProps = {
  company: string;
  role: string;
  status: ApplicationStatus;
  appliedDate: string;
  location: string;
  onDelete?: () => void;
  onEdit?: () => void;
};

export function ApplicationCard({
  company,
  role,
  status,
  appliedDate,
  location,
  onDelete, onEdit
}: ApplicationCardProps) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-all hover:border-gray-700 hover:shadow-lg">
      {/*Top */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{role}</h3>
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
            <Briefcase size={16} />
            <span>{company}</span>
          </div>
        </div>

        {/*Status */}
        <span
          className={` rounded-full px-3 py-1 text-xs font-medium ${
            status === "Applied"
              ? "bg-blue-500/10 text-blue-400"
              : status === "Interview"
              ? "bg-yellow-500/10 text-yellow-400"
              : status === "Offer"
              ? "bg-green-500/10 text-green-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {status}
        </span>
      </div>
      {/*Meta */}
      <div className="mt-6 space-y-3 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span> {appliedDate} </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span> {location} </span>
        </div>
      </div>

      {/*Actions */}
      <div className="mt-6 flex items-center justify-end gap-4">
        <button onClick={onEdit} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
          <Pencil size={16} />
          Edit
        </button>
        <button
          onClick={onDelete}
          className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
}
