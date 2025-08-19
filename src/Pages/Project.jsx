import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import port from "../assets/port.png";
import ecom from "../assets/ecom.png";
import Dice from "../assets/Dice.png";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const projects = [
    { 
      title: "Portfolio Website", 
      desc: "Personal site with React + Tailwind", 
      img: port,
      link: "https://yourportfolio.com"
    },
    { 
      title: "E-commerce App", 
      desc: "Shopping cart with discount system", 
      img: ecom,
      link: "https://yourecommerce.com"
    },
    { 
      title: "Dice Game", 
      desc: "React dice game with animations", 
      img: Dice,
      link: "https://yourdicegame.com"
    },
  ];

  return (
    <section id="projects" className="container mx-auto py-20 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="relative group bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
                onClick={() => setSelected(p)}
              >
                View Project
              </motion.button>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-lg w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              
              <button 
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              
              <img src={selected.img} alt={selected.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              
              <h3 className="text-2xl font-semibold mb-2">{selected.title}</h3>
              <p className="text-gray-300 mb-4">{selected.desc}</p>
              <a 
                href={selected.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
              >
                Visit Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
