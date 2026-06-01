import { ExternalLink, Pencil, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { memo } from "react";

type ProjectsCardProps = {
  title: string;
  description: string;
  status: "Active" | "Completed" | "Archived";
  techStack: string[];
  onDelete?: () => void;
  onEdit?: () => void;
};

function ProjectCardComponent({
  title,
  description,
  status,
  techStack,
  onDelete,
  onEdit,
}: ProjectsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-all hover:border-gray-700 hover:shadow-lg"
    >
      {/* Top Section*/}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-gray-400">{description}</p>
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
        <button
          onClick={onEdit}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
        >
          <Pencil size={16} />
          Edit
        </button>
        <button
          onClick={onDelete}
          aria-label="Delete project"
          className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </motion.div>
  );
}

export const ProjectCard = memo(ProjectCardComponent);
