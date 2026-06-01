"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Applications", href: "/applications" },
  { label: "Skills", href: "/skills" },
];

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() =>
          mobileOpen === false ? setMobileOpen(true) : setMobileOpen(false)
        }
        className="fixed top-4 right-4 z-[60] rounded-md bg-gray-800 p-2 text-white md:hidden"
        aria-label="Open Menu"
      >
        {" "}
        <Menu size={20} />{" "}
      </button>
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileOpen(false)}
          />

          {/* Mobile Sidebar */}
          <aside className="fixed right-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-gray-800 bg-gray-900 md:hidden">
            <div className="flex items-center justify-between border-b border-gray-800 p-4">
              <div>
                <h1 className="text-xl font-bold">DevBoard</h1>
                <p className="text-xs text-gray-400">Developer Dashboard</p>
              </div>
            </div>

            <nav className="flex-1 space-y-2 p-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm transition ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </>
      )}

      <aside className="hidden md:flex h-screen w-64 flex-col border-r border-gray-800 bg-gray-900">
        <div className="border-b border-gray-800 p-4">
          <h1 className="text-xl font-bold">DevBoard</h1>

          <p className="text-xs text-gray-400">Developer Dashboard</p>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-sm transition ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
