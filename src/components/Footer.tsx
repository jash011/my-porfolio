import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-10 px-6 md:px-12 lg:px-24 border-t border-border/30"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-6"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-muted-foreground font-medium">Available</span>
          </span>
          <span className="text-sm text-muted-foreground">March</span>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-muted-foreground text-center"
        >
          Work still in progress - Last updated Mar, 2025
        </motion.p>

        <motion.img
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          src="https://framerusercontent.com/images/nyyVG7N6UOz2JLw3yIOumT1BsI.svg"
          alt="Framer"
          className="h-6 opacity-50 invert"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
