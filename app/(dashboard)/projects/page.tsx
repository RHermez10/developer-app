"use client";
import { useState } from "react";
import { AddProjectModal } from "@/features/projects/components/add-project-modal";
import { PageHeader } from "@/components/shared/page-header";
import { ProjectsGrid } from "@/features/projects/components/projects-grid";
import { ProjectsToolbar } from "@/features/projects/components/projects-toolbar";

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Projects"
        description="Manage and track your development projects."
      />

      <ProjectsToolbar onAddProject={() => setOpen(true)}></ProjectsToolbar>
      <AddProjectModal isOpen={open} onClose={() => setOpen(false)} />
      <ProjectsGrid></ProjectsGrid>
    </div>
  );
}
