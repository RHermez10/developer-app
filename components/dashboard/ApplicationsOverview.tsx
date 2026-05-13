export default function ApplicationsOverview() {
  return (
    <div className="border rounded-xl p-6">
      <h2 className="font-medium mb-4">Applications</h2>

      <div className="space-y-2 text-sm">
        <p>Applied → 5</p>
        <p>Interview → 3</p>
        <p>Offer → 1</p>
        <p>Rejected → 2</p>
      </div>
    </div>
  );
}