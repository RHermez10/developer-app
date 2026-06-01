"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useProjectsStore } from "@/store/projects-store";
import { ProjectFormData, projectSchema } from "../schema/project-schema";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
type AddProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;

  initialData?: {
    id?: string;
    title: string;
    description: string;
    status: "Active" | "Completed" | "Archived";
  };
};

export function AddProjectModal({
  isOpen,
  onClose,
  initialData,
}: AddProjectModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),

    defaultValues: {
      title: "",
      description: "",
      status: "Active",
    },
  });
  const addProject = useProjectsStore((state) => state.addProject);
  const updateProject = useProjectsStore((state) => state.updateProject);

  function onSubmit(data: ProjectFormData) {
    if (initialData?.id) {
      updateProject(initialData.id, {
        title: data.title,
        description: data.description,
        status: data.status,
      });
    } else {
      addProject({
        id: crypto.randomUUID(),
        title: data.title,
        description: data.description,
        status: data.status,
        techStack: ["Next.js", "TypeScript"],
      });
    }

    reset();
    onClose();
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Project">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Project Title
          </label>
          <Input placeholder="Developer Dashboard" {...register("title")} />

          {errors.title && (
            <p className="mt-1 text-sm text-red-400">{errors.title.message}</p>
          )}
        </div>
        {/*Description */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Description
          </label>

          <textarea
            rows={4}
            placeholder="Describe your project..."
            {...register("description")}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500"
          />

          {errors.description && (
            <p className="mt-1 text-sm text-red-400">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">Status</label>

          <select
            {...register("status")}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500"
          >
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Archived">Archived</option>
          </select>
        </div>

        {/* Sybmit*/}

        <Button type="submit" className="w-full">
          {initialData ? "Save Changes" : "Add Project"}
        </Button>
      </form>
    </Modal>
  );
}
