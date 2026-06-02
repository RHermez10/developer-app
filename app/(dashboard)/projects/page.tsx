import { Suspense } from "react";
import ProjectsContent from "./projects-content";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
