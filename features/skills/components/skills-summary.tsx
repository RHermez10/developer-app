export function SkillsSummary() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <p className="text-sm text-gray-400">Total Skills</p>
        <h3 className="mt-2 text-3xl font-bold text-white">24</h3>
      </div>
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <p className="text-sm text-gray-400">Advanced Skills</p>
        <h3 className="mt-2 text-3xl font-bold text-white">12</h3>
      </div>
      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <p className="text-sm text-gray-400">Learning Progress</p>
        <h3 className="mt-2 text-3xl font-bold text-white">78%</h3>
      </div>
    </div>
  );
}
