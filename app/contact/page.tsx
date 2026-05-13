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

// Gradient overlays, card glassmorphism and minimal blue accent style
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-bl from-sky-50 via-white to-sky-100 flex items-center py-10 md:py-20">
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-6">
        {/* Hero Section */}
        <section className="flex flex-col items-center mb-14 gap-6">
          <div className="bg-white/70 shadow-xl border border-sky-100 rounded-3xl px-8 py-6 w-full sm:w-[500px] backdrop-blur-sm text-center relative">
            <h1 className="text-4xl md:text-5xl font-bold text-sky-700 tracking-tight drop-shadow mb-2">Contactează-ne</h1>
            <p className="text-gray-700 md:text-lg">
              Ai un proiect de construcții sau renovare? <span className="font-semibold text-sky-700">Trimite-ne un mesaj</span> sau <span className="font-semibold text-sky-700">sună-ne direct</span>.
              Răspundem rapid – cu consultanță gratuită & oferte personalizate.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <span className="flex items-center gap-1 bg-sky-50 text-sky-700 rounded-lg px-3 py-1 text-xs sm:text-sm font-medium shadow-sm border border-sky-100">
                <ShieldCheck size={17} /> Garanție & Profesionalism
              </span>
              <span className="flex items-center gap-1 bg-sky-50 text-sky-700 rounded-lg px-3 py-1 text-xs sm:text-sm font-medium shadow-sm border border-sky-100">
                <Building2 size={17} /> Proiecte Moderne
              </span>
            </div>
          </div>
        </section>
        {/* Responsive Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-10 mb-14">
          {/* Contact Info */}
          <aside className="xl:col-span-1 bg-white/85 backdrop-blur-md shadow-2xl rounded-2xl border border-sky-100 p-7 flex flex-col gap-8">
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-4 text-sky-700 flex items-center gap-2">
                <MapPin className="text-sky-500" /> Informații de Contact
              </h2>
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex items-center gap-2.5">
                  <Phone className="text-sky-400" />
                  <a href="tel:+40712345678" className="font-semibold hover:text-sky-600 focus:outline-none underline underline-offset-2">
                    +40 712 345 678
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="text-sky-400" />
                  <a href="mailto:contact@constructiipro.ro" className="font-semibold hover:text-sky-600 focus:outline-none underline underline-offset-2">
                    contact@constructiipro.ro
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="text-sky-400" />
                  <span>Oradea, Bihor, România</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="text-sky-400" />
                  <span>Luni–Vineri 08:00–18:00</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-3 text-sky-700">Avantaje colaborare:</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-sky-600" /> Consultanță gratuită
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-sky-600" /> Soluții personalizate
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-sky-600" /> Echipă certificată
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-sky-600" /> Respectăm termene și bugete
                </li>
              </ul>
            </div>
          </aside>
          {/* Contact Form */}
          <section className="xl:col-span-1 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl border border-sky-100 p-7 flex flex-col items-center justify-center">
            <form
              className="flex flex-col gap-4 w-full max-w-md mx-auto"
              autoComplete="off"
              onSubmit={e => {
                e.preventDefault();
                alert("Mesajul a fost trimis! Vom reveni în cel mai scurt timp.");
              }}
            >
              <h2 className="text-xl font-semibold text-center text-sky-700 mb-2">Trimite un mesaj</h2>
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Nume complet <span className="text-sky-500">*</span></label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-md border border-sky-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-400 transition bg-sky-50 py-2 px-3 outline-none text-sm"
                  placeholder="Numele dvs"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email <span className="text-sky-500">*</span></label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-md border border-sky-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-400 transition bg-sky-50 py-2 px-3 outline-none text-sm"
                  placeholder="adresa@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">Telefon</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-md border border-sky-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-400 transition bg-sky-50 py-2 px-3 outline-none text-sm"
                  placeholder="+40 ..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                  Mesajul dvs <span className="text-sky-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-md border border-sky-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-400 transition bg-sky-50 py-2 px-3 outline-none resize-none text-sm"
                  placeholder="Scrieți aici detalii despre proiect sau întrebare..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl text-white bg-linear-to-tr from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-base font-bold shadow-md transition"
              >
                Trimite mesaj
              </button>
              <p className="text-xs text-gray-400 text-center mt-1">
                Răspundem în maxim 24h în zilele lucrătoare.
              </p>
            </form>
          </section>
          {/* Map Section */}
          <aside className="xl:col-span-1 flex items-stretch bg-transparent rounded-2xl min-h-[320px] border border-sky-100 overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              style={{ border: 0, minHeight: 320, width: "100%" }}
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Harta locatie birou"
            />
          </aside>
        </div>
        {/* CTA Banner */}
        <section className="mt-6 md:mt-16 py-8 md:py-12 px-4 md:px-10 bg-linear-to-r from-sky-400 via-sky-500 to-sky-600 rounded-2xl shadow-2xl flex flex-col gap-5 md:flex-row items-center justify-between text-center md:text-left">
          <div className="text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-1 drop-shadow">Pregătit să începi un proiect?</h3>
            <p className="md:text-lg text-white/95">Completează formularul de mai sus sau sună-ne direct – te ajutăm de la idee la implementare!</p>
          </div>
          <a
            href="tel:+40712345678"
            className="inline-block px-8 py-3 rounded-xl bg-white text-sky-600 text-lg font-bold shadow-lg hover:bg-sky-50 transition"
          >
            Sună acum!
          </a>
        </section>
      </div>
    </main>
  );
}