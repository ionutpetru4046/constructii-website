'use client';

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-100 to-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero & Highlights */}
        <section className="mb-10 md:mb-16 flex flex-col gap-4 items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-gray-900 tracking-tight text-center">
            Contactează-ne
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-700 text-center mb-2">
            Ai un proiect de construcții sau renovare? Scrie-ne sau Sună-ne – Echipa noastră te ajută rapid, cu consultanță gratuită & oferte personalizate.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <span className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold shadow">
              <ShieldCheck size={18} /> Garanție & Profesionalism
            </span>
            <span className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold shadow">
              <Building2 size={18} /> Proiecte Moderne & Eficiente
            </span>
          </div>
        </section>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 mb-12">
          {/* Contact Info */}
          <aside className="order-2 md:order-1 xl:order-1 w-full bg-white shadow-lg rounded-2xl p-5 sm:p-7 flex flex-col gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                <MapPin className="text-yellow-600" /> Informații de Contact
              </h2>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-3">
                  <Phone className="text-yellow-600" />
                  <a href="tel:+40712345678" className="hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500 transition">
                    <span className="select-all">+40 712 345 678</span>
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-yellow-600" />
                  <a href="mailto:contact@constructiipro.ro" className="hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500 transition">
                    <span className="select-all">contact@constructiipro.ro</span>
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-yellow-600" />
                  <span>Oradea, Judetul Bihor, România</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-yellow-600" />
                  <span>Luni - Vineri 08:00 – 18:00</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-3 text-gray-900">De ce să colaborezi cu noi?</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-yellow-600" /> Consultanță gratuită pas cu pas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-yellow-600" /> Soluții personalizate & eficiente
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-yellow-600" /> Echipă certificată & materiale premium
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-yellow-600" /> Respectăm termenele & bugetul tău
                </li>
              </ul>
            </div>
          </aside>

          {/* Contact Form */}
          <section className="order-1 md:order-2 xl:order-2 w-full bg-white shadow-lg rounded-2xl p-5 sm:p-7 flex flex-col justify-center">
            <form
              className="flex flex-col gap-4 sm:gap-5"
              autoComplete="off"
              onSubmit={e => {
                e.preventDefault();
                // handle submit UI here
                alert("Mesajul a fost trimis! Vom reveni în cel mai scurt timp.");
              }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Trimite un mesaj</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nume complet <span className="text-yellow-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500 transition bg-gray-50 py-2 px-3 outline-none"
                  placeholder="Numele dvs"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-yellow-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500 transition bg-gray-50 py-2 px-3 outline-none"
                  placeholder="adresa@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500 transition bg-gray-50 py-2 px-3 outline-none"
                  placeholder="+40 ..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesajul dvs <span className="text-yellow-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500 transition bg-gray-50 py-2 px-3 outline-none resize-none"
                  placeholder="Scrieți aici detalii despre proiect sau întrebare..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 md:py-3 rounded-full text-white bg-linear-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-base md:text-lg font-semibold shadow-lg transition mt-2"
              >
                Trimite mesaj
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Răspundem în maxim 24h în zilele lucrătoare.
              </p>
            </form>
          </section>

          {/* Map Section */}
          <aside className="order-3 w-full bg-white shadow-lg rounded-2xl flex items-stretch overflow-hidden min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              style={{ border: 0, minHeight: 300, width: "100%" }}
              className="w-full h-full min-h-[220px] md:min-h-[300px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Harta locatie birou"
            ></iframe>
          </aside>
        </div>

        {/* CTA */}
        <section className="mt-10 md:mt-20 py-8 md:py-12 px-4 md:px-12 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-1">Pregătit să începi un proiect?</h3>
            <p className="md:text-lg">
              Completează formularul de mai sus sau sună-ne direct – te ajutăm pas cu pas, de la idee la implementare!
            </p>
          </div>
          <a
            href="tel:+40712345678"
            className="inline-block px-8 py-3 rounded-full bg-white text-yellow-700 text-lg font-bold shadow-md hover:bg-yellow-100 transition mt-4 md:mt-0"
          >
            Sună acum!
          </a>
        </section>
      </div>
    </main>
  );
}