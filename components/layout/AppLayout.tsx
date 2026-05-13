import { Sidebar } from "./SideBar";
import { Topbar } from "./TopBar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar/>

      <main className="flex-1 min-h-screen bg-gray-950 p-6">
        <Topbar/>
        {children}
      </main>
    </div>
  );
}