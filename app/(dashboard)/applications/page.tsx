"use client"
import { PageHeader } from "@/components/shared/page-header";
import { ApplicationsGrid } from "@/features/applications/components/applications-grid";
import { ApplicationsToolbar } from "@/features/applications/components/applications-toolbar";
import { useState } from "react";

export default function Applications() {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("ALL")
  return (
    <div className="space-y-6">
      <PageHeader
        title="Applications"
        description="Track your job applications and interviews."
      />
      <ApplicationsToolbar search={search} status={status} onSearchChange={setSearch} onStatusChange={setStatus} onAddApplication={() => {}} />
    <ApplicationsGrid/>
    </div>
  );
}
