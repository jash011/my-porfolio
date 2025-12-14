import { motion } from "framer-motion";

const cards = [
  {
    image: "https://framerusercontent.com/images/QARqAzSzsozbd66UZ5g3Ege0.png",
    title: "Bolly baddie with Poo energy- living in 2007",
    subtitle: "Spotify",
    link: "https://open.spotify.com/user/31f5a7kynslc3qpnviul4m2rmgmi",
  },
  {
    image: "https://framerusercontent.com/images/t7TgDUuIekCOxIa6imleB0ak4.webp",
    title: "Recommended-Buzzfeed chief editor turned freelancer",
    subtitle: "Rega Jha",
    link: "https://regajha.com/",
  },
  {
    image: "https://framerusercontent.com/images/k1rHfGJZJB0sq6r7R0Ynxzofv0.png",
    title: "Finds of internet I love and re-visit",
    subtitle: "Re-reads",
    link: "#",
  },
];

const JackOfAllSection = () => {
  return (
    <section className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">Jack of all</h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Comfort in chaos, randomness in routine
          </p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/70 mt-6 max-w-2xl"
          >
            I am all about good outfits, great meals, and killer workouts, with a hint of Bollywood and some Simone de Beauvoir
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -10 }}
              className="group block bg-card rounded-3xl overflow-hidden border border-border/30 hover:border-border/60 transition-colors duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-foreground/80 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">{card.subtitle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JackOfAllSection;
