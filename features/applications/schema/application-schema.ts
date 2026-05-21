import { z } from "zod";

export const applicationSchema = z.object({
  company: z.string().min(2, "Company name is required"),
  role: z.string().min(2, "Role is required"),
  location: z.string().min(2, "Location is required"),
  status: z.enum(["Applied", "Interview", "Offer", "Rejected"]),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;
