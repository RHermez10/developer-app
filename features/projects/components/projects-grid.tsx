import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Developer Dashboard",
    description: "Track projects, applications, and skills progress.",
    status: "Active" as const,
    techStack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animations and responsive design.",
    status: "Completed" as const,
    techStack: ["React", "Framer Motion", "CSS"],
  },
  {
    title: "Task Managment App",
    description: "Kanban-style productivity application.",
    status: "Archived" as const,
    techStack: ["Vue", "Firebase", "Tailwind"],
  },
];

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          desciption={project.description}
          status={project.status}
          techStack={project.techStack}
        />
      ))}
    </div>
  );
}
