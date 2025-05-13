import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialCount = 6;

  const projects = [
    {
      title: "halisahabul: Halısaha Kiralama Web sitesi",
      description:
        "Kullanıcıların 7/24 online olarak halı saha kiralamasına olanak tanıyan, MERN Stack (MongoDB, Express.js, React, Node.js) ile geliştirilmiş modern bir web uygulaması. Gerçek zamanlı rezervasyon yönetimi, kullanıcı doğrulama, anlık bildirimler ve sezgisel bir arayüz sunar.",
      url: "https://halisahabul.com",
    },
    {
      title: "Hava Durumu Uygulaması (SwiftUI)",
      description:
        "SwiftUI ile inşa edilmiş, modern yenilikçi bir, hava durumu uygulaması. Kullanıcıların hava durumu bilgilerini hızlı ve kolay bir şekilde almasını sağlar.",
      url: "https://github.com/BatiEng/Weather-App",
    },
    {
      title: "CineTrack: React Native Film Uygulaması",
      description:
        "Kullanıcıların en güncel filmleri keşfedebileceği, detaylı film bilgilerini görüntüleyebileceği ve favori listesi oluşturabileceği modern bir mobil uygulama. React Native ile geliştirilen bu uygulama, sezgisel arayüzü ve API tabanlı veri çekme özellikleriyle sinema severler için ideal bir deneyim sunar.",
      url: "https://github.com/BatiEng/movie-app",
    },
    {
      title: "React ve MongoDB ile E-ticaret Uygulaması",
      description:
        "Kullanıcı kimlik doğrulama, ürün yönetimi ve güvenli ödeme entegrasyonu içeren tam özellikli bir e-ticaret platformu.",
      url: "https://github.com/BatiEng/e-commerce-full-stack",
    },
    {
      title: "Cryptobase: Kripto Para Takip Uygulaması",
      description:
        "Kullanıcıların kripto para birimlerini takip etmelerini sağlayan, gerçek zamanlı fiyat güncellemeleri ve grafikler sunan bir uygulama.",
      url: "https://github.com/BatiEng/Crypto-App",
    },
    {
      title: "Borsatube: Borsa Eğitimi için Yeni Bir Platform",
      description:
        "Borsatube.com, borsa ve yatırım dünyasına adım atmak isteyenler için video dersler, analiz araçları ve topluluk desteği sunan bir eğitim platformudur.",
      url: "https://borsatube.com",
    },
    {
      title: "ToDo (Yapılacaklar Listesi) Uygulaması",
      description:
        "Firebase ile entegre edilmiş, kullanıcıların görevlerini yönetmelerine olanak tanıyan basit ve etkili bir yapılacaklar listesi uygulaması.",
      url: "https://github.com/BatiEng/ToDoAppWithFirebase",
    },
  ];

  const displayedProjects = isExpanded
    ? projects
    : projects.slice(0, initialCount);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="projeler"
      className="py-16 px-6 md:px-12 bg-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projeler
        </motion.h2>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.li
                key={project.title}
                className="relative bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between min-h-[300px]"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-all duration-300 self-start"
                >
                  Projeyi Gör
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {projects.length > initialCount && (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={
                isExpanded ? "Projeleri Gizle" : "Daha Fazla Proje Göster"
              }
              aria-expanded={isExpanded}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 motion-reduce:transform-none shadow-lg"
            >
              {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
