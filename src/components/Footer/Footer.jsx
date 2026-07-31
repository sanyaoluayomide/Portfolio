import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#111116]/10 py-16 px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2
              className="text-2xl font-bold text-[#111116]"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              ayomide<span className="text-[#1B2A6B]">.</span>
            </h2>

            <p className="mt-3 text-[#111116]/50 max-w-md leading-7">
              Computer Science Student — Frontend Developer, aspiring
              Full-Stack & AI Engineer.
            </p>
          </div>

          <div className="flex gap-8 text-[#111116]/60">
            <a href="#home" className="hover:text-[#1B2A6B] transition-colors">
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-[#1B2A6B] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-[#1B2A6B] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="h-px bg-[#111116]/10 my-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-[#111116]/40">
          <p>
            © {new Date().getFullYear()} Ayomide Sanyaolu. All rights
            reserved.
          </p>

          <p>Built with React • Tailwind CSS • Framer Motion</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
