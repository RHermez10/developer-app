import { ProjectCard } from "./project-card";
import { useProjectsStore } from "@/store/projects-store";

export function ProjectsGrid() {

  const projects = useProjectsStore((state) => state.projects)
  const deleteProject = useProjectsStore((state) => state.deleteProject)
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) =>(
        <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description}
        status={project.status}
        techStack={project.techStack}
        onDelete={() => deleteProject(project.id)}
        
        />
      ))}
    </div>
  
  );
}
