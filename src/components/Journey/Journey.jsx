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
    <section id="journey" className="bg-white text-[#111116] px-8 py-32">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.3em] text-sm font-mono text-[#1B2A6B] mb-4">
          Journey
        </p>

        <h2
          className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Every developer starts somewhere.
        </h2>

        <p className="text-[#111116]/60 text-lg leading-8 mt-8 max-w-2xl">
          My journey isn't measured only by years, but by continuous learning,
          curiosity, and a commitment to becoming an engineer capable of
          solving real-world problems.
        </p>

        <div className="mt-20 divide-y divide-[#111116]/10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-16 py-12 first:pt-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex md:flex-col gap-4 md:gap-2 items-baseline md:items-start">
                <span
                  className="text-6xl md:text-8xl font-bold text-[#1B2A6B] leading-none"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {item.year}
                </span>
                <span className="text-xs font-mono text-[#111116]/40">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {item.title}
                </h3>

                <p className="text-[#111116]/60 leading-7 text-base md:text-lg mt-4 max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Journey;
