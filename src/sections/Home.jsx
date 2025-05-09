import { motion } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="anasayfa"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] animate-pulse" />
      </div>

      <motion.div
        className="text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          variants={itemVariants}
        >
          Merhaba, Ben Ali Batıkan Öcal
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mt-4 font-medium text-gray-300"
          variants={itemVariants}
        >
          Full Stack Developer | Mobile Developer
        </motion.p>
        <motion.p
          className="text-md md:text-lg mt-2 text-gray-400"
          variants={itemVariants}
        >
          Computer Engineer
        </motion.p>
        <motion.div className="mt-8" variants={itemVariants}>
          <a
            href="#iletisim"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            İletişime Geç
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
