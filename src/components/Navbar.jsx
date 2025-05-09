import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Anasayfa", href: "anasayfa" },
    { name: "Hakkımda", href: "hakkimda" },
    { name: "Projeler", href: "projeler" },
    { name: "Yetenekler", href: "yetenekler" },
    { name: "İletişim", href: "iletisim" },
  ];

  const scrollToSection = (href) => {
    const target = document.querySelector(href);
    console.log("Scrolling to:", href, "Target:", target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Section not found:", href);
    }
  };

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#anasayfa"
              className="text-white hover:text-blue-400"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#anasayfa");
              }}
            >
              <FaCode className="h-8 w-8" />
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white hover:bg-white/10 hover:text-blue-400 px-3 py-2 rounded-md"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => {
                console.log("Menu toggle, isOpen:", !isOpen);
                setIsOpen(!isOpen);
              }}
              className="text-white hover:bg-white/10 p-2 rounded-md"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-800">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white hover:bg-white/10 hover:text-blue-400 block px-3 py-2 rounded-md"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      scrollToSection(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
