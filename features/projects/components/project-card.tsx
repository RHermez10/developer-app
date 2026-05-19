import { ExternalLink, Pencil } from "lucide-react";

type ProjectsCardProps = {
  title: string;
  desciption: string;
  status: "Active" | "Completed" | "Archived";
  techStack: string[];
};

export function ProjectCard({
  title,
  desciption,
  status,
  techStack,
}: ProjectsCardProps) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-all hover:border-gray-700 hover:shadow-lg">
      {/* Top Section*/}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-gray-400">{desciption}</p>
        </div>
        {/* Status Badge */}
        <span
          className={` rounded-full px-3 py-1 text-xs font-medium${
            status === "Active"
              ? "bg-green-500/10 text-green-400"
              : status === "Completed"
              ? "bg-blue-500/10 text-blue-400"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Tech Stack */}

      <div className="mt-6 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg bg-gray-800 px-3 py-1 text-xs text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center justify-between">
        <button className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300">
          <ExternalLink size={16} />
          View Project
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
          <Pencil size={16} />
          Edit
        </button>
      </div>
    </div>
  );
}
