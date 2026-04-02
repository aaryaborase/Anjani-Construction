import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const openWhatsApp = () => {
    const url =
      "https://wa.me/919922719122?text=Hello! Need help for construction.";
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-primary border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* 🔥 Brand */}
        <div>
          <h2 className="text-2xl font-heading font-bold mb-3">
            ANJANI CONSTRUCTION<span className="text-accent"></span>
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Building dreams with precision and trust across India.
          </p>

          {/* WhatsApp CTA */}
          <button
            onClick={openWhatsApp}
            className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-lg text-white hover:scale-105 transition"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </button>
        </div>

        {/* 🔥 Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-accent hover:translate-x-1 inline-block transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔥 Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>
          <div className="space-y-3 text-gray-400 text-sm">
            <p className="flex items-center gap-2 hover:text-accent transition">
              <FaPhone /> +91 9922719122
            </p>

            <p className="flex items-center gap-2 hover:text-accent transition">
              <FaEnvelope /> anjaniconstruction99@gmail.com
            </p>

            <p className="flex items-start gap-2 hover:text-accent transition">
              <FaMapMarkerAlt />
              <span>
                302, A Wing, Gurukrupa Sankul, NH-3, Pimpalgaon Baswant, Nashik
                422209, Maharashtra
              </span>
            </p>
          </div>
        </div>

        {/* 🔥 Google Map */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Our Location</h3>

          <iframe
            src="https://maps.google.com/maps?q=Nashik&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-40 rounded-lg border border-gray-700"
            loading="lazy"
          ></iframe>

          {/* Open in Google Maps */}
          <a
            href="https://maps.google.com/?q=Nashik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm mt-2 inline-block hover:underline"
          >
            View on Google Maps →
          </a>
        </div>
      </div>

      {/* 🔥 Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Anjani Constructions. All rights reserved.
      </div>
    </footer>
  );
}
