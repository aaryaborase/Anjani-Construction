import {
  FaHome,
  FaBuilding,
  FaRoad,
  FaPaintRoller,
  FaMapMarkedAlt,
  FaTasks,
} from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Construction",
      icon: FaHome,
      description:
        "We specialize in building high-quality residential spaces tailored to your lifestyle. From villas to apartments, we ensure transparency, timely delivery, and superior craftsmanship.",
    },
    {
      title: "Commercial Construction",
      icon: FaBuilding,
      description:
        "We deliver scalable commercial spaces including offices, retail outlets, and warehouses with strong focus on design, compliance, and efficiency.",
    },
    {
      title: "Infrastructure Projects",
      icon: FaRoad,
      description:
        "We execute large-scale infrastructure projects such as roads and bridges with advanced engineering and long-term durability.",
    },
    {
      title: "Interior Work",
      icon: FaPaintRoller,
      description:
        "Our interior solutions include flooring, ceiling design, painting, and custom finishes that enhance aesthetics and functionality.",
    },
    {
      title: "Surveying & Planning",
      icon: FaMapMarkedAlt,
      description:
        "Using modern tools like drone mapping and total stations, we provide precise land surveys and planning for flawless execution.",
    },
    {
      title: "Project Management",
      icon: FaTasks,
      description:
        "We manage your project end-to-end—handling timelines, budgets, materials, and coordination to ensure smooth delivery.",
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center">
          Our Services
        </h1>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          We provide end-to-end construction solutions with a strong focus on
          quality, innovation, and reliability.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-secondary p-8 rounded-xl border border-gray-700 hover:border-accent transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* 🔥 Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-accent text-2xl" />
                  <h2 className="text-2xl font-heading font-semibold">
                    {service.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/919922719122?text=Hello! I am interested in " +
                        service.title,
                      "_blank",
                    )
                  }
                  className="mt-6 text-accent hover:underline"
                >
                  Get Quote →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
