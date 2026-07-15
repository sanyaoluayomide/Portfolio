import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    description:
      "Started studying Computer Science at Redeemer's University. Discovered my passion for software development and began learning HTML, CSS, JavaScript, Git, and React while building my first web applications.",
  },
  {
    year: "2025",
    title: "Building Foundations",
    description:
      "Earned Oracle Cloud certifications, strengthened my React and frontend development skills, explored UI/UX principles, version control with GitHub, and began creating polished, responsive web applications.",
  },
  {
    year: "2026",
    title: "Growing Beyond Frontend",
    description:
      "Expanding into backend development with Node.js, learning APIs, data analytics, and artificial intelligence while building projects that prepare me for full-stack engineering and global internship opportunities.",
  },
];

const Journey = () => {
  return (
    <section
      id="journey"
      className="bg-black text-white px-8 py-32"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.4em] text-emerald-400 mb-4">
          Journey
        </p>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Every developer starts somewhere.
        </h2>

        <p className="text-gray-400 text-lg leading-8 mt-8 max-w-3xl">
          My journey isn't measured only by years, but by continuous learning,
          curiosity, and a commitment to becoming an engineer capable of solving
          real-world problems.
        </p>

        <div className="relative mt-24">

          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 via-emerald-400/40 to-transparent"></div>

          <div className="space-y-20">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative pl-20"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-emerald-500 border-4 border-black shadow-[0_0_25px_rgba(16,185,129,0.5)]"></div>

                <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase">
                  {item.year}
                </span>

                <h3 className="text-3xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-8 text-lg mt-5 max-w-3xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Journey;