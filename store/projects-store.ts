import { create } from "zustand";

import { Project } from "@/features/projects/types/project";

type ProjectsStore = {
  projects: Project[];
  addProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  updateProject: (id: string, updatedProject: Partial<Project>) => void;
};

export const useProjectsStore = create<ProjectsStore>((set) => ({
  projects: [
    {
      id: crypto.randomUUID(),
      title: "Developer Dashboard",
      description: "Track projects, applications, and skills progress.",
      status: "Active",
      techStack: ["Next.js", "TypeScript", "Tailwin"],
    },
  ],

  addProject: (project) =>
    set((state) => ({
      projects: [project, ...state.projects],
    })),

  deleteProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== id),
    })),

  updateProject: (id, updatedProject) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id
          ? {
              ...project,
              ...updatedProject,
            }
          : project
      ),
    })),
}));
