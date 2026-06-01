import { Sidebar } from "./SideBar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen min-h-screen bg-gray-950 overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <div className="p-4 md:p-6 space-y-6">{children}</div>
      </main>
    </div>
  );
}
