import { ProjectCard } from "./project-card";
import { useProjectsStore } from "@/store/projects-store";

type ProjectsGridProps = {
  search: string;
  status: string;
};

export function ProjectsGrid({ search, status }: ProjectsGridProps) {
  const projects = useProjectsStore((state) => state.projects);
  const deleteProject = useProjectsStore((state) => state.deleteProject);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
    const matchesStatus = status === "ALL" || project.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            status={project.status}
            techStack={project.techStack}
            onDelete={() => deleteProject(project.id)}
          />
        ))
      ) : (
        <div className="col-span-full">
          <div className="rounded-2xl border border-dashed border-gray-700 bg-gray-900 p-12 text-center">
            <h3 className="text-lg font-semibold text-white">
              No projects found
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Try adjusting your search or filters.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
