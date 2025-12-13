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
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mastering some</h2>
          <p className="text-xl text-muted-foreground">
            I move around rectangles (professionally)
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 cursor-pointer card-hover border border-border/50 hover:border-foreground/20"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-lg">
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
