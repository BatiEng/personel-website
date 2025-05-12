import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Skills = () => {
  const skills = [
    "React",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Nativewind CSS",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Swift",
    "SwiftUI",
    "JavaScript",
    "Firebase",
    "Java",
    "C++",
    "C#",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "Bootstrap",
    "Express.js",
    "Redux",
    "Git",
    "GitHub",
    "Figma",
    "Postman",
    "Cloudinary",
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const initialSkillsCount = 12;
  const displayedSkills = isExpanded
    ? skills
    : skills.slice(0, initialSkillsCount);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <section
      id="yetenekler"
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
          Yetenekler
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence>
            {displayedSkills.map((skill, index) => (
              <motion.span
                key={skill} // Use skill name as key to keep it stable
                className="bg-gray-800 text-white p-3 rounded-lg text-center font-semibold hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-md"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                {skill}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>

        {skills.length > initialSkillsCount && (
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
                isExpanded ? "Yetenekleri Gizle" : "Daha Fazla Yetenek Göster"
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

export default Skills;
