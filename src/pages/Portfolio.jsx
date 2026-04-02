import { useState } from "react";
import { projects } from "../data/projects";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", "Residential", "Commercial", "Infrastructure"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6">
          Our Portfolio
        </h1>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Explore our completed projects across residential, commercial, and
          infrastructure sectors.
        </p>

        {/* 🔥 Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full transition ${
                filter === cat
                  ? "bg-accent text-black"
                  : "bg-secondary text-gray-300 hover:bg-accent hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔥 Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(project)}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="text-accent text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-3xl w-full px-4">
              <img
                src={selectedImage.image}
                alt=""
                className="rounded-lg w-full"
              />
              <h3 className="text-center mt-4 text-xl font-bold">
                {selectedImage.name}
              </h3>
              <p className="text-center text-accent">
                {selectedImage.category}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
