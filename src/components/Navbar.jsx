import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Anasayfa", href: "#anasayfa" },
    { name: "Hakkımda", href: "#hakkimda" },
    { name: "Projeler", href: "#projeler" },
    { name: "Yetenekler", href: "#yetenekler" },
    { name: "İletişim", href: "#iletisim" },
  ];

  // Animation variants for desktop menu items
  const desktopItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  // Animation variants for mobile menu items
  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Icon */}
          <div className="flex-shrink-0">
            <a
              href="#anasayfa"
              className="text-white hover:text-blue-400 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FaCode className="h-8 w-8" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={desktopItemVariants}
                >
                  <a
                    href={item.href}
                    className="text-white hover:bg-white/10 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(item.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.li key={item.name} variants={mobileItemVariants}>
                    <a
                      href={item.href}
                      className="text-white hover:bg-white/10 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        document
                          .querySelector(item.href)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
