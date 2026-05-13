import { Sidebar } from "./SideBar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar/>

      <main className="flex-1 min-h-screen bg-gray-950 p-6">
        {children}
      </main>
    </div>
  );
}