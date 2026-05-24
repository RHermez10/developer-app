type SkillCardProps = {
  name: string;
  category: string;
  proficiency: number;
};

export function SkillCard({ name, category, proficiency }: SkillCardProps) {
  function getLevel() {
    if (proficiency >= 80) {
      return "Advanced";
    }

    if (proficiency >= 50) return "Intermediate";
    return "Beginner";
  }

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-all hover:border-gray-700 hover:shadow-lg">
      {/*Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="mt-1 text-sm text-gray-400">{category}</p>
        </div>
        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
          {getLevel()}
        </span>
      </div>

      {/* Progress */}
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-gray-400">Proficiency</span>
            <span className="font-medium text-white">{proficiency}%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-800">
            <div
              className="h-full rounded-full bg-indigo-500 transition-all"
              style={{ width: `${proficiency}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
