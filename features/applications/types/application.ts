export type ApplicationStatus = "Applied" | "Interview" | "Offer" | "Rejected";

export type Application = {
  id: string;
  compnay: string;
  role: string;
  location: string;
  status: ApplicationStatus;
  appliedData: string;
};
