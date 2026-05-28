import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ApplicationFormData,
  applicationSchema,
} from "../schema/application-schema";
import { useApplicationsStore } from "@/store/applications-store";
import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;

  initialData?: {
    id?: string;
    company: string;
    role: string;
    location: string;
    status: "Applied" | "Interview" | "Offer" | "Rejected";
  };
};

export function ApplicationModal({
  isOpen,
  onClose,
  initialData,
}: ApplicationModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      company: initialData?.company,
      role: initialData?.role || "",
      location: initialData?.location || "",
      status: initialData?.status || "Applied",
    },
  });

  const addApplication = useApplicationsStore((state) => state.addApplication);
  const updateApplication = useApplicationsStore(
    (state) => state.updateApplication
  );

  function onSubmit(data: ApplicationFormData) {
    if (initialData?.id) {
      updateApplication(initialData.id, {
        company: data.company,
        role: data.role,
        location: data.location,
        status: data.status,
      });
    } else {
      addApplication({
        id: crypto.randomUUID(),
        company: data.company,
        role: data.role,
        location: data.location,
        status: data.status,
        appliedDate: "Just now",
      });
    }

    reset();
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={initialData ? "Edit Application" : "Add Application"}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/*Company */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">Company</label>
          <Input placeholder="Vercel" {...register("company")} />
          {errors.company && (
            <p className="mt-1 text-sm text-red-400">
              {errors.company.message}
            </p>
          )}
        </div>

        {/*Role */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">Role</label>
          <Input placeholder="Frontend Developer" {...register("role")} />

          {errors.role && (
            <p className="mt-1 text-sm text-red-400">{errors.role.message}</p>
          )}
        </div>
        {/*Location */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">Location</label>

          <Input placeholder="Remote" {...register("location")} />

          {errors.location && (
            <p className="mt-1 text-sm text-red-400">
              {errors.location.message}
            </p>
          )}
        </div>
        {/*Status */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">Status</label>
          <select
            {...register("status")}
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500"
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        {/*Submit */}
        <Button type="submit" className="w-full">
          {initialData ? "Save Changes" : "Add Application"}
        </Button>
      </form>
    </Modal>
  );
}
