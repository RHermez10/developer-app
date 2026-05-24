import { PageHeader } from "@/components/shared/page-header";
import SkillsChart from "@/features/skills/components/skills-chart";
import { SkillsGrid } from "@/features/skills/components/skills-grid";
import { SkillsSummary } from "@/features/skills/components/skills-summary";

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
