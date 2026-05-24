import { SkillCard } from "./skill-card";

const skills = [
  {
    id: crypto.randomUUID(),
    name: "react",
    category: "Frontend",
    proficiency: 90,
  },
  {
    id: crypto.randomUUID(),
    name: "TypesScript",
    category: "Language",
    proficiency: 82,
  },

  {
    id: crypto.randomUUID(),
    name: "Next.js",
    category: "Framework",
    proficiency: 85,
  },

  {
    id: crypto.randomUUID(),
    name: "Tailwind CSS",
    category: "Styling",
    proficiency: 88,
  },

  {
    id: crypto.randomUUID(),
    name: "Node.js",
    category: "Backend",
    proficiency: 60,
  },

  {
    id: crypto.randomUUID(),
    name: "PostgreSQL",
    category: "Database",
    proficiency: 45,
  },
];

export function SkillsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          name={skill.name}
          category={skill.category}
          proficiency={skill.proficiency}
        />
      ))}
    </div>
  );
}
