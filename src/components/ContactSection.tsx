import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center py-24 px-6 md:px-12 lg:px-24 bg-secondary/20">
      <div className="max-w-5xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-10"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl text-muted-foreground"
          >
            Looking for my next opportunity!
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
          >
            Let's work together
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8"
          >
            <motion.a
              href="https://drive.google.com/file/d/1x7ZQVXgpQtd5yxc0PedoJrhZtdhPo5IP/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-semibold text-foreground relative group"
            >
              <span>Resume</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
            </motion.a>
            <span className="hidden md:block text-muted-foreground text-2xl">•</span>
            <motion.a
              href="https://www.linkedin.com/in/ipsita-bajpai/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-semibold text-foreground relative group"
            >
              <span>Linkedin</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
            </motion.a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-muted-foreground"
          >
            Reach out to me @{" "}
            <motion.a
              href="mailto:jashshah@email.com"
              whileHover={{ scale: 1.02 }}
              className="text-foreground relative group inline-block"
            >
              <span>jashshah@email.com</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
            </motion.a>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="pt-12"
          >
            <motion.img
              src="https://framerusercontent.com/images/vSr2F8oattqbR1L5xcm9SLVIPc.png"
              alt="Memoji"
              className="w-36 h-36 mx-auto"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
