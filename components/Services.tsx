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

// Main Services Page with new dark/light themed modern style
export default function Services() {
  return (
    <section className="relative min-h-screen py-16 px-2 md:px-6 lg:px-8 bg-gradient-to-br from-[#121d2c] via-[#223144] to-[#192435] overflow-visible z-0">
      {/* Decorative gradients / lights */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-tr from-yellow-400/10 via-amber-500/10 to-transparent rounded-full blur-3xl animate-pulse z-0" />
        <div className="absolute bottom-8 right-8 w-52 h-52 bg-gradient-to-br from-amber-300/20 via-yellow-200/20 to-transparent rounded-full blur-3xl animate-pulse delay-200 z-0" />
        <div className="absolute inset-0 pointer-events-none bg-[url('/pattern-construction.svg')] bg-no-repeat bg-center opacity-[0.03] mix-blend-soft-light z-0" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-5">
        {/* Main Heading */}
        <h1 className="text-3xl xs:text-4xl md:text-5xl font-extrabold text-center mb-3 tracking-tight text-white leading-tight drop-shadow-lg">
          Servicii Complete
          <br className="hidden sm:block" />
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 animate-gradient">
            pentru Construcții Moderne
          </span>
        </h1>
        <p className="text-center text-base xs:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto mb-10 px-2">
          De la fundații la finisaje rafinate, profesionalism și consultanță la cel mai înalt nivel – totul livrat cu inovație, atenție și garanție.
        </p>
        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-16">
          <ServiceCard
            icon={<Building2 size={42} className="text-yellow-400" />}
            title="Construcții Generale"
            description="Case și spații comerciale de la A la Z, gestionare completă și suport pe întreg proiectul."
            items={[
              "Structuri rezistente",
              "Executare la roșu sau cheie",
              "Spații comerciale și industriale",
              "Materiale premium",
            ]}
          />
          <ServiceCard
            icon={<Hammer size={42} className="text-amber-300" />}
            title="Renovări & Reabilitări"
            description="Actualizări rapide și sigure pentru locuințe și sedii, cu materiale moderne."
            items={[
              "Refacere finisaje interioare",
              "Izolații inteligente",
              "Reconfigurări & compartimentări",
            ]}
          />
          <ServiceCard
            icon={<Paintbrush size={42} className="text-yellow-300" />}
            title="Amenajări Interioare"
            description="Design, execuție și recomandări pentru spații care impresionează zi de zi."
            items={[
              "Zugrăveli, tapetare",
              "Gresie & parchet de ultimă generație",
              "Placări și tavane moderne",
            ]}
          />
          <ServiceCard
            icon={<Wrench size={42} className="text-yellow-400" />}
            title="Instalații & Utilități"
            description="Instalări eficiente pentru siguranță și confort: electric, sanitar, smart home."
            items={[
              "Automatizări & smart home",
              "Sisteme termice/ventilație",
              "Climatizare și HVAC",
            ]}
          />
        </div>
        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <FeatureCard
            icon={<Factory size={30} className="text-yellow-400" />}
            title="Consultanță personalizată"
            description="Adaptăm tehnic soluțiile nevoilor tale și răspundem clar la orice întrebare."
          />
          <FeatureCard
            icon={<Users size={30} className="text-amber-300" />}
            title="Echipă experimentată"
            description="Specialiști autorizați, pasionați de inovație și rezultate excelente."
          />
          <FeatureCard
            icon={<ShieldCheck size={30} className="text-yellow-500" />}
            title="Calitate garantată"
            description="Materiale selectate, execuții precise, garanție extinsă oferită la fiecare lucrare."
          />
        </div>
        {/* WHY US - accent box */}
        <section className="w-full max-w-[98vw] sm:max-w-2xl mx-auto px-4 xs:px-8 py-7 xs:py-10 bg-gradient-to-tr from-yellow-50/95 to-yellow-100/80 border border-yellow-100 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col items-center text-center ring-1 ring-amber-100/30">
          <h3 className="text-2xl xs:text-3xl md:text-4xl font-semibold text-neutral-800 mb-5 opacity-90">
            Ce ne deosebește?
          </h3>
          <ul className="flex flex-col xs:flex-row items-center justify-center gap-4 xs:gap-6 md:gap-8 mb-7 w-full max-w-4xl mx-auto">
            <WhyUsItem
              icon={<Hammer className="h-7 w-7 xs:h-8 xs:w-8 text-yellow-500" />}
              label="Respectăm"
              highlight="termenele"
            />
            <WhyUsItem
              icon={<ShieldCheck className="h-7 w-7 xs:h-8 xs:w-8 text-amber-500" />}
              label="Garanții"
              highlight="scrise"
            />
            <WhyUsItem
              icon={<Users className="h-7 w-7 xs:h-8 xs:w-8 text-yellow-600" />}
              label="Dialog"
              highlight="transformat în rezultate"
            />
          </ul>
          <Link
            href="/contact"
            className="mt-1 sm:mt-2 px-8 py-3 rounded-full text-white bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-150 font-bold text-base md:text-lg shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
          >
            Solicită ofertă rapidă
          </Link>
        </section>
      </div>
    </section>
  );
}

// Service Card - Modern darkglass responsive
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
    <div className="relative bg-gradient-to-br from-[#171C21] via-[#202c3a]/80 to-[#222f3d]/90 border border-yellow-200/20 shadow-xl group rounded-xl flex flex-col items-start min-h-[340px] h-full px-5 py-7 sm:px-6 sm:py-8 gap-2 transition-all duration-300 hover:border-yellow-400/70 hover:scale-[1.015] overflow-hidden">
      <div className="mb-2 flex items-center justify-center">
        <span className="bg-gradient-to-tr from-yellow-300/60 via-yellow-100/20 to-transparent rounded-full p-3 mr-2">
          {icon}
        </span>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-slate-200/70 text-sm mb-2 min-h-[42px]">{description}</p>
      <ul className="flex flex-col gap-1 mt-2 w-full">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 rounded-lg px-2 py-2 bg-white/10 text-white text-xs xs:text-sm sm:text-base font-medium"
          >
            <CheckCircle2 className="h-5 w-5 text-yellow-300" /> {item}
          </li>
        ))}
      </ul>
      {/* Decorative hover hint */}
      <span className="absolute right-3 top-3 text-yellow-400/90 opacity-0 group-hover:opacity-100 transition pointer-events-none select-none text-xs font-semibold animate-bounce">
        vezi detalii
      </span>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-yellow-200/10 group-hover:ring-yellow-300/30 transition"></div>
      <div className="pointer-events-none absolute -z-10 blur-xl inset-10 rounded-2xl bg-gradient-to-br from-yellow-100/5 via-yellow-200/10 to-yellow-300/5" />
    </div>
  );
}

// Feature Card - clean, responsive, soft glass with hover accent
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
    <div className="bg-gradient-to-br from-white/95 via-yellow-100/80 to-yellow-50/90 border border-yellow-100/60 rounded-xl shadow-lg flex flex-col items-center hover:-translate-y-2 hover:shadow-yellow-200/90 transition-all duration-300 px-6 py-7 sm:px-8 sm:py-8">
      <div className="bg-yellow-50 rounded-full p-2 mb-3 flex items-center justify-center border border-yellow-200 shadow">
        {icon}
      </div>
      <h4 className="text-lg md:text-xl font-bold text-neutral-900 text-center whitespace-pre-line mb-1">{title}</h4>
      <p className="text-neutral-700 text-center text-xs sm:text-sm">{description}</p>
    </div>
  );
}

// Why Us List Item - subtle with icons, always wraps for mobile
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
    <li className="flex flex-col xs:flex-row items-center xs:justify-center gap-2 px-4 py-2 rounded-xl bg-yellow-100/80 hover:bg-yellow-200/70 shadow-sm transition text-neutral-900 font-medium w-full xs:w-auto">
      <span className="rounded-full p-1.5 xs:p-2 bg-yellow-200/80 flex items-center justify-center shadow">{icon}</span>
      <span className="flex flex-col xs:flex-row xs:items-center gap-0.5 xs:gap-1">
        <span className="">{label}</span>
        <span className="text-yellow-700 font-bold">{highlight}</span>
      </span>
    </li>
  );
}