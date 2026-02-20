import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              kadarHouse.ro
            </h3>
            <p className="text-sm leading-relaxed">
              Oferim servicii profesionale de construcții, renovări și
              amenajări interioare. Calitate, seriozitate și respectarea
              termenelor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Linkuri rapide
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-yellow-500 transition">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="hover:text-yellow-500 transition">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/proiecte" className="hover:text-yellow-500 transition">
                  Proiecte
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Telefon: +40 712 345 678</li>
              <li>Email: contact@constructiipro.ro</li>
              <li>Adresă: București, România</li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Program
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Luni - Vineri: 08:00 - 18:00</li>
              <li>Sâmbătă: 09:00 - 14:00</li>
              <li>Duminică: Închis</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ConstructiiPro. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
