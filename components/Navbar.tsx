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

  // Modern sticky, subtle shadow & glass blur
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside tap (mobile)
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
      className={`fixed top-0 left-0 w-full z-[1050] transition-all duration-300
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-[0_2px_16px_0_rgba(0,0,0,0.06)] border-b border-yellow-100/70"
            : "bg-transparent shadow-none border-transparent"
        }
      `}
      style={{ WebkitBackdropFilter: isScrolled ? "blur(14px)" : "none" }}
    >
      <div className="2xl:max-w-7xl max-w-[98vw] mx-auto flex items-center justify-between px-3 sm:px-8 py-2.5 min-h-[70px] relative">
        {/* Logo - modern elevation, rounded, on hover scaled & color glow */}
        <Link
          href="/"
          className="flex items-center gap-2 group shrink-0 transition"
          aria-label="kadarHouse.ro homepage"
        >
          <span className="inline-flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-xl overflow-hidden border-2 border-yellow-200 group-hover:border-yellow-400 shadow-lg bg-white/90 transition-all duration-150 group-hover:scale-105 group-hover:shadow-yellow-100/80">
            <Image
              src="/kadarHouse.jpeg"
              alt="kadarHouse Logo"
              width={64}
              height={64}
              className="object-cover w-full h-full select-none"
              priority
            />
          </span>
          <span className="select-none font-black text-[2.1rem] sm:text-3xl ml-1 leading-none text-gradient-to-br from-yellow-500 via-yellow-700 to-yellow-800 bg-clip-text text-transparent tracking-tight hidden xs:inline drop-shadow group-hover:from-yellow-600">
            Kadar
            <span className="text-neutral-900 bg-none text-gradient-none font-extrabold">House</span>
          </span>
        </Link>

        {/* Desktop nav - new pill buttons, semi-glassy hover, indicator bar */}
        <ul className="hidden lg:flex gap-4 items-center ml-7 relative">
          {NAV_LINKS.map(({ href, label, highlight }) => (
            <li key={href} className="relative">
              <NavLink href={href} highlight={highlight}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button floated right */}
        <button
          aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-full
          shadow shadow-yellow-100/30 ring-1 ring-yellow-300/30 bg-white/90
          border border-yellow-100 hover:bg-yellow-50/80 focus-visible:ring-2 focus-visible:ring-yellow-300 transition-all"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={28} className="text-yellow-500 transition-transform duration-200 scale-110" />
          ) : (
            <Menu size={28} className="text-yellow-600" />
          )}
        </button>

        {/* Mobile Drawer + overlay */}
        <div
          className={`
            fixed inset-0 z-[1100] 
            transition-all duration-300
            ${menuOpen ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"}
            bg-gradient-to-br from-black/60 via-yellow-900/20 to-black/50
            lg:hidden
          `}
        >
          <div
            ref={menuRef}
            className={`
              absolute top-0 right-0
              h-full w-[85vw] max-w-[375px]
              bg-white/95 shadow-2xl
              border-l-2 border-yellow-100
              rounded-l-3xl
              flex flex-col gap-2 py-7 px-7
              transition-transform duration-300
              ${menuOpen ? "translate-x-0" : "translate-x-full"}
            `}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold text-yellow-700 text-xl tracking-wide drop-shadow-sm">Meniu</span>
              <button
                aria-label="Închide meniul"
                className="flex items-center justify-center p-2 rounded-full hover:bg-yellow-50 transition"
                onClick={() => setMenuOpen(false)}
              >
                <X size={26} className="text-yellow-500" />
              </button>
            </div>
            <ul className="flex flex-col gap-3 mt-4">
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
            <div className="text-sm text-gray-500 mt-4 mb-2 opacity-60">© 2024 KadarHouse</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Modern NavLink: pill button, animated underline, modern color & hover
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
        relative flex items-center gap-1 px-5 py-2.5 rounded-full font-semibold
        outline-none transition-all duration-200
        focus-visible:ring-2 focus-visible:ring-yellow-400/60
        ${highlight 
          ? "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white shadow-md hover:from-yellow-600 hover:to-yellow-800"
          : "bg-white/60 text-yellow-700 hover:bg-yellow-50/80 hover:text-yellow-900"}
        group
      `}
      tabIndex={0}
    >
      {children}
      {/* Animated underline indicator (desktop only) */}
      <span
        className={`
        absolute left-8 right-8 -bottom-1 h-[3px] rounded bg-yellow-400
        scale-x-0 opacity-75 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-300
        ${highlight ? "group-hover:bg-yellow-700" : "" }
        `}
        aria-hidden="true"
      />
    </Link>
  );
}