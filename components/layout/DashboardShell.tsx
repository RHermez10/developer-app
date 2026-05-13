import React from "react";

type DashboardShellProps = {
  children: React.ReactNode;
};

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="h-screen w-full flex bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-64 lg:w-72 bg-white border-r border-gray-200 flex-col">
        <div className="h-16 flex items-center px-4 font-semibold text-lg border-b">
          Dashboard
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <a className="block px-3 py-2 rounded hover:bg-gray-100" href="#">
            Overview
          </a>
          <a className="block px-3 py-2 rounded hover:bg-gray-100" href="#">
            Projects
          </a>
          <a className="block px-3 py-2 rounded hover:bg-gray-100" href="#">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0">
        {/* Optional top bar */}
        <header className="h-16 bg-white border-b flex items-center px-6">
          <h1 className="text-sm font-medium text-gray-700">
            Dashboard
          </h1>
        </header>

        {/* Scrollable content area */}
        <section className="flex-1 overflow-y-auto p-6">
          {children}
        </section>
      </main>
    </div>
  );
}