import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("about");

  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = links.map((link) =>
        document.getElementById(link.id)
      );

      let current = "about";
      sections.forEach((section) => {
        if (
          section &&
          window.scrollY >= section.offsetTop - 120
        ) {
          current = section.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [links]);

  return (
    <header className="sticky top-0 bg-gray-900/80 backdrop-blur-md shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="#top" className="text-xl font-bold text-blue-400">
          MyPortfolio
        </a>
        <ul className="relative flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`relative px-1 transition-colors duration-300 ${
                  active === link.id
                    ? "text-blue-400 font-semibold"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-400 rounded"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
