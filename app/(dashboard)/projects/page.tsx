"use client";
import { PageHeader } from "@/components/shared/page-header";
import { ProjectsGrid } from "@/features/projects/components/projects-grid";
import { ProjectsToolbar } from "@/features/projects/components/projects-toolbar";


export default function Projects() {

  return (
    <div className="space-y-6">
      <PageHeader
        title="Projects"
        description="Manage and track your development projects."
      />

      <ProjectsToolbar></ProjectsToolbar>
      <ProjectsGrid></ProjectsGrid>
    </div>
  );
}
