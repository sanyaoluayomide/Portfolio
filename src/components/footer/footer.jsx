import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          <div>
            <h2 className="text-3xl font-bold tracking-wide">
              AYOMIDE SANYAOLU
            </h2>

            <p className="mt-3 text-gray-400 max-w-md leading-7">
              Computer Science Student • Frontend Developer • Aspiring
              Full-Stack & AI Engineer.
            </p>
          </div>

          <div className="flex gap-8 text-gray-400">

            <a
              href="#home"
              className="hover:text-emerald-400 transition"
            >
              Home
            </a>

            <a
              href="#projects"
              className="hover:text-emerald-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-emerald-400 transition"
            >
              Contact
            </a>

          </div>

        </div>

        <div className="h-px bg-white/10 my-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Ayomide Sanyaolu. All rights reserved.
          </p>

          <p>
            Built with React • Tailwind CSS • Framer Motion
          </p>

        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;