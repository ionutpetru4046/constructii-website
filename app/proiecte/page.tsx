export default function ProiectePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Proiectele Noastre
        </h1>

        <section className="mb-16 text-center">
          <p className="text-lg text-gray-700 mb-8">
            Descoperă câteva dintre proiectele noastre recente în domeniul construcțiilor și renovărilor. Punem accent pe calitate, atenție la detalii și soluții personalizate pentru fiecare client.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <img
                src="/proiecte/apartament-modern.jpg"
                alt="Renovare apartament modern"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">Renovare Apartament Modern</h3>
                <p className="text-gray-600 flex-1">
                  Transformarea completă a unui apartament vechi într-un spațiu modern și luminos. Am realizat finisaje premium și amenajări inteligente.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <img
                src="/proiecte/casa-familie.jpg"
                alt="Construcție casă de familie"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">Construcție Casă de Familie</h3>
                <p className="text-gray-600 flex-1">
                  Am proiectat și construit o casă spațioasă pentru o familie tânără, cu accent pe eficiență și confort.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <img
                src="/proiecte/spatiu-comercial.jpg"
                alt="Amenajare spațiu comercial"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">Amenajare Spațiu Comercial</h3>
                <p className="text-gray-600 flex-1">
                  Amenajare interioară elegantă și practică pentru un spațiu comercial din centrul orașului.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">Vrei să vezi mai multe?</h2>
          <a
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 font-semibold rounded-md transition"
          >
            Solicită detalii despre proiectele noastre
          </a>
        </section>
      </div>
    </main>
  );
}