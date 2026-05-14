"use client";
import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

export default function Projects() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      <PageHeader
        title="Projects"
        description="Manage and track your development projects."
      />

      <div className="rounded-x1 border border-gray-800 bg-gray-900 p-6">
        Projects content coming soon
      </div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Create Project"
      >
        <p className="text-gray-400">Your project form will go here later.</p>
      </Modal>
    </div>
  );
}
