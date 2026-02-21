import { HiStar, HiShieldCheck, HiLightBulb } from "react-icons/hi2";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tl from-gray-100 via-yellow-50 to-white py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 tracking-tight text-gray-800">
          Despre <span className="text-yellow-500">Noi</span>
        </h1>

        {/* Section 1: Cine suntem */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 mb-14 md:mb-20">
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800">
              Cine suntem
            </h2>
            <p className="text-gray-700 mb-3 text-base md:text-lg">
              Suntem o echipă de profesioniști cu peste 10 ani experiență în construcții și renovări. Ne dedicăm fiecărui proiect cu entuziasm, iar calitatea, seriozitatea și satisfacția clienților sunt mereu prioritare.
            </p>
            <p className="text-gray-700 text-base md:text-lg">
              Abordăm fiecare proiect cu atenție la detalii, folosind materiale premium și tehnici moderne pentru rezultate durabile și elegante.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group transition hover:scale-105 duration-300">
              <img
                src="/team.jpg"
                alt="Echipa ConstructiiPro"
                className="rounded-2xl shadow-2xl object-cover w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-video border-8 border-white group-hover:shadow-yellow-200 transition"
              />
              <div className="absolute bottom-3 right-3 bg-white/80 px-3 py-1 rounded-md text-xs font-semibold text-yellow-600 shadow-md hidden sm:block">
                #Echipa KadarHouse
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Valorile noastre */}
        <section className="mb-14 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-gray-800">
            Valorile <span className="text-yellow-500">Noastre</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto">
            <div className="bg-white/90 p-7 rounded-2xl shadow-xl flex flex-col items-center hover:-translate-y-2 transition">
              <HiStar className="text-yellow-400 text-4xl mb-2" />
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Profesionalism</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                Respectăm cele mai înalte standarde în tot ceea ce facem, de la ofertare la predare.
              </p>
            </div>
            <div className="bg-white/90 p-7 rounded-2xl shadow-xl flex flex-col items-center hover:-translate-y-2 transition">
              <HiShieldCheck className="text-yellow-500 text-4xl mb-2" />
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Încredere</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                Suntem transparenți, de încredere și ne asigurăm că respectăm termenele și bugetele agreate.
              </p>
            </div>
            <div className="bg-white/90 p-7 rounded-2xl shadow-xl flex flex-col items-center hover:-translate-y-2 transition">
              <HiLightBulb className="text-yellow-400 text-4xl mb-2" />
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Calitate</h3>
              <p className="text-sm md:text-base text-gray-600 text-center">
                Folosim mereu materiale premium și tehnici inovatoare pentru rezultate durabile și estetice.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Call to Action */}
        <section className="flex flex-col items-center justify-center mt-4 mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">
            Vrei să lucrăm împreună?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-tr from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-8 py-3 md:px-10 md:py-4 font-semibold rounded-full shadow-lg hover:scale-105 transition text-base md:text-lg"
          >
            Contactează-ne acum
          </a>
        </section>
      </div>
    </main>
  );
}
