import {
  ShieldCheck,
  Users,
  Hammer,
  CheckCircle2,
  Wrench,
  Paintbrush,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 md:py-36 min-h-[75vh] bg-linear-to-br from-[#18181A] via-[#232324] to-[#232324] overflow-visible z-10">
      {/* Decorative pattern bg */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[url('/pattern-construction.svg')] bg-no-repeat bg-center"
        aria-hidden="true"
      />
      {/* Card container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-black mb-7 tracking-tight bg-linear-to-tr from-[#F2BC57] via-[#F7D484] to-white bg-clip-text text-transparent drop-shadow-2xl">
          De ce să ne alegi pe noi?
        </h2>
        <p className="text-center text-xl md:text-2xl text-[#F2BC57] max-w-3xl mx-auto mb-14 font-medium drop-shadow">
          Transformăm ideile tale în spații moderne, sigure și durabile – cu echipă certificată, calitate garantată și consultanță la fiecare pas.
        </p>

        {/* Modern Glassmorphism Card Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <WhyCard
            icon={
              <Hammer className="h-10 w-10 text-[#F2BC57] drop-shadow-2xl" />
            }
            title="Experiență Verificată"
            description={
              <>
                <span className="font-semibold text-white">10+ ani</span> în proiecte premium, finalizate la cele mai exigente standarde.
              </>
            }
          />
          <WhyCard
            icon={
              <ShieldCheck className="h-10 w-10 text-[#F2BC57] drop-shadow-2xl" />
            }
            title="Calitate &amp; Garanție"
            description={
              <>
                Materiale <span className="font-semibold text-[#F2BC57]">premium</span>, tehnologii moderne, <span className="font-semibold">garanții extinse</span>.
              </>
            }
          />
          <WhyCard
            icon={
              <Users className="h-10 w-10 text-[#F2BC57] drop-shadow-2xl" />
            }
            title="Echipă Certificată"
            description={
              <>
                Constructori, tehnicieni și ingineri <span className="font-semibold">atestați</span> pentru fiecare detaliu.
              </>
            }
          />
          <WhyCard
            icon={
              <ThumbsUp className="h-10 w-10 text-[#F2BC57] drop-shadow-2xl" />
            }
            title="Respect &amp; Siguranță"
            description={
              <>
                Siguranța ta contează: comunicare <span className="font-semibold text-[#F2BC57]">transparentă</span> &amp; termene respectate.
              </>
            }
          />
        </div>

        {/* Short extra benefits */}
        <ul className="mx-auto max-w-3xl flex flex-col md:flex-row items-center justify-center gap-5 text-[#F2BC57] font-semibold text-base md:text-lg">
          <li className="flex items-center gap-3 bg-linear-to-r from-[#232324]/90 to-[#18181A]/90 border border-[#F2BC57]/15 shadow-lg px-6 py-4 rounded-xl backdrop-blur-md hover:ring-2 hover:ring-[#F2BC57]/60 transition-all duration-200">
            <Wrench className="h-6 w-6 text-[#F2BC57]" />
            <span className="whitespace-pre-line text-[#F2BC57]/95">
              Gestionăm proiectul de la început până la sfârșit – tu alegi, noi ne ocupăm de tot!
            </span>
          </li>
          <li className="flex items-center gap-3 bg-linear-to-r from-[#232324]/90 to-[#18181A]/90 border border-[#F2BC57]/15 shadow-lg px-6 py-4 rounded-xl backdrop-blur-md hover:ring-2 hover:ring-[#F2BC57]/60 transition-all duration-200">
            <Paintbrush className="h-6 w-6 text-[#F2BC57]" />
            <span className="text-[#F2BC57]/95">
              Design modern &amp; execuție atentă la detalii pentru fiecare spațiu.
            </span>
          </li>
          <li className="flex items-center gap-3 bg-linear-to-r from-[#232324]/90 to-[#18181A]/90 border border-[#F2BC57]/15 shadow-lg px-6 py-4 rounded-xl backdrop-blur-md hover:ring-2 hover:ring-[#F2BC57]/60 transition-all duration-200">
            <CheckCircle2 className="h-6 w-6 text-[#F2BC57]" />
            <span className="text-[#F2BC57]/95">
              Consultanță gratuită: planificăm împreună cea mai bună soluție.
            </span>
          </li>
        </ul>

        {/* Call to Action */}
        <div className="flex justify-center mt-16">
          <Link
            href="/contact"
            className="inline-block px-12 py-5 rounded-full font-extrabold text-lg md:text-xl shadow-xl bg-gradient-to-r from-[#F2BC57] via-[#F2BC57] to-[#F7D484] text-[#18181A] hover:from-[#F7D484] hover:to-[#F2BC57] hover:scale-105 transition-all duration-200 outline-none border-2 border-[#F2BC57]/30 focus-visible:ring-4 focus-visible:ring-[#F2BC57]/20"
          >
            Cere o ofertă personalizată
          </Link>
        </div>
      </div>
    </section>
  );
}

// WhyCard - matches navbar/footer color palette and glassy look
function WhyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="relative bg-gradient-to-br from-[#18181A]/80 to-[#232324]/80 border-2 border-[#F2BC57]/10 shadow-[0_6px_24px_0_rgba(242,188,87,0.13)] hover:shadow-[#F2BC57]/30 group rounded-3xl px-8 py-10 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F2BC57]/30 hover:shadow-2xl backdrop-blur-lg">
      <span className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-[#F2BC57]/12 border border-[#F2BC57]/40 shadow group-hover:bg-[#F2BC57]/20 group-hover:scale-110 transition-all">
        {icon}
      </span>
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#F2BC57] text-center drop-shadow">{title}</h3>
      <p className="text-[#F7D484] text-center leading-relaxed">{description}</p>
    </div>
  );
}