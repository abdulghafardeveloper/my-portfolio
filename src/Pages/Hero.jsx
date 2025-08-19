import { motion } from "framer-motion";
import Abdul from "../assets/Abdul.jpg"; 

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-400">Abdul Ghaffar</span>
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Front-End Developer | React Enthusiast 
      </motion.h2>

      <motion.p
        className="max-w-xl text-gray-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        I build modern, responsive, and interactive websites using React,
        Tailwind CSS, and the latest web technologies.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl bg-gray-700 text-gray-200 font-medium hover:bg-gray-600 transition"
        >
          Contact Me
        </a>
      </motion.div>

      <motion.div
        className="mt-12 w-40 h-40 rounded-full border-4 border-blue-400 shadow-lg overflow-hidden"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={Abdul}
          alt="Abdul Ghaffar"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
