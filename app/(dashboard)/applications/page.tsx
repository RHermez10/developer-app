import { Suspense } from "react";
import ApplicationsContent from "./applications-content";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplicationsContent />
    </Suspense>
  );
}
