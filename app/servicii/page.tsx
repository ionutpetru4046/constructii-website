import { Hammer, Wrench, Building2, Paintbrush, Factory, Users, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-white relative overflow-visible">
      <div className="absolute z-0 inset-0 pointer-events-none opacity-20 bg-[url('/pattern-construction.svg')] bg-no-repeat bg-right-top" />
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight text-gray-900">
          Expertiză & Soluții Complete în Construcții
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-14">
          Suntem partenerul de încredere pentru proiectele tale: de la construcții civile, amenajări moderne, la instalații profesionale și management de șantier — transformăm ideile în realitate, pas cu pas.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Building2 size={48} />}
            title="Construcții Generale"
            description="Realizăm case, clădiri de birouri, hale industriale și spații comerciale – de la fundație la predare la cheie."
            items={[
              "Case & vile la roșu sau la cheie",
              "Clădiri rezidențiale și comerciale",
              "Structuri metalice, beton, zidărie"
            ]}
          />
          <ServiceCard
            icon={<Hammer size={48} />}
            title="Renovări & Reabilitări"
            description="Renovăm spații vechi, modernizăm apartamente, consolidăm structuri și asigurăm finisaje premium."
            items={[
              "Finisaje interioare & exterioare",
              "Refacere pereți, tavane, pardoseli",
              "Izolații termice/termohidro"
            ]}
          />
          <ServiceCard
            icon={<Paintbrush size={48} />}
            title="Amenajări Interioare"
            description="Personalizăm ambiente, de la design interior la execuție – totul pe gustul și nevoile tale."
            items={[
              "Montaj gresie, faianță, parchet",
              "Tencuieli decorative, vopsitorii",
              "Tavane false & compartimentări gips-carton"
            ]}
          />
          <ServiceCard
            icon={<Wrench size={48} />}
            title="Instalații & Utilități"
            description="Montăm și reabilităm instalații sanitare, electrice și termice folosind tehnologii moderne."
            items={[
              "Instalații electrice & iluminat",
              "Sisteme sanitare & termice",
              "Automatizări, ventilații, HVAC"
            ]}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={<Factory size={36} />}
            title="Proiectare & Consultanță"
            description="Oferim soluții tehnice complete – analizăm, optimizăm și adaptăm proiectul la bugetul și nevoile tale."
          />
          <FeatureCard
            icon={<Users size={36} />}
            title="Echipă Certificată"
            description="Lucrăm cu specialiști atestați, ingineri și tehnicieni cu experiență în domeniu."
          />
          <FeatureCard
            icon={<ShieldCheck size={36} />}
            title="Calitate & Garanție"
            description="Utilizăm materiale premium și tehnici moderne, garantând durabilitate și siguranță la fiecare proiect."
          />
        </div>

        <div className="mt-20 max-w-2xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">De ce să lucrezi cu noi?</h3>
          <ul className="space-y-3 inline-block text-gray-700">
            <li className="flex items-center gap-2">
              <Hammer className="h-5 w-5 text-yellow-600" /> Respectăm termenele limită
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-yellow-600" /> Garanții extinse pentru toate lucrările
            </li>
            <li className="flex items-center gap-2">
              <Users className="h-5 w-5 text-yellow-600" /> Consultanță gratuită la fiecare pas
            </li>
          </ul>
          <a
            href="/contact"
            className="mt-8 px-8 py-3 rounded-full text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-lg font-medium shadow-lg transition duration-200"
          >
            Cere o ofertă personalizată
          </a>
        </div>
      </div>
    </section>
  );
}

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
    <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center hover:-translate-y-1.5 hover:shadow-xl border border-gray-100 transition duration-300">
      <div className="bg-yellow-100 text-yellow-600 rounded-full p-3 mb-5 hover:scale-110 transition">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="list-disc list-inside text-sm text-gray-500 space-y-1 text-left mt-2 w-full">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

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
    <div className="bg-gradient-to-tr from-yellow-50 via-white to-white rounded-xl p-7 border border-yellow-100 shadow flex flex-col items-center text-center hover:shadow-md transition">
      <span className="mb-4">{icon}</span>
      <h4 className="text-lg font-semibold mb-2 text-gray-900">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}