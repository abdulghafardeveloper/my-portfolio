import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto py-20 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
      <motion.form
        className="max-w-lg mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg space-y-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          type="submit"
          className="w-full bg-yellow-400 text-black font-medium py-3 rounded-lg hover:bg-yellow-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
