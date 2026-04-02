import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Anjani Constructions delivered our commercial plaza two months ahead of schedule. Their professionalism is unmatched.",
      name: "Ravi D.",
      role: "Real Estate Developer",
    },
    {
      quote:
        "They built our dream home with absolute transparency and zero hidden costs. Highly recommended!",
      name: "Priya S.",
      role: "Homeowner",
    },
    {
      quote:
        "They built our dream home with absolute transparency and zero hidden costs. Highly recommended!",
      name: "Ashoka Buildcon",
      role: "Client",
    },
    {
      quote:
        "They built our dream home with absolute transparency and zero hidden costs. Highly recommended!",
      name: "Swastik Infrastructure",
      role: "Client",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-primary p-8 rounded-xl border border-gray-700 hover:border-accent transition"
            >
              <p className="text-gray-300 italic mb-6">"{t.quote}"</p>

              <h4 className="font-semibold text-lg">{t.name}</h4>
              <p className="text-accent text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
