import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png"; // 👈 adjust name if different

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-accent z-[60] transition-all"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-black/60 shadow-lg py-3 border-b border-white/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* 🔥 Logo + Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Anjani Construction"
              className="h-10 w-auto object-contain"
            />
            <span className="text-lg md:text-xl font-heading font-bold tracking-wide">
              ANJANI CONSTRUCTION
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center font-medium">
            {navLinks.map((link) => (
              <li key={link.name} className="group">
                <Link
                  to={link.path}
                  className={`relative transition ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-white"
                  }`}
                >
                  {link.name}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300 ${
                      location.pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}

            {/* CTA */}
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919922719122?text=Hello! Need quotation for my project.",
                  "_blank",
                )
              }
              className="bg-accent text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] transition"
            >
              Get a Quote
            </button>
          </ul>

          {/* Mobile Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full backdrop-blur-lg bg-black/80 transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 py-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919922719122?text=Hello! Need quotation for my project.",
                  "_blank",
                )
              }
              className="bg-accent text-black px-6 py-2 rounded-lg font-semibold"
            >
              Get a Quote
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}
