import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      label: "E-posta",
      value: "alibatikan@gmail.com",
      icon: <FaEnvelope className="text-blue-400" />,
      link: "mailto:alibatikan@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/BatiEng",
      icon: <FaGithub className="text-blue-400" />,
      link: "https://github.com/BatiEng",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ali-batıkan-öcal",
      icon: <FaLinkedin className="text-blue-400" />,
      link: "https://linkedin.com/in/ali-batıkan-öcal",
    },
  ];

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
  };

  return (
    <section
      id="iletisim"
      className="py-16 px-6 md:px-12 bg-gray-900 text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          İletişim
        </motion.h2>
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center space-x-4"
              variants={itemVariants}
            >
              <span className="text-2xl">{info.icon}</span>
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {info.value}
              </a>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="mt-10" variants={itemVariants}>
          <p className="text-gray-400 mb-4">
            Bir proje fikriniz mi var? Hadi konuşalım!
          </p>
          <a
            href="mailto:alibatikan@gmail.com"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Mesaj Gönder
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
