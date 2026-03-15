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

  // Handle sticky effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu if clicked outside in mobile
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-1050 transition-colors duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur supports-backdrop-filter:bg-white/70" : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-8 xl:px-0 relative">
        {/* Logo - acts as home button */}
        <Link
          href="/"
          className="flex items-center gap-2 transition group shrink-0"
          aria-label="kadarHouse.ro homepage"
        >
          <Image
            src="/kadarHouse.jpeg"
            alt="kadarHouse Logo"
            width={64}
            height={64}
            className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-lg shadow-sm border border-gray-200 select-none group-hover:scale-105 transition"
            priority
          />
          <span className="font-extrabold text-2xl sm:text-3xl text-yellow-600 tracking-tight leading-none ml-1 group-hover:text-yellow-700 hidden xs:inline">
            kadar<span className="text-gray-900">House</span>
          </span>
        </Link>

        {/* Desktop navigation links */}
        <ul className="hidden lg:flex gap-2 items-center ml-4">
          {NAV_LINKS.map(({ href, label, highlight }) => (
            <li key={href}>
              <NavLink href={href} highlight={highlight}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md ring-offset-2 focus-visible:ring-2 focus-visible:ring-yellow-400 transition bg-white shadow-sm hover:bg-gray-50"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={28} className="text-yellow-600" />
          ) : (
            <Menu size={28} className="text-yellow-600" />
          )}
        </button>

        {/* Mobile menu overlay and panel */}
        <div
          className={`fixed inset-0 z-1100 transition-all duration-300 bg-black/40 ${
            menuOpen ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"
          } lg:hidden`}
          style={{}}
        >
          {/* Slide-in menu panel */}
          <div
            ref={menuRef}
            className={`absolute top-0 right-0 h-full w-[72vw] max-w-xs bg-white shadow-2xl transition-transform duration-300 p-7 pt-5 flex flex-col gap-2 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-yellow-600 text-lg tracking-tight">
                Meniu
              </span>
              <button
                type="button"
                aria-label="Închide meniul"
                className="flex p-1.5 rounded hover:bg-gray-100 transition"
                onClick={() => setMenuOpen(false)}
              >
                <X size={26} />
              </button>
            </div>
            <ul className="flex flex-col gap-2">
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
          </div>
        </div>
      </div>
    </nav>
  );
}

// Modern NavLink with highlight and focus/active indication
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
      className={`px-4 py-2 rounded-md transition font-medium outline-none flex items-center gap-1 relative 
        ${
          highlight
            ? "bg-linear-to-r from-yellow-500 to-yellow-600 text-white shadow-md hover:from-yellow-600 hover:to-yellow-700 focus-visible:ring-2 focus-visible:ring-yellow-400 underline-offset-4 hover:underline"
            : "text-gray-800 hover:text-yellow-700 hover:bg-yellow-100 focus-visible:ring-2 focus-visible:ring-yellow-400 underline-offset-4 hover:underline"
        }
      `}
      tabIndex={0}
    >
      {children}
    </Link>
  );
}