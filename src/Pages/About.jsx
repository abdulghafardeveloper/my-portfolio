import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container mx-auto py-20 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-gray-300 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        I'm a passionate front-end developer with expertise in React, Tailwind, and modern UI/UX practices. 
        I enjoy building clean, responsive, and user-friendly websites that make an impact.
      </motion.p>
    </section>
  );
}
