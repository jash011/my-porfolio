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
    <section className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Chill</h2>
        <p className="text-xl text-muted-foreground">
          Forever fixing my sleep cycle
        </p>
      </motion.div>

      <div className="relative">
        <div className="flex animate-marquee">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 mx-3 group"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-foreground text-sm font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
