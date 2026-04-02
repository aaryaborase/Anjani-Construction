import { FaBuilding, FaUsers, FaAward, FaShieldAlt } from "react-icons/fa";
import logo from "../assets/bg.png";
export default function About() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6">
          About Us
        </h1>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          At Anjani Constructions, we don't just build structures—we build
          trust, reliability, and long-lasting relationships. With years of
          experience in civil construction, we are committed to delivering
          excellence in every project we undertake.
        </p>

        {/* 🔥 Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Our Story & Mission
            </h2>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Founded with a vision to redefine construction standards, Anjani
              Constructions has grown into a trusted name across residential,
              commercial, and infrastructure projects. Our journey is driven by
              innovation, quality craftsmanship, and a deep commitment to client
              satisfaction.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our mission is to deliver world-class construction solutions using
              advanced engineering techniques, sustainable practices, and a
              customer-first approach that ensures transparency and reliability.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src={logo}
              alt="Anjani Construction Logo"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* 🔥 Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="bg-secondary p-6 rounded-xl text-center hover:border-accent border border-gray-700 transition">
            <FaBuilding className="text-accent text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">15+ Years Experience</h3>
          </div>

          <div className="bg-secondary p-6 rounded-xl text-center hover:border-accent border border-gray-700 transition">
            <FaUsers className="text-accent text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">250+ Projects Completed</h3>
          </div>

          <div className="bg-secondary p-6 rounded-xl text-center hover:border-accent border border-gray-700 transition">
            <FaAward className="text-accent text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">100% Client Satisfaction</h3>
          </div>

          <div className="bg-secondary p-6 rounded-xl text-center hover:border-accent border border-gray-700 transition">
            <FaShieldAlt className="text-accent text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">Top Safety Standards</h3>
          </div>
        </div>

        {/* 🔥 Trust Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "ISO Certified Quality Management",
            "Fully Licensed & Insured",
            "Award-Winning Safety Protocols",
            "Government Approved Contractors",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-lg border border-gray-700 hover:border-accent transition flex items-center gap-3"
            >
              <span className="text-accent text-xl">✔</span>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
