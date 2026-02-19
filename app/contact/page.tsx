import { Mail, Phone, MapPin, Clock, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Contactează-ne
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-4">
            Ai un proiect de construcții sau renovare? Scrie-ne sau sună-ne – echipa nostra îți stă la dispoziție cu soluții rapide, consultanță gratuită și oferte personalizate.
          </p>
          <div className="flex justify-center gap-3 flex-wrap mb-2">
            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 rounded-full px-4 py-2 text-sm font-medium">
              <ShieldCheck size={18} /> Garanție & Profesionalism
            </span>
            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 rounded-full px-4 py-2 text-sm font-medium">
              <Building2 size={18} /> Proiecte Moderne & Eficiente
            </span>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Contact Info & Highlights */}
          <aside className="bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-between gap-6 order-2 lg:order-1">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <MapPin className="text-yellow-600" /> Informații de Contact
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <Phone className="text-yellow-600" />
                  <a href="tel:+40712345678" className="hover:underline">+40 712 345 678</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-yellow-600" />
                  <a href="mailto:contact@constructiipro.ro" className="hover:underline">contact@constructiipro.ro</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-yellow-600" />
                  <span>București, România</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-yellow-600" />
                  <span>Luni - Vineri 08:00 - 18:00</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">De ce să colaborezi cu noi?</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-yellow-600" /> Consultanță gratuită la fiecare pas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-yellow-600" /> Soluții personalizate și eficiente
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-yellow-600" /> Echipă certificată & materiale premium
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-yellow-600" /> Respectăm termenele și bugetul tău
                </li>
              </ul>
            </div>
          </aside>

          {/* Middle: Contact Form */}
          <section className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between order-1 lg:order-2">
            <form className="flex flex-col gap-5 md:gap-6" autoComplete="off">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Trimite un mesaj</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                  Nume complet <span className="text-yellow-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border-gray-300 focus:border-yellow-600 focus:ring-yellow-600 shadow-sm"
                  placeholder="Numele dvs"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                  Email <span className="text-yellow-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border-gray-300 focus:border-yellow-600 focus:ring-yellow-600 shadow-sm"
                  placeholder="adresa@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-lg border-gray-300 focus:border-yellow-600 focus:ring-yellow-600 shadow-sm"
                  placeholder="+40 ..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                  Mesajul dvs <span className="text-yellow-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border-gray-300 focus:border-yellow-600 focus:ring-yellow-600 shadow-sm resize-none"
                  placeholder="Scrieți aici detalii despre proiect sau întrebare..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-lg font-semibold shadow-lg transition duration-200 mt-2"
              >
                Trimite mesaj
              </button>
            </form>
            <p className="text-xs text-gray-500 text-center mt-6">
              Răspundem în maxim 24h în zilele lucrătoare.
            </p>
          </section>

          {/* Right: Embedded Map */}
          <aside className="rounded-2xl overflow-hidden shadow-xl bg-white flex items-stretch order-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              style={{ border: 0, minHeight: 360, width: "100%" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Harta locatie birou"
            ></iframe>
          </aside>
        </div>

        {/* Call to Action Section */}
        <section className="mt-20 py-12 px-4 md:px-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Pregătit să începi un proiect?</h3>
            <p className="md:text-lg">
              Completează formularul de mai sus sau sună-ne direct – te ajutăm pas cu pas, de la idee la implementare!
            </p>
          </div>
          <a
            href="tel:+40712345678"
            className="inline-block px-8 py-3 rounded-full bg-white text-yellow-700 text-lg font-bold shadow-md hover:bg-yellow-100 mt-4 md:mt-0 transition"
          >
            Sună acum
          </a>
        </section>
      </div>
    </main>
  );
}