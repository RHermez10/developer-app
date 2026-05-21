"use client";
import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { ApplicationsGrid } from "@/features/applications/components/applications-grid";
import { ApplicationsToolbar } from "@/features/applications/components/applications-toolbar";
import { AddApplicationModal } from "@/features/applications/components/add-application.modal";

export default function Applications() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Applications"
        description="Track your job applications and interviews."
      />
      <ApplicationsToolbar
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onAddApplication={() => setOpen(true)}
      />
      <ApplicationsGrid />
      <AddApplicationModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
