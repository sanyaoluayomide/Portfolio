import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1
        className="text-4xl font-bold text-[#111116]"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        ayomide<span className="text-[#1B2A6B]">.</span>
      </h1>

      <p className="mt-4 text-[#111116]/40 tracking-[0.3em] uppercase text-sm font-mono">
        Building with curiosity
      </p>
    </motion.div>
  );
};

export default Loader;
