"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="bg-linear-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent text-2xl font-extrabold tracking-tight drop-shadow-sm select-none">
            kadarHouse.ro
          </span>
        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink href="/">Acasă</NavLink>
          <NavLink href="/servicii">Servicii</NavLink>
          <NavLink href="/proiecte">Proiecte</NavLink>
          <NavLink href="/despre">Despre</NavLink>
          <NavLink href="/contact" highlight>
            Contact
          </NavLink>
        </div>
        {/* Hamburger menu button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded transition hover:bg-gray-100 focus:outline-none"
          aria-label="Meniu navigație"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="relative w-7 h-7 flex flex-col justify-center">
            <span
              className={`block w-7 h-[3px] bg-yellow-600 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}
            ></span>
            <span
              className={`block w-7 h-[3px] my-[3.5px] bg-yellow-600 rounded transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-7 h-[3px] bg-yellow-600 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
            ></span>
          </span>
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-[350px] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden bg-white shadow-md`}
      >
        <div className="flex flex-col gap-2 p-6 pb-4">
          <NavLink href="/" onClick={() => setMenuOpen(false)}>
            Acasă
          </NavLink>
          <NavLink href="/servicii" onClick={() => setMenuOpen(false)}>
            Servicii
          </NavLink>
          <NavLink href="/proiecte" onClick={() => setMenuOpen(false)}>
            Proiecte
          </NavLink>
          <NavLink href="/despre" onClick={() => setMenuOpen(false)}>
            Despre
          </NavLink>
          <NavLink href="/contact" highlight onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

// Helper NavLink component for consistency and highlighting
function NavLink({
  href,
  children,
  highlight = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  highlight?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition font-medium ${
        highlight
          ? "bg-linear-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700 shadow-md"
          : "text-gray-800 hover:bg-yellow-100 hover:text-yellow-700"
      }`}
    >
      {children}
    </Link>
  );
}