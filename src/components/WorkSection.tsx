import { motion } from "framer-motion";

const projects = [
  {
    title: "User access management",
    description: "An MVP flow for external users to invite users, manage roles and much more",
    tags: ["PRODUCT DESIGN", "RESEARCH"],
  },
  {
    title: "Boost conversion for Navi mutual funds",
    description: "Small changes that bring big wins",
    tags: ["PRODUCT DESIGN", "RESEARCH"],
  },
  {
    title: "Manage eligibility for personal loan customers",
    description: "How we reimagined and converted an offline relationship to digital",
    tags: ["PRODUCT DESIGN", "RESEARCH"],
  },
];

const WorkSection = () => {
  return (
    <section className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">Mastering some</h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            I move around rectangles (professionally)
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group bg-card rounded-3xl p-8 md:p-10 cursor-pointer border border-border/30 hover:border-border/60 transition-all duration-300"
            >
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + tagIndex * 0.1 }}
                    className="text-xs font-medium px-4 py-2 bg-secondary/50 rounded-full text-muted-foreground tracking-wider"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-lg md:text-xl">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
