import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Construcții și Renovări Profesionale
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            Oferim servicii complete de construcții, renovări și amenajări
            interioare cu echipă calificată și materiale de calitate.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold rounded-md transition"
            >
              Solicita Ofertă
            </Link>

            <Link
              href="/proiecte"
              className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
            >
              Vezi Proiecte
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
