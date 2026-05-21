import { ApplicationCard } from "./application-card";

const applications = [
  {
    company: "Vercel",
    role: "Frontend Developer",
    status: "Interview" as const,
    appliedDate: "2 days ago",
    location: "remote",
  },
  {
    company: "Stripe",
    role: "React Engineer",
    status: "Applied" as const,
    appliedDate: "1 week ago",
    location: "New York, USA",
  },

  {
    company: "Linear",
    role: "Product Engineer",
    status: "Offer" as const,
    appliedDate: "3 weeks ago",
    location: "Remote",
  },
  {
    company: "Spotify",
    role: "Frontend Inter",
    status: "Rejected" as const,
    appliedDate: "1 month ago",
    location: "Stockholm Sweden",
  },
];

export function ApplicationsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {applications.map((application) => (
        <ApplicationCard
          key={`${application.company}-${application.role}`}
          company={application.company}
          role={application.role}
          status={application.status}
          appliedDate={application.appliedDate}
          location={application.location}
        />
      ))}
    </div>
  );
}
