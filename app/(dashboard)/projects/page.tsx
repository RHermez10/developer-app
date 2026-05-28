"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AddProjectModal } from "@/features/projects/components/add-project-modal";
import { PageHeader } from "@/components/shared/page-header";
import { ProjectsGrid } from "@/features/projects/components/projects-grid";
import { ProjectsToolbar } from "@/features/projects/components/projects-toolbar";

export default function Projects() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");

  useEffect(() => {
    const shouldOpen = searchParams.get("create") === "true";

    if (shouldOpen) {
      setOpen(true);
      router.replace("/projects");
    }
  }, [searchParams, router]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Projects"
        description="Manage and track your development projects."
      />

      <ProjectsToolbar
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onAddProject={() => setOpen(true)}
      ></ProjectsToolbar>
      <AddProjectModal isOpen={open} onClose={() => setOpen(false)} />
      <ProjectsGrid search={search} status={status}></ProjectsGrid>
    </div>
  );
}
