export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-12 text-center">
          Despre Noi
        </h1>

        {/* Section 1: Cine suntem */}
        <section className="mb-16 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="/team.jpg"
              alt="Echipa ConstructiiPro"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Cine suntem</h2>
            <p className="text-gray-700 mb-4">
              Suntem o echipă de profesioniști cu peste 10 ani experiență
              în construcții și renovări. Prioritizăm calitatea, respectarea
              termenelor și satisfacția clienților.
            </p>
            <p className="text-gray-700">
              Fiecare proiect este tratat cu atenție la detalii, folosim
              materiale premium și tehnici moderne pentru rezultate durabile.
            </p>
          </div>
        </section>

        {/* Section 2: Valorile noastre */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-8">Valorile Noastre</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Profesionalism</h3>
              <p className="text-gray-600">
                Respectăm cele mai înalte standarde în tot ce facem.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Încredere</h3>
              <p className="text-gray-600">
                Suntem transparenți și respectăm termenele stabilite.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Calitate</h3>
              <p className="text-gray-600">
                Folosim materiale premium și tehnici moderne.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Vrei să lucrăm împreună?
          </h2>
          <a
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 font-semibold rounded-md transition"
          >
            Contactează-ne acum
          </a>
        </section>

      </div>
    </main>
  );
}
