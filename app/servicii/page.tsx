import { Hammer, Wrench, Building2, Paintbrush, Factory, Users, ShieldCheck } from "lucide-react";

// Updated palette
// Navbar color palette: #212226 (bg-neutral-950), #232324, #F2BC57 (gold), #F7D484, #fff (white)

export default function Services() {
  return (
    <section
      id="servicii"
      className="relative isolate overflow-visible pt-32 pb-24 min-h-screen bg-neutral-950 bg-linear-to-tr from-neutral-900 via-neutral-950 to-[#232324]"
    >
      {/* Background accents using navbar-like palette */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/pattern-construction.svg')] bg-top bg-cover opacity-5" />
        <div className="absolute left-2/3 top-1/4 w-64 h-64 -z-10 blur-3xl bg-[#F2BC57]/20 rounded-full" />
        <div className="absolute right-1/4 bottom-12 w-48 h-48 -z-10 blur-2xl bg-[#F7D484]/25 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-14 md:mb-20">
          <span className="inline-block mb-2 uppercase text-xs md:text-sm tracking-widest font-bold text-[#F2BC57] bg-[#232324] px-3 py-1 rounded-full shadow-md border border-[#F2BC57]/30">
            Servicii Complete
          </span>
          <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight text-white pb-2 drop-shadow-md">
            Soluții Moderne <span className="text-[#F2BC57]">& Profesionale</span>
          </h2>
          <p className="text-lg md:text-2xl text-[#F7D484]/90 max-w-2xl mt-6 mb-2 px-1 font-semibold">
            Gestionăm fiecare proiect cu design contemporan, tehnologii noi și transparență totală — tu rămâi mereu în controlul rezultatului.
          </p>
        </header>

        {/* Service Cards */}
        <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mb-14">
          <ServiceCard
            icon={<Building2 size={54} className="text-[#F2BC57] drop-shadow" />}
            title="Construcții Generale"
            description="Case, imobile și sedii moderne, la standarde premium & management transparent."
            items={[
              "Case & vile (structură și finisaje)",
              "Clădiri rezidențiale/comerciale",
              "Structuri durabile: beton, metal, zidărie"
            ]}
          />
          <ServiceCard
            icon={<Hammer size={54} className="text-[#F2BC57] drop-shadow" />}
            title="Renovări & Reabilitări"
            description="Redăm viață spațiilor cu materiale inovatoare, rapid, curat și sigur."
            items={[
              "Finisaje moderne interior/exterior",
              "Refaceri integrate – pereți, tavane, pardoseli",
              "Izolații, compartimentări, rezistență"
            ]}
          />
          <ServiceCard
            icon={<Paintbrush size={54} className="text-[#F2BC57] drop-shadow" />}
            title="Amenajări Interioare"
            description="Personalizăm fiecare spațiu de la concept la detaliu — estetica și funcționalitate se întâlnesc."
            items={[
              "Pachet complet: gresie, faianță, parchet",
              "Tencuieli, zugrăveli, tapet",
              "Tavane & pereți gips-carton"
            ]}
          />
          <ServiceCard
            icon={<Wrench size={54} className="text-[#F2BC57] drop-shadow" />}
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
            icon={<Factory size={38} className="text-[#F2BC57]" />}
            title="Proiectare & Consultanță"
            description="Soluții tehnice avansate, 100% adaptate viziunii și bugetului tău. Consultanță personalizată."
          />
          <FeatureCard
            icon={<Users size={38} className="text-[#F2BC57]" />}
            title="Echipă Certificată"
            description="Ingineri și tehnicieni autorizați, în pas cu standardele tehnologice actuale."
          />
          <FeatureCard
            icon={<ShieldCheck size={38} className="text-[#F2BC57]" />}
            title="Calitate & Garanție"
            description="Materiale top, execuții fără erori, garanție extinsă și suport complet."
          />
        </div>

        {/* Why Us Section */}
        <section className="mt-24 md:mt-32 mx-auto max-w-2xl rounded-3xl shadow-2xl px-8 py-14 flex flex-col items-center text-center border border-[#F2BC57]/30 bg-linear-to-br from-[#232324]/90 via-neutral-950/75 to-[#232324]/90 backdrop-blur-2xl ring-1 ring-inset ring-[#F2BC57]/10">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight drop-shadow">
            Ce ne diferențiază?
          </h3>
          <ul className="grid gap-3 md:gap-5 mb-10 grid-cols-1 md:grid-cols-3 text-base md:text-lg w-full">
            <li className="flex flex-col md:flex-row items-center md:justify-center gap-2.5 text-[#F7D484] font-medium">
              <span className="rounded-full border border-[#F7D484]/30 p-2 bg-[#232324]">
                <Hammer className="h-7 w-7 text-[#F2BC57]" />
              </span>
              Termene <span className="text-[#F2BC57] font-bold">fără excepție</span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:justify-center gap-2.5 text-[#F7D484] font-medium">
              <span className="rounded-full border border-[#F7D484]/30 p-2 bg-[#232324]">
                <ShieldCheck className="h-7 w-7 text-[#F2BC57]" />
              </span>
              Garanții <span className="text-[#F2BC57] font-bold">scrise</span>
            </li>
            <li className="flex flex-col md:flex-row items-center md:justify-center gap-2.5 text-[#F7D484] font-medium">
              <span className="rounded-full border border-[#F7D484]/30 p-2 bg-[#232324]">
                <Users className="h-7 w-7 text-[#F2BC57]" />
              </span>
              <span>Transparență <span className="text-[#F2BC57] font-bold">totală</span></span>
            </li>
          </ul>
          <a
            href="/contact"
            className="inline-block mt-4 md:mt-3 px-12 py-5 rounded-full bg-gradient-to-r from-[#F2BC57] via-[#F7D484] to-[#F2BC57] hover:from-[#F7D484] hover:to-[#F2BC57] text-xl font-bold text-[#232324] shadow-xl transition-all ring-2 ring-[#F2BC57]/20"
          >
            Cere o ofertă personalizată
          </a>
        </section>
      </div>
    </section>
  );
}

// ServiceCard using navbar palette: dark backgrounds, gold accents, white text
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
    <div className="relative bg-[#232324]/85 backdrop-blur-lg border-2 border-[#F2BC57]/20 shadow-xl group hover:shadow-[#F2BC57]/40 hover:scale-105 transition-all duration-400 p-7 md:p-9 rounded-2xl flex flex-col items-center min-h-[380px] overflow-hidden">
      <div className="bg-gradient-to-tr from-[#F2BC57]/10 via-[#F7D484]/15 to-white/0 rounded-full mb-6 flex items-center justify-center p-4 border border-[#F2BC57]/60 group-hover:scale-110 transition-all drop-shadow">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold text-[#F7D484] text-center mb-1 leading-relaxed tracking-tight">{title}</h3>
      <p className="text-[#F7D484]/80 mb-4 text-center md:text-lg text-base font-semibold min-h-[50px]">{description}</p>
      <ul className="list-none px-0 py-1 text-[#F2BC57]/90 text-[15.5px] md:text-[17px] space-y-1.5 w-full pl-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-[#F2BC57]/80 before:inline-block" >
            {item}
          </li>
        ))}
      </ul>
      <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F2BC57]/80 via-[#F7D484]/90 to-[#F2BC57]/60 group-hover:h-2 group-hover:from-[#F7D484]/90 group-hover:via-[#F2BC57]/90 group-hover:to-[#F7D484]/90 transition-all duration-400" />
    </div>
  );
}

// FeatureCard using navbar palette: glass dark bg, gold icon/text, subtle hover
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
    <div className="bg-[#232324]/80 backdrop-blur-md border-2 border-[#F2BC57]/15 shadow-lg hover:shadow-[#F2BC57]/40 hover:-translate-y-1 group rounded-2xl p-7 md:p-9 flex flex-col items-center text-center transition-all duration-300">
      <span className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#18181A]/60 border border-[#F2BC57]/30 shadow-md group-hover:bg-[#232324]/80 group-hover:scale-110 transition-all">
        {icon}
      </span>
      <h4 className="text-xl md:text-2xl font-bold text-[#F2BC57] mb-1.5 leading-snug">{title}</h4>
      <p className="text-[#F7D484] md:text-base text-[15.5px] font-medium opacity-90">{description}</p>
    </div>
  );
}