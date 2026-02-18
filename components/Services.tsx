import { Hammer, Wrench, Building2, Paintbrush } from "lucide-react";

export default function Services() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Serviciile Noastre
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Building2 size={40} />}
            title="Construcții"
            description="Construcții civile și rezidențiale realizate la standarde înalte."
          />

          <ServiceCard
            icon={<Hammer size={40} />}
            title="Renovări"
            description="Renovări complete pentru apartamente și case."
          />

          <ServiceCard
            icon={<Paintbrush size={40} />}
            title="Amenajări"
            description="Amenajări interioare moderne și funcționale."
          />

          <ServiceCard
            icon={<Wrench size={40} />}
            title="Instalații"
            description="Instalații sanitare și electrice profesionale."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
      <div className="text-yellow-500 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
