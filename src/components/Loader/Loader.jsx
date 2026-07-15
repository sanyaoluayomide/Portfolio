import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold text-white tracking-wider">
        AYOMIDE
      </h1>

      <p className="mt-4 text-emerald-400 tracking-[0.3em] uppercase">
        Building with Curiosity...
      </p>
    </motion.div>
  );
};

export default Loader;