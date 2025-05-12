import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="hakkimda"
      className="py-16 px-6 md:px-12 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            variants={itemVariants}
          >
            Hakkımda
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-gray-300"
            variants={itemVariants}
          >
            Merhaba! Ben Ali Batıkan Öcal, Ege Üniversitesi Bilgisayar
            Mühendisliği öğrencisiyim ve 3 yılı aşkın süredir web ve mobil
            uygulama geliştirme ile ilgileniyorum. Yazılım yolculuğuma genç
            yaşta başladım, bu süreçte e-ticaret platformlarından çeşitli mobil
            uygulamalara kadar birçok proje geliştirdim.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-relaxed mt-4 text-gray-300"
            variants={itemVariants}
          >
            MERN stack (MongoDB, Express, React, Node.js) ile full-stack
            projeler üretirken, Swift, SwiftUI ve React Native kullanarak iOS ve
            cross-platform mobil uygulamalar geliştiriyorum. Firebase, Redux
            Toolkit, MongoDB ve Cloudinary gibi modern teknolojilerle kullanıcı
            dostu, işlevsel uygulamalar tasarlamaktan keyif alıyorum.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-relaxed mt-4 text-gray-300"
            variants={itemVariants}
          >
            Amacım, gerçek problemlere yenilikçi çözümler sunmak ve kullanıcı
            deneyimini ön planda tutan yazılımlar geliştirmek. Kod yazmadığım
            zamanlarda yeni teknolojileri keşfediyor, GitHub'da projelerimi
            paylaşıyorum. Haydi, birlikte harika projelere imza atalım!
          </motion.p>
          <motion.div className="mt-8" variants={itemVariants}>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              İletişime Geç
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
