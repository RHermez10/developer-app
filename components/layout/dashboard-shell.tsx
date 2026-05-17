import {Sidebar }from "./SideBar";
import {Topbar} from "./TopBar";


export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex bg-background">
      {/* Sidebar */}
      <Sidebar/>


      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <Topbar/>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}