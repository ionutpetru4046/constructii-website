import { Hammer, Wrench, Building2, Paintbrush, Factory, Users, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    <section
      id="servicii"
      className="relative isolate overflow-visible pt-32 pb-24 min-h-screen bg-linear-to-tr from-gray-100 via-white to-yellow-50"
    >
      {/* Modern grid dot background accent */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/pattern-construction.svg')] bg-top bg-cover opacity-10" />
        <div className="absolute left-2/3 top-1/4 w-64 h-64 -z-10 blur-2xl bg-yellow-300/30 rounded-full" />
        <div className="absolute right-1/4 bottom-12 w-48 h-48 -z-10 blur-2xl bg-yellow-200/60 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-14 md:mb-20">
          <span className="inline-block mb-2 uppercase text-xs md:text-sm tracking-widest font-bold text-yellow-500/90 bg-yellow-100/80 px-3 py-1 rounded-full shadow-md">
            Servicii Complete
          </span>
          <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-gray-900 pb-2 drop-shadow-md">
            Soluții Moderne <span className="text-yellow-600">& Profesionale</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-600/90 max-w-2xl mt-6 mb-2 px-1 font-semibold">
            Gestionăm fiecare proiect cu design contemporan, tehnologii noi și transparență totală — tu rămâi mereu în controlul rezultatului.
          </p>
        </header>

        {/* Service Cards */}
        <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mb-14">
          <ServiceCard
            icon={<Building2 size={54} className="text-yellow-500 drop-shadow-xl" />}
            title="Construcții Generale"
            description="Case, imobile și sedii moderne, la standarde premium & management transparent."
            items={[
              "Case & vile (structură și finisaje)",
              "Clădiri rezidențiale/comerciale",
              "Structuri durabile: beton, metal, zidărie"
            ]}
          />
          <ServiceCard
            icon={<Hammer size={54} className="text-yellow-500 drop-shadow-xl" />}
            title="Renovări & Reabilitări"
            description="Redăm viață spațiilor cu materiale inovatoare, rapid, curat și sigur."
            items={[
              "Finisaje moderne interior/exterior",
              "Refaceri integrate – pereți, tavane, pardoseli",
              "Izolații, compartimentări, rezistență"
            ]}
          />
          <ServiceCard
            icon={<Paintbrush size={54} className="text-yellow-500 drop-shadow-xl" />}
            title="Amenajări Interioare"
            description="Personalizăm fiecare spațiu de la concept la detaliu — estetica și funcționalitate se întâlnesc."
            items={[
              "Pachet complet: gresie, faianță, parchet",
              "Tencuieli, zugrăveli, tapet",
              "Tavane & pereți gips-carton"
            ]}
          />
          <ServiceCard
            icon={<Wrench size={54} className="text-yellow-500 drop-shadow-xl" />}
            title="Instalații & Utilități"
            description="Rețele smart pentru siguranță, economie și confort — totul updatat la 2024."
            items={[
              "Electric, termic & smart home",
              "Sanitare, centrale, automatizări",
              "Ventilații, climatizare, HVAC"
            ]}
          />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 mt-10 md:mt-20 mb-10">
          <FeatureCard
            icon={<Factory size={38} className="text-yellow-600" />}
            title="Proiectare & Consultanță"
            description="Soluții tehnice avansate, 100% adaptate viziunii și bugetului tău. Consultanță personalizată."
          />
          <FeatureCard
            icon={<Users size={38} className="text-yellow-600" />}
            title="Echipă Certificată"
            description="Ingineri și tehnicieni autorizați, în pas cu standardele tehnologice actuale."
          />
          <FeatureCard
            icon={<ShieldCheck size={38} className="text-yellow-600" />}
            title="Calitate & Garanție"
            description="Materiale top, execuții fără erori, garanție extinsă și suport complet."
          />
        </div>

        {/* Why Us Section */}
        <section className="mt-24 md:mt-32 mx-auto max-w-2xl rounded-3xl shadow-2xl px-8 py-14 flex flex-col items-center text-center border border-yellow-200 bg-linear-to-br from-white/80 via-yellow-50/20 to-yellow-100/60 backdrop-blur-md ring-1 ring-inset ring-yellow-200/30">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight drop-shadow">
            Ce ne diferențiază?
          </h3>
          <ul className="grid gap-3 md:gap-5 mb-10 grid-cols-1 md:grid-cols-3 text-base md:text-lg w-full">
            <li className="flex flex-col md:flex-row items-center md:justify-center gap-2.5 text-gray-800 font-medium">
              <span className="rounded-full p-2 bg-yellow-100">
                <Hammer className="h-7 w-7 text-yellow-600" />
              </span>
              Termene <span className="text-yellow-600 font-bold">fără excepție</span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:justify-center gap-2.5 text-gray-800 font-medium">
              <span className="rounded-full p-2 bg-yellow-100">
                <ShieldCheck className="h-7 w-7 text-yellow-600" />
              </span>
              Garanții <span className="text-yellow-600 font-bold">scrise</span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:justify-center gap-2.5 text-gray-800 font-medium">
              <span className="rounded-full p-2 bg-yellow-100">
                <Users className="h-7 w-7 text-yellow-600" />
              </span>
              <span>Transparență <span className="text-yellow-600 font-bold">totală</span></span>
            </li>
          </ul>
          <a
            href="/contact"
            className="inline-block mt-4 md:mt-3 px-12 py-5 rounded-full bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-xl font-bold text-white shadow-xl transition-all ring-2 ring-yellow-400/20"
          >
            Cere o ofertă personalizată
          </a>
        </section>
      </div>
    </section>
  );
}

// Modern ServiceCard: frosted glass, 3D hover, bright accent border, dynamic highlight
function ServiceCard({
  icon,
  title,
  description,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="relative bg-white/75 backdrop-blur-xl border-2 border-yellow-100/80 shadow-2xl group hover:shadow-yellow-200/80 hover:scale-[1.04] transition-all duration-400 p-7 md:p-9 rounded-[1.6rem] flex flex-col items-center min-h-[380px] overflow-hidden">
      <div className="bg-linear-to-tr from-yellow-200/80 via-yellow-50 to-white rounded-full mb-6 flex items-center justify-center p-4 border-2 border-yellow-400/10 group-hover:scale-110 transition-all drop-shadow-lg">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-1 leading-relaxed tracking-tight">{title}</h3>
      <p className="text-gray-600 mb-4 text-center md:text-lg text-base font-semibold min-h-[50px]">{description}</p>
      <ul className="list-none px-0 py-1 text-gray-600/90 text-[15.5px] md:text-[17px] space-y-1.5 w-full pl-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-yellow-400/80 before:inline-block" >
            {item}
          </li>
        ))}
      </ul>
      <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-yellow-400/80 via-yellow-500/90 to-yellow-400/60 group-hover:h-2 group-hover:from-yellow-500/90 group-hover:via-yellow-400/90 group-hover:to-yellow-500/90 transition-all duration-400" />
    </div>
  );
}

// Modern FeatureCard: transparent glass, vibrant icon, strong shadow, hover lift
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/90 backdrop-blur-[2.5px] border-2 border-yellow-100/70 shadow-lg hover:shadow-yellow-300/60 hover:-translate-y-1 group rounded-2xl p-7 md:p-9 flex flex-col items-center text-center transition-all duration-300">
      <span className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100/80 border-2 border-yellow-400/5 shadow-md group-hover:bg-yellow-200/90 group-hover:scale-110 transition-all">
        {icon}
      </span>
      <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1.5 leading-snug">{title}</h4>
      <p className="text-gray-700 md:text-base text-[15.5px] font-medium opacity-90">{description}</p>
    </div>
  );
}