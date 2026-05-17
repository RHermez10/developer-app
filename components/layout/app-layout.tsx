import { Sidebar } from "./SideBar";
import { Topbar } from "./TopBar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar/>

      <main className="flex-1 flex flex-col">
        <div className="p-6 space-y-6">
        <Topbar/>
        {children}
        </div>
      </main>
    </div>
  );
}