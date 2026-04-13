import {
  Hammer,
  Wrench,
  Building2,
  Paintbrush,
  Factory,
  Users,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section className="relative py-24 bg-linear-to-br from-yellow-50 via-white to-gray-100 min-h-screen overflow-visible z-10">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 pointer-events-none bg-[url('/pattern-construction.svg')] bg-no-repeat bg-center opacity-10"
        aria-hidden="true"
      />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-black text-center mb-7 tracking-tight text-gray-900 drop-shadow-lg">
          Expertiză &amp; Servicii Complete <br />
          <span className="bg-linear-to-r from-yellow-500 via-yellow-400 to-amber-300 text-transparent bg-clip-text">
            în Construcții
          </span>
        </h2>
        <p className="text-center text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-16">
          Totul sub același acoperiș: consultanță, execuție, finisaje și mentenanță – cu tehnologie modernă,
          echipă dedicată și garanția unor rezultate de excepție.
        </p>
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 mb-20">
          <ServiceCard
            icon={<Building2 size={54} className="drop-shadow-xl text-yellow-500" />}
            title="Construcții Generale"
            description="Realizăm case, clădiri și spații comerciale, de la fundație la predare la cheie. Management complet de șantier și materiale premium."
            items={[
              "Case la roșu sau la cheie",
              "Structuri beton / zidărie / metal",
              "Birouri & spații comerciale",
              "Construcții industriale",
            ]}
          />
          <ServiceCard
            icon={<Hammer size={54} className="text-yellow-500 drop-shadow-xl" />}
            title="Renovări & Reabilitări"
            description="Redăm viață spațiilor cu materiale inovatoare, rapid, curat și sigur."
            items={[
              "Finisaje moderne interior/exterior",
              "Refaceri integrate – pereți, tavane, pardoseli",
              "Izolații, compartimentări, rezistență",
            ]}
          />
          <ServiceCard
            icon={<Paintbrush size={54} className="text-yellow-500 drop-shadow-xl" />}
            title="Amenajări Interioare"
            description="Personalizăm fiecare spațiu de la concept la detaliu — estetica și funcționalitate se întâlnesc."
            items={[
              "Pachet complet: gresie, faianță, parchet",
              "Tencuieli, zugrăveli, tapet",
              "Tavane & pereți gips-carton",
            ]}
          />
          <ServiceCard
            icon={<Wrench size={54} className="text-yellow-500 drop-shadow-xl" />}
            title="Instalații & Utilități"
            description="Rețele smart pentru siguranță, economie și confort — totul updatat la 2024."
            items={[
              "Electric, termic & smart home",
              "Sanitare, centrale, automatizări",
              "Ventilații, climatizare, HVAC",
            ]}
          />
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 mb-16">
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
        <section className="mt-24 md:mt-32 mx-auto max-w-2xl rounded-3xl shadow-2xl px-8 py-14 flex flex-col items-center text-center border border-yellow-200 bg-linear-to-br from-white/80 via-yellow-50/30 to-yellow-100/60 backdrop-blur-md ring-1 ring-inset ring-yellow-200/30">
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
              <span>
                Transparență <span className="text-yellow-600 font-bold">totală</span>
              </span>
            </li>
          </ul>
          <Link
            href="/contact"
            className="inline-block mt-4 md:mt-3 px-12 py-5 rounded-full bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-xl font-bold text-white shadow-xl transition-all ring-2 ring-yellow-400/20"
          >
            Cere o ofertă personalizată
          </Link>
        </section>
      </div>
    </section>
  );
}

// Modern, frosted, 3D hover, accent border, soft shadow, glassmorphism
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
      <div className="bg-yellow-50/80 border-4 border-yellow-200 group-hover:border-yellow-400 rounded-full p-4 mb-6 w-20 h-20 flex items-center justify-center transition duration-200 shadow-lg group-hover:rotate-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
      <ul className="mt-5 mb-2 flex flex-col gap-2 w-full px-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-gray-700 text-base rounded-lg px-2 py-1 bg-linear-to-r from-yellow-50/80 to-white/40"
          >
            <CheckCircle2 className="h-5 w-5 text-yellow-500 opacity-80" /> {item}
          </li>
        ))}
      </ul>
      <span className="absolute right-6 top-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition font-semibold pointer-events-none select-none text-xs shadow">
        detalii
      </span>
      <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-yellow-300/10 group-hover:ring-yellow-400/25 transition"></div>
      <div className="pointer-events-none absolute -z-10 blur-2xl inset-8 md:inset-12 rounded-4xl bg-linear-to-tr from-yellow-50/20 via-yellow-100/25 to-yellow-200/10" />
    </div>
  );
}

// Modern, glassy, floating feature cards with icon highlight & soft shadow
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
    <div className="bg-white/80 border-2 border-yellow-100/70 rounded-[1.3rem] shadow-xl flex flex-col items-center hover:-translate-y-2 hover:shadow-yellow-200/70 transition-all duration-400 px-8 py-10 relative">
      <div className="bg-yellow-50 border-[2px] border-yellow-200 rounded-full p-4 mb-4 flex items-center justify-center shadow group-hover:shadow-lg transition">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-2 text-gray-900 text-center">{title}</h4>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}