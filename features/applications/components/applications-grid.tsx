"use client";
import { ApplicationCard } from "./application-card";
import { useApplicationsStore } from "@/store/applications-store";

type ApplicationsGridProps = {
  search: string;
  status: string;
  onEditApplication: ( application: any) => void
};

export function ApplicationsGrid({ search, status, onEditApplication }: ApplicationsGridProps) {
  const applications = useApplicationsStore((state) => state.applications);
  const deleteApplication = useApplicationsStore(
    (state) => state.deleteApplication
  );
  const filteredApplications = applications.filter((application) => {
    const matchesSearch =
      application.company.toLowerCase().includes(search.toLowerCase()) ||
      application.role.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "ALL" || application.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {filteredApplications.length > 0 ? (
        filteredApplications.map((application) => (
          <ApplicationCard
            key={application.id}
            company={application.company}
            role={application.role}
            status={application.status}
            appliedDate={application.appliedDate}
            location={application.location}
            onDelete={() => deleteApplication(application.id)}
            onEdit={() => onEditApplication(application)}
          />
        ))
      ) : (
        <div className="col-span-full">
          <div className="rounded-2xl border border-dashed border-gray-700 bg-gray-900 p-12 text-center">
            <h3 className="text-lg font-semibold text-white">
              No applications found
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Try adjusting your search filters.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
