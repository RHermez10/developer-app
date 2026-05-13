"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Applications", path: "/applications" },
  { label: "Skills", path: "/skills" },
  { label: "Settings", path: "/settings" },
];

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4 border-r border-gray-800">
      <div className="text-xl font-bold mb-8">Portfolio</div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive =
            item.path === "/"
              ? pathname === "/"
              : pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`px-4 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
