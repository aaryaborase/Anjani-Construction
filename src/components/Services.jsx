import { services } from "../data/services";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Our Core Services
        </h2>
        <p className="text-gray-400 mb-12">
          Delivering excellence across every stage of construction
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary p-8 rounded-xl border border-gray-700 hover:border-accent transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="text-accent text-4xl mb-4 flex justify-center">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
