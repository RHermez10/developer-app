export default function ActivityFeed() {
  return (
    <div className="border rounded-xl p-6">
      <h2 className="font-medium mb-4">Recent Activity</h2>

      <ul className="space-y-2 text-sm text-muted-foreground">
        <li>Added new project</li>
        <li>Applied to Frontend role</li>
        <li>Updated React skills</li>
      </ul>
    </div>
  );
}