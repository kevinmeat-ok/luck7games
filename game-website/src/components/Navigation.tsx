"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="cyber-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            {/* Logo/Title */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold cyber-nav-title">🎮 777 Gaming Hub</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium cyber-nav-link transition-colors ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                🏠 Home
              </Link>
              <Link
                href="/more"
                className={`px-3 py-2 rounded-md text-sm font-medium cyber-nav-link transition-colors ${
                  pathname === "/more" ? "active" : ""
                }`}
              >
                ⭐ More
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="flex space-x-4">
              <Link
                href="/"
                className={`px-2 py-1 rounded text-sm cyber-nav-link ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/more"
                className={`px-2 py-1 rounded text-sm cyber-nav-link ${
                  pathname === "/more" ? "active" : ""
                }`}
              >
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
