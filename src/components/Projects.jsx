import { projects } from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";

// 🔥 Import modules
import { Navigation, Autoplay } from "swiper/modules";

// 🔥 Import styles
import "swiper/css";
import "swiper/css/navigation";

export default function Projects() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
          Featured Projects
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation // 🔥 arrows enabled
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={projects.length > 3}
          grabCursor={true} // 🔥 better UX (drag feel)
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects?.map((project, index) => {
            if (!project?.image) return null;

            return (
              <SwiperSlide key={`${project.name}-${index}`}>
                <div className="relative group rounded-xl overflow-hidden">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div>
                      <h3 className="text-xl font-bold">{project.name}</h3>
                      <p className="text-accent">{project.category}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
