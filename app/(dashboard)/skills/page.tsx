"use client"
import dynamic from "next/dynamic";
import { PageHeader } from "@/components/shared/page-header";
import { SkillsGrid } from "@/features/skills/components/skills-grid";
import { SkillsSummary } from "@/features/skills/components/skills-summary";

const SkillsChart = dynamic(
  () => import("@/features/skills/components/skills-chart").then((mod) => mod.SkillsChart), {ssr: false}
)

export default function SkillsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Skills"
        description="Track your technical growth and learning progress."
      />
      <SkillsSummary />
      <SkillsChart />
      <SkillsGrid />
    </div>
  );
}
