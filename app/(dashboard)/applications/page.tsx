"use client";
import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { ApplicationsGrid } from "@/features/applications/components/applications-grid";
import { ApplicationsToolbar } from "@/features/applications/components/applications-toolbar";
import { ApplicationModal } from "@/features/applications/components/application.modal";

export default function Applications() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");
  const [open, setOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<any>(null)

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
      <ApplicationsGrid search={search} status={status} onEditApplication={setSelectedApplication} />
      <ApplicationModal isOpen={open || !!selectedApplication} onClose={() => {setOpen(false); setSelectedApplication(null); }} initialData={selectedApplication || undefined} />
    </div>
  );
}
