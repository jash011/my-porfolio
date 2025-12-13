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
    <section className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Jack of all</h2>
          <p className="text-xl text-muted-foreground">
            Comfort in chaos, randomness in routine
          </p>
          <p className="text-lg text-foreground/80 mt-4">
            I am all about good outfits, great meals, and killer workouts, with a hint of Bollywood and some Simone de Beauvoir
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block bg-card rounded-2xl overflow-hidden card-hover"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
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
