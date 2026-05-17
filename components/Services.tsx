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

// Main Services Page
export default function Services() {
  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-yellow-50 via-amber-100/80 to-yellow-100/60 overflow-visible z-10">
      {/* Decorative floating blobs/pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/4 w-60 h-60 bg-yellow-300/10 rounded-full blur-3xl animate-float1" />
        <div className="absolute bottom-8 right-10 w-80 h-80 bg-amber-100/25 rounded-full blur-3xl animate-float2" />
        <div className="absolute left-0 bottom-1/2 w-32 h-32 bg-yellow-200/10 rounded-full blur-2xl animate-float3" />
        <div className="absolute inset-0 pointer-events-none bg-[url('/pattern-construction.svg')] bg-no-repeat bg-center opacity-5" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-5 tracking-tight text-neutral-900 drop-shadow-xl leading-tight">
          Expertiză &amp; Servicii Complete <br />
          <span className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 text-transparent bg-clip-text animate-gradient">
            în Construcții
          </span>
        </h1>
        <p className="text-center text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto mb-14">
          Totul sub același acoperiș: consultanță, execuție, finisaje și mentenanță – cu tehnologie modernă,
          echipă dedicată și garanția unor rezultate excepționale.
        </p>

        {/* Service Cards with Glassmorphism */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-24">
          <ServiceCard
            icon={<Building2 size={50} className="drop-shadow-xl text-yellow-500" />}
            title="Construcții Generale"
            description="Case, clădiri și spații comerciale – de la fundație la predare la cheie. Management complet și materiale premium."
            items={[
              "Case la roșu sau la cheie",
              "Structuri beton / zidărie / metal",
              "Birouri & spații comerciale",
              "Construcții industriale",
            ]}
          />
          <ServiceCard
            icon={<Hammer size={50} className="text-yellow-500 drop-shadow-xl" />}
            title="Renovări & Reabilitări"
            description="Redăm viață spațiilor cu materiale inovatoare – rapid, curat și sigur."
            items={[
              "Finisaje moderne interior/exterior",
              "Refaceri integrate: pereți, tavane, pardoseli",
              "Izolații, compartimentări, rezistență",
            ]}
          />
          <ServiceCard
            icon={<Paintbrush size={50} className="text-yellow-500 drop-shadow-xl" />}
            title="Amenajări Interioare"
            description="Personalizăm orice spațiu de la concept la detaliu – estetică și funcționalitate complete."
            items={[
              "Pachet complet: gresie, faianță, parchet",
              "Tencuieli, zugrăveli, tapet",
              "Tavane & pereți gips-carton",
            ]}
          />
          <ServiceCard
            icon={<Wrench size={50} className="text-yellow-500 drop-shadow-xl" />}
            title="Instalații & Utilități"
            description="Rețele smart pentru siguranță, economie și confort – totul la standarde 2024."
            items={[
              "Electric, termic & smart home",
              "Sanitare, centrale, automatizări",
              "Ventilații, climatizare, HVAC",
            ]}
          />
        </div>

        {/* Features - Why Us */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-20">
          <FeatureCard
            icon={<Factory size={34} className="text-yellow-500" />}
            title="Proiectare & Consultanță"
            description="Soluții tehnice avansate, 100% adaptate viziunii și bugetului tău."
          />
          <FeatureCard
            icon={<Users size={34} className="text-yellow-500" />}
            title="Echipă Certificată"
            description="Ingineri și tehnicieni autorizați, în pas cu standardele tehnologice actuale."
          />
          <FeatureCard
            icon={<ShieldCheck size={34} className="text-yellow-500" />}
            title="Calitate & Garanție"
            description="Materiale top, execuții impecabile, garanție extinsă & suport complet."
          />
        </div>

        {/* Why Us Section */}
        <section className="mt-20 md:mt-28 mx-auto max-w-2xl rounded-3xl shadow-xl px-6 sm:px-12 py-10 sm:py-16 flex flex-col items-center text-center border border-yellow-100 bg-gradient-to-br from-white/90 via-yellow-50/50 to-amber-100/60 filter backdrop-blur-2xl ring-1 ring-inset ring-yellow-100/40">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-8 tracking-tight drop-shadow">
            Ce ne diferențiază?
          </h3>
          <ul className="flex flex-col md:flex-row md:space-x-6 gap-4 w-full mb-8 justify-center">
            <WhyUsItem
              icon={<Hammer className="h-8 w-8 text-yellow-500" />}
              label="Termene"
              highlight="fără excepție"
            />
            <WhyUsItem
              icon={<ShieldCheck className="h-8 w-8 text-yellow-500" />}
              label="Garanții"
              highlight="scrise"
            />
            <WhyUsItem
              icon={<Users className="h-8 w-8 text-yellow-500" />}
              label="Transparență"
              highlight="totală"
            />
          </ul>
          <Link
            href="/contact"
            className="inline-block mt-3 px-10 md:px-12 py-4 md:py-5 rounded-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-800 text-lg md:text-xl font-bold text-white shadow-xl hover:scale-[1.04] transition-all duration-200 focus-visible:outline-yellow-300 ring-2 ring-yellow-400/20"
          >
            Cere o ofertă personalizată
          </Link>
        </section>
      </div>
    </section>
  );
}

// Service Card with Glassmorphism, Animated Shine, and Hover Borders
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
    <div className="relative bg-white/80 bg-gradient-to-tr from-yellow-50/80 via-white/90 to-amber-100/50 backdrop-blur-xl border border-yellow-200/60 shadow-lg group rounded-2xl flex flex-col items-center min-h-[360px] px-5 sm:px-6 py-7 sm:py-10 overflow-hidden hover:shadow-2xl hover:border-yellow-300/70 transition-all duration-300">
      <div className="relative mb-5 flex items-center justify-center">
        <span className="absolute -inset-2 rounded-full bg-gradient-to-br from-yellow-300/40 to-yellow-100/10 blur-lg opacity-80 group-hover:scale-110 transition duration-300" />
        <span className="relative z-10 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-50/70 border-4 border-yellow-200 group-hover:border-yellow-500 shadow group-hover:shadow-yellow-300/20 transition-all duration-300">
          {icon}
        </span>
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-2 text-neutral-900 text-center">{title}</h3>
      <p className="text-neutral-600 text-center mb-3">{description}</p>
      <ul className="w-full flex flex-col gap-2 mt-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 rounded-lg px-3 py-1.5 bg-gradient-to-r from-yellow-50/80 to-white/50 text-neutral-800 text-sm md:text-base font-medium"
          >
            <CheckCircle2 className="h-5 w-5 text-yellow-400" /> {item}
          </li>
        ))}
      </ul>
      {/* Animated subtle detail, appears on hover */}
      <span className="absolute right-4 top-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition pointer-events-none select-none text-sm shadow font-semibold">
        descoperă
      </span>
      {/* Subtle animated shine effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-yellow-200/20 group-hover:ring-yellow-300/40 transition"></div>
      <div className="pointer-events-none absolute -z-10 blur-2xl inset-8 md:inset-12 rounded-3xl bg-gradient-to-tr from-yellow-50/10 via-yellow-100/20 to-yellow-200/10" />
    </div>
  );
}

// Feature Card - minimal, frosted, floating effect
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
    <div className="bg-white/70 backdrop-blur-xl border border-yellow-100/60 rounded-2xl shadow-lg flex flex-col items-center hover:-translate-y-2 hover:shadow-yellow-200/60 transition-all duration-300 px-7 py-8 md:px-8 md:py-10">
      <div className="bg-gradient-to-tr from-yellow-100/90 to-yellow-50 rounded-full p-3 mb-4 flex items-center justify-center border border-yellow-200 shadow">
        {icon}
      </div>
      <h4 className="text-lg md:text-xl font-bold mb-1 text-neutral-900 text-center whitespace-pre-line">{title}</h4>
      <p className="text-neutral-600 text-center text-sm md:text-base">{description}</p>
    </div>
  );
}

// Why Us List Item
function WhyUsItem({
  icon,
  label,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  highlight: string;
}) {
  return (
    <li className="flex flex-col md:flex-row items-center md:justify-center gap-2 px-4 py-2 rounded-lg bg-yellow-100/60 shadow-sm hover:bg-yellow-200/60 transition text-neutral-900 font-medium w-full md:w-auto">
      <span className="rounded-full p-2 bg-yellow-200/70 flex items-center justify-center shadow">{icon}</span>
      <span className="flex flex-col items-center md:flex-row md:items-center gap-1 md:gap-2">
        <span className="">{label}</span>
        <span className="text-yellow-700 font-bold">{highlight}</span>
      </span>
    </li>
  );
}