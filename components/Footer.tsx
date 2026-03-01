import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-linear-to-t from-gray-950 via-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Logo & Company Info */}
          <div className="flex flex-col h-full">
            <Link href="/" className="inline-flex items-center mb-4 group">
              <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-yellow-500 to-yellow-300 tracking-tight group-hover:scale-105 transition-transform">
                kadarHouse.ro
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Servicii profesionale de construcții, renovări și amenajări interioare — calitate, seriozitate și inovație pentru fiecare proiect.
            </p>
            <div className="flex gap-4 mt-auto">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                <FiFacebook className="text-xl" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                <FiInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-yellow-500 pb-2 w-fit">Linkuri rapide</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition font-medium hover:text-yellow-400">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="transition font-medium hover:text-yellow-400">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/proiecte" className="transition font-medium hover:text-yellow-400">
                  Proiecte
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition font-medium hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-yellow-500 pb-2 w-fit">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FiPhone className="text-yellow-400" />
                <a href="tel:+40712345678" className="hover:underline hover:text-yellow-400 transition">+40 712 345 678</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-yellow-400" />
                <a href="mailto:contact@constructiipro.ro" className="hover:underline hover:text-yellow-400 transition">contact@constructiipro.ro</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="text-yellow-400" />
                <span>București, România</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-yellow-500 pb-2 w-fit">Program</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FiClock className="text-yellow-400" />
                <span>Luni - Vineri: 08:00 – 18:00</span>
              </li>
              <li className="flex items-center gap-3">
                <FiClock className="text-yellow-400 opacity-90" />
                <span>Sâmbătă: 09:00 – 22:00</span>
              </li>
              <li className="flex items-center gap-3">
                <FiClock className="text-yellow-400 opacity-50" />
                <span>Duminică: <span className="text-red-400">Închis</span></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/80 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <span className="text-gray-500">
            © {new Date().getFullYear()} <span className="font-semibold text-yellow-400">ConstructiiPro</span>. Toate drepturile rezervate.
          </span>
          <div className="flex gap-2 text-xs">
            <Link href="/termeni" className="hover:text-yellow-300 underline underline-offset-4 transition">
              Termeni & Condiții
            </Link>
            <span>·</span>
            <Link href="/confidentialitate" className="hover:text-yellow-300 underline underline-offset-4 transition">
              Politica de confidențialitate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
