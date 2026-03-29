export default function ProiectePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-10 text-center text-gray-900 drop-shadow-sm">
          <span className="bg-linear-to-r from-yellow-500 via-yellow-700 to-yellow-600 bg-clip-text text-transparent">
            Proiectele Noastre
          </span>
        </h1>

        <section className="mb-20">
          <p className="mx-auto max-w-3xl text-lg text-gray-700/90 mb-10 text-center">
            Descoperă câteva dintre proiectele noastre recente în domeniul construcțiilor și renovărilor. Punem accent pe calitate, atenție la detalii și soluții personalizate pentru fiecare client.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white/80 border border-yellow-100 rounded-2xl shadow-lg transition hover:scale-105 hover:shadow-2xl overflow-hidden flex flex-col">
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src="/House1.jpg"
                  alt="Renovare apartament modern"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/75 to-transparent opacity-90 transition group-hover:opacity-70"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-yellow-700 flex items-center gap-2">
                  Renovare Apartament Modern
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />
                </h3>
                <p className="text-gray-600 flex-1 font-medium">
                  Transformarea completă a unui apartament vechi într-un spațiu modern și luminos. Am realizat finisaje premium și amenajări inteligente.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group bg-white/80 border border-yellow-100 rounded-2xl shadow-lg transition hover:scale-105 hover:shadow-2xl overflow-hidden flex flex-col">
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src="/House2.jpg"
                  alt="Construcție casă de familie"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/75 to-transparent opacity-90 transition group-hover:opacity-70"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-yellow-700 flex items-center gap-2">
                  Construcție Casă de Familie
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />
                </h3>
                <p className="text-gray-600 flex-1 font-medium">
                  Am proiectat și construit o casă spațioasă pentru o familie tânără, cu accent pe eficiență și confort.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group bg-white/80 border border-yellow-100 rounded-2xl shadow-lg transition hover:scale-105 hover:shadow-2xl overflow-hidden flex flex-col">
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src="/House3.jpg"
                  alt="Amenajare spațiu comercial"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/75 to-transparent opacity-90 transition group-hover:opacity-70"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-yellow-700 flex items-center gap-2">
                  Amenajare Spațiu Comercial
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />
                </h3>
                <p className="text-gray-600 flex-1 font-medium">
                  Amenajare interioară elegantă și practică pentru un spațiu comercial din centrul orașului.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center mt-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8">
            Vrei să vezi mai multe?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white px-10 py-4 rounded-full font-semibold shadow-lg transition hover:from-yellow-600 hover:to-yellow-800 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            Solicită detalii despre proiectele noastre
          </a>
        </section>
      </div>
    </main>
  );
}