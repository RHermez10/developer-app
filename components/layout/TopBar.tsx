export default function Topbar() {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6">
      {/* Search */}
      <input
        placeholder="Search..."
        className="w-1/3 px-3 py-2 border rounded-md"
      />

      {/* Right actions */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">⌘K</span>
        <div className="w-8 h-8 rounded-full bg-muted" />
      </div>
    </header>
  );
}