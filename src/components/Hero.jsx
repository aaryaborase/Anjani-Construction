import { motion } from "framer-motion";
import logo from "../assets/bg.png";

export default function Hero() {
  // 🔥 Reusable WhatsApp handler
  const openWhatsApp = (message) => {
    const phone = "919922719122";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="h-screen relative flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={logo}
          alt="construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6"
        >
          "On these beams, we’re building dreams"
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          Delivering unmatched quality, rock-solid reliability, and engineering
          excellence across India.
        </motion.p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Get a Quote */}
          <button
            onClick={() =>
              openWhatsApp("Hello! Need quotation for my project.")
            }
            className="bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] transition"
          >
            Get a Quote
          </button>

          {/* Contact Us */}
          <button
            onClick={() => openWhatsApp("Hello! Need help for construction.")}
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
