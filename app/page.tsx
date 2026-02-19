import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <section className="relative flex items-center justify-center w-full h-screen min-h-[600px] overflow-hidden">
        {/* Hero background image with black overlay */}
        <div
          className="absolute inset-0 w-full h-full z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Construction.jpg'), linear-gradient(to bottom, rgba(0,0,0,0.60), rgba(0,0,0,0.85))",
            backgroundBlendMode: "overlay",
          }}
          aria-hidden="true"
        ></div>
        <div className="relative z-20 flex flex-col justify-center items-center w-full h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg max-w-4xl mx-auto">
            Construcții și Renovări Profesionale
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
            Oferim servicii complete de construcții, renovări și amenajări interioare cu echipă calificată și materiale de calitate superioară.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 font-semibold rounded-md transition text-lg shadow-xl"
            >
              Solicită Ofertă
            </Link>
            <Link
              href="/proiecte"
              className="border border-white px-8 py-4 rounded-md hover:bg-white hover:text-black transition text-lg text-white font-semibold shadow-xl"
            >
              Vezi Proiecte
            </Link>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Services />
    </main>
  );
}
