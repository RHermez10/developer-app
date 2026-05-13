"use client";

import {Input} from "@/components/ui/input";

export function Topbar() {
  return (
    <header className="w-full flex items-center justify-between mb-6">
      {/* Search */}
      <div className="w-full max-w-md">
        <Input placeholder="Search projects, skills..." />
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-3">
        {/* Theme toggle placeholder */}
        <button className="px-3 py-2 rounded-md bg-gray-800 text-sm text-gray-300 hover:bg-gray-700">
          Theme
        </button>

        {/* User menu placeholder */}
        <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold">
          U
        </div>
      </div>
    </header>
  );
}