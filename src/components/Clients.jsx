import { clients } from "../data/clients";

export default function Clients() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
          Our Trusted Clients
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We take pride in working with clients who trust our quality,
          reliability, and commitment to excellence.
        </p>

        {/* 🔥 Clients Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-primary border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center transition duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-xl group"
            >
              {/* Logo */}
              <div className="h-16 flex items-center justify-center mb-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full object-contain grayscale group-hover:grayscale-0 transition duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
