export type ApplicationStatus = "Applied" | "Interview" | "Offer" | "Rejected";

export type Application = {
  id: string;
  company: string;
  role: string;
  location: string;
  status: ApplicationStatus;
  appliedDate: string;
};
