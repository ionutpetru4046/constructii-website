"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/proiecte", label: "Proiecte" },
  { href: "/despre", label: "Despre" },
  { href: "/contact", label: "Contact", highlight: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800
        ${isScrolled ? "shadow-lg bg-opacity-95" : "bg-opacity-80"}
        backdrop-blur-lg border-b border-blue-900/60 transition-all duration-500
      `}
      style={{
        WebkitBackdropFilter: "blur(11px)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1.5 md:px-12 md:py-2 relative">
        {/* Logo */}
        <Link
          href="/"
          aria-label="kadarHouse.ro homepage"
          className="flex items-center gap-2 group shrink-0 transition-all duration-150 hover:scale-105"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-lg bg-blue-900 shadow-xl border-2 border-blue-700 group-hover:border-yellow-400 transition-all duration-150">
            <Image
              src="/kadarHouse.jpeg"
              alt="kadarHouse Logo"
              width={56}
              height={56}
              className="object-cover w-full h-full rounded-md select-none border border-yellow-100/30"
              priority
            />
          </span>
          <span className="select-none font-bold text-[1.85rem] md:text-[2.2rem] tracking-tight bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm ml-1">
            Kadar
            <span className="text-white font-extrabold drop-shadow ml-1">House</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden xl:flex gap-1.5 items-center ml-12">
          {NAV_LINKS.map(({ href, label, highlight }) => (
            <li key={href}>
              <NavLink href={href} highlight={highlight}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Hamburger Menu Button */}
        <button
          aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
          className="xl:hidden p-2 flex items-center justify-center rounded-md group transition-all duration-150 bg-blue-800/60 hover:bg-blue-700/80 border border-blue-600 shadow-md focus-visible:ring-2 focus-visible:ring-yellow-400"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <X size={28} className="text-yellow-300 scale-110 transition-transform duration-200" />
          ) : (
            <Menu size={28} className="text-yellow-200" />
          )}
        </button>

        {/* Mobile Drawer + overlay */}
        <div
          className={`
            fixed inset-0 z-60 xl:hidden transition-all duration-300
            ${menuOpen ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"}
            bg-linear-to-br from-blue-950/90 via-blue-800/70 to-blue-900/75
          `}
        >
          <div
            ref={menuRef}
            className={`
              absolute top-0 right-0 h-full w-[82vw] max-w-[348px]
              bg-linear-to-br from-blue-900 via-blue-950 to-blue-800/90
              shadow-2xl border-l-2 border-yellow-400/25
              rounded-l-3xl flex flex-col min-h-full py-5 px-5
              transition-transform duration-300
              ${menuOpen ? "translate-x-0" : "translate-x-full"}
            `}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-extrabold text-yellow-200 text-lg tracking-wider uppercase">Meniu</span>
              <button
                aria-label="Închide meniul"
                className="flex items-center justify-center p-2 rounded-full hover:bg-yellow-400/10 transition"
                onClick={() => setMenuOpen(false)}
              >
                <X size={22} className="text-yellow-300" />
              </button>
            </div>
            <ul className="flex flex-col gap-2.5 mt-2">
              {NAV_LINKS.map(({ href, label, highlight }) => (
                <li key={href}>
                  <NavLink
                    href={href}
                    highlight={highlight}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex-1" />
            <div className="mx-auto mt-7 mb-2 text-xs text-blue-200/75 tracking-wide font-medium">
              &copy; 2024 KadarHouse
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// New NavLink style: neon-like border, focus ring, sharp pill, color contrasts
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
      className={`
        relative flex items-center gap-1 px-5 py-2.5 rounded-xl font-bold tracking-wide
        uppercase text-[1rem] transition-all duration-200 border-2
        group outline-none
        ${highlight
          ? "border-yellow-400 bg-yellow-400/90 text-blue-900 shadow-lg hover:bg-yellow-400 hover:scale-105 hover:shadow-yellow-200 focus-visible:ring-2 focus-visible:ring-yellow-300"
          : "border-blue-800 bg-blue-800/60 text-yellow-50 hover:bg-blue-700/80 hover:border-yellow-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-200"}
      `}
      tabIndex={0}
    >
      {children}
      {/* Animated bottom highlight */}
      <span
        className={`
          absolute left-6 right-6 -bottom-0.5 h-[2px] rounded-full bg-yellow-400
          scale-x-0 opacity-80 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-300
          ${highlight ? "group-hover:bg-yellow-700 bg-yellow-500" : ""}
        `}
        aria-hidden="true"
      />
    </Link>
  );
}