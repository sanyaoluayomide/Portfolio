import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Background from "../Background/Background";

const Hero = () => {
  return (
    <section
  id="home"
  className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black text-white px-8 pt-24 pb-24">
    
      <Background />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 h-80 w-80 rounded-full bg-emerald-500 opacity-30 blur-[120px]"></div>

        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500 opacity-20 blur-[140px]"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
  href="#journey"
  className="mt-16 flex flex-col items-center z-10"
  animate={{ y: [0, 8, 0] }}
  transition={{ repeat: Infinity, duration: 1.6 }}
>
  <span className="text-xs uppercase tracking-[0.5em] text-gray-500">
    Scroll
  </span>

  <div className="mt-4 h-12 w-7 rounded-full border border-emerald-400 flex justify-center">
    <motion.div
      className="mt-2 h-2 w-2 rounded-full bg-emerald-400"
      animate={{ y: [0, 14, 0] }}
      transition={{ repeat: Infinity, duration: 1.4 }}
    />
  </div>
</motion.a>

      {/* Hero Content */}
      <motion.div
        className="max-w-5xl mx-auto w-full relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="uppercase tracking-[0.4em] text-sm text-emerald-400 mb-6">
          AYOMIDE SANYAOLU
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold leading-none">
          I BUILD
        </h1>

        <TypeAnimation
          sequence={[
            "Digital Experiences.",
            1500,
            "Modern Interfaces.",
            1500,
            "Creative Solutions.",
            1500,
            "The Future.",
            1500,
          ]}
          wrapper="h2"
          speed={40}
          repeat={Infinity}
          className="text-5xl md:text-7xl font-bold text-white mt-3"
        />

        <p className="mt-10 max-w-2xl text-gray-400 text-lg leading-8">
          Computer Science student who began programming in 2024. I build
          modern, responsive web applications with React while growing toward
          Full-Stack Development and Artificial Intelligence.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href="#projects"
            className="bg-emerald-500 hover:bg-emerald-400 transition px-7 py-4 rounded-xl font-semibold text-black"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white/20 hover:border-emerald-400 hover:text-emerald-400 transition px-7 py-4 rounded-xl"
          >
            Contact Me
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl">
          <div>
            <h3 className="text-4xl font-bold text-emerald-400">
              2024
            </h3>

            <p className="text-gray-500 mt-2">
              Started Programming
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-emerald-400">
              1+
            </h3>

            <p className="text-gray-500 mt-2">
              Years Learning
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-emerald-400">
              1
            </h3>

            <p className="text-gray-500 mt-2">
              Featured Project
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;