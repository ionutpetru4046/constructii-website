import {
  ShieldCheck,
  Building2,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#232324] via-neutral-950 to-[#18181A] py-14 md:py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-3 sm:px-8">
        {/* Modern Glass Card */}
        <section className="relative rounded-3xl bg-white/5 backdrop-blur-2xl border border-[#F2BC57]/20 shadow-[0_6px_48px_0_rgba(242,188,87,0.18)] py-12 px-6 md:px-14 lg:px-20 mb-16 flex flex-col gap-10">
          <h1 className="text-center text-5xl font-extrabold bg-linear-to-tr from-[#F2BC57] via-[#F7D484] to-white bg-clip-text text-transparent tracking-tight drop-shadow-lg mb-6">
            <span className="text-[#F2BC57]">Despre</span> Noi
          </h1>

          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-14 items-center">
            <div className="w-full md:w-2/3">
              <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow">
                <Building2 className="text-[#F2BC57]" size={28} />
                Cine suntem
              </h2>
              <p className="text-[#F7D484]/95 text-lg mb-3 font-medium drop-shadow-sm">
                Suntem o echipă cu peste 10 ani experiență în construcții și renovări, dedicată excelenței și satisfacției clienților.
              </p>
              <p className="text-[#F2BC57]/90 text-base">
                Tratăm fiecare proiect cu atenție la detalii, materiale premium și tehnologii moderne. Calitatea, seriozitatea și comunicarea transparentă sunt semnătura noastră.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="transition-all shadow-2xl rounded-3xl overflow-hidden border-2 border-[#F2BC57]/40 group relative hover:scale-105 duration-300">
                <img
                  src="/teamConstruction.jpg"
                  alt="Echipa ConstructiiPro"
                  className="object-cover w-full aspect-video min-h-[180px] max-w-xs md:max-w-xs group-hover:brightness-105"
                />
                <div className="absolute bottom-2 right-2 bg-[#232324]/95 px-3 py-1.5 rounded-lg text-xs font-bold text-[#F2BC57] shadow-xl tracking-wide">
                  Echipa KadarHouse.ro
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern values cards section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-12 tracking-tight drop-shadow-md">
            Valorile <span className="text-[#F2BC57]">Noastre</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard
              icon={<Sparkles className="text-[#F2BC57]" size={40} strokeWidth={2.3} />}
              title="Profesionalism"
              description="Respectăm cele mai înalte standarde — de la ofertare la predare."
            />
            <ValueCard
              icon={<ShieldCheck className="text-[#F2BC57]" size={40} strokeWidth={2.3} />}
              title="Încredere"
              description="Suntem transparenți, de încredere și respectăm termenele/bugetele."
            />
            <ValueCard
              icon={<Sparkles className="text-[#F2BC57]" size={40} strokeWidth={2.3} />}
              title="Calitate"
              description="Materiale premium, execuție impecabilă, rezultate de durată și estetice."
            />
          </div>
        </section>

        {/* Call To Action Modern */}
        <section className="flex flex-col items-center justify-center mb-2">
          <div className="rounded-2xl bg-linear-to-r from-[#F2BC57]/80 via-[#F7D484]/90 to-[#F2BC57]/60 px-8 md:px-16 py-8 shadow-2xl ring-1 ring-[#F2BC57]/20 flex flex-col items-center w-full max-w-xl gap-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-950 text-center drop-shadow-sm">
              Vrei să lucrăm împreună?
            </h2>
            <a
              href="/contact"
              className="bg-[#232324]/80 hover:bg-[#232324]/95 border border-[#F2BC57]/40 text-[#F2BC57] font-bold px-9 py-3 rounded-full text-lg shadow-md hover:-translate-y-0.5 transition-all duration-200 tracking-wide"
            >
              Contactează-ne acum
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

// ValueCard - styled for modern glassy UI and gold-accented palette
function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#232324]/80 backdrop-blur-md border-2 border-[#F2BC57]/10 shadow-lg hover:shadow-[#F2BC57]/30 group rounded-2xl p-7 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2">
      <span className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#18181A]/70 border border-[#F2BC57]/30 shadow-md group-hover:bg-[#232324]/80 group-hover:scale-110 transition-all">
        {icon}
      </span>
      <h3 className="text-lg font-bold mb-1 text-[#F7D484]">{title}</h3>
      <p className="text-[15.5px] md:text-base text-[#F2BC57]/80">{description}</p>
    </div>
  );
}
