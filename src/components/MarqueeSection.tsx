import { motion } from "framer-motion";

const images = [
  {
    src: "https://framerusercontent.com/images/COMGRX0hNELkprfmDCcgHM2gA8.jpg",
    caption: "Once in a lifetime concert happens once",
  },
  {
    src: "https://framerusercontent.com/images/MwVOaO1tOSJSqg2kOZNxvOADxxg.jpg",
    caption: "Pretend to read mostly",
  },
  {
    src: "https://framerusercontent.com/images/bd2riZSlg6wgJVrTopnZAIGdmlA.jpeg",
    caption: "Random bookstores with niche stories",
  },
  {
    src: "https://framerusercontent.com/images/rxmvEWZChli0P4ecG9Eqw05S6U.jpg",
    caption: "Expensive coffee with side of daydreaming, always",
  },
  {
    src: "https://framerusercontent.com/images/qmJUw0g9ofPZb5vSeD4CtP1B0mE.jpeg",
    caption: "Food that looks great, tastes great seldom",
  },
];

const MarqueeSection = () => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-24 overflow-hidden bg-secondary/20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16 px-6 md:px-12 lg:px-24"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">Chill</h2>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Forever fixing my sleep cycle
        </p>
      </motion.div>

      <div className="relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex animate-marquee"
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex-shrink-0 w-80 mx-4 group"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-foreground text-base font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
