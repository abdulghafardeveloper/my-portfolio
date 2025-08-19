import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" />, glow: "rgba(249,115,22,0.6)"}, 
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" />, glow: "rgba(59,130,246,0.6)"},
     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl" />, glow: "rgba(45,212,191,0.6"}, 
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-5xl" />, glow: "rgba(147,51,234,0.6)"},  
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" />, glow: "rgba(250,204,21,0.6)"}, 
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-5xl" />, glow: "rgba(34,211,238,0.6)"}, 
     ];

  return (
    <section id="skills" className="container mx-auto py-20 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{
              y: -8,
              boxShadow: `0px 8px 25px ${skill.glow}`,
            }}
          >
            
            <motion.div
              className="absolute w-24 h-24 rounded-full blur-2xl"
              style={{ backgroundColor: skill.glow }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ opacity: 0.6, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              whileHover={{ rotate: 10, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10"
            >
              {skill.icon}
            </motion.div>

            <h3 className="text-lg font-semibold mt-4 text-white relative z-10">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
