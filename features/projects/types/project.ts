export type ProjectStatus = "Active" | "Completed" | "Archived";

export type Project = {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  techStack: string[];
};
