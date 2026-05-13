"use client";

import Link from "next/link";

const items = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/projects" },
  { label: "Applications", href: "/applications" },
  { label: "Skills", href: "/skills" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r h-full p-4 hidden md:block">
      <div className="text-xl font-bold mb-8">DevBoard</div>

      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-3 py-2 rounded-lg hover:bg-muted"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}