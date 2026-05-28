import { create } from "zustand";
import { Application } from "@/features/applications/types/application";
import { persist } from "zustand/middleware";

type ApplicationsStore = {
  applications: Application[];
  addApplication: (application: Application) => void;
  deleteApplication: (id: string) => void;
  updateApplication: (
    id: string,
    updatedApplication: Partial<Application>
  ) => void;
};

export const useApplicationsStore = create<ApplicationsStore>()(
  persist(
    (set) => ({
      applications: [
        {
          id: crypto.randomUUID(),
          company: "vercel",
          role: "Frontend Developer",
          location: "Remote",
          status: "Interview",
          appliedDate: "2 days ago",
        },
      ],

      addApplication: (application) =>
        set((state) => ({
          applications: [application, ...state.applications],
        })),

      deleteApplication: (id) =>
        set((state) => ({
          applications: state.applications.filter(
            (application) => application.id !== id
          ),
        })),

      updateApplication: (id, updatedApplication) =>
        set((state) => ({
          applications: state.applications.map((application) =>
            application.id === id
              ? {
                  ...application,
                  ...updatedApplication,
                }
              : application
          ),
        })),
    }),
    {
      name: "applications-storage",
    }
  )
);
