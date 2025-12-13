import { motion } from "framer-motion";
import RotatingBadge from "./RotatingBadge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Main name */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[12vw] md:text-[10vw] font-extrabold text-foreground leading-none tracking-tighter text-center"
      >
        Ipsita Bajpai
      </motion.h1>

      {/* Rotating badge at bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-12"
      >
        <RotatingBadge text="OPEN TO WORK IN 30 DAYS • " />
      </motion.div>
    </section>
  );
};

export default HeroSection;
