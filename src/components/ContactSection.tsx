import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-lg text-muted-foreground">
            Looking for my next opportunity!
          </p>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Let's work together
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <a
              href="https://drive.google.com/file/d/1x7ZQVXgpQtd5yxc0PedoJrhZtdhPo5IP/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Resume
            </a>
            <span className="hidden md:block text-muted-foreground">•</span>
            <a
              href="https://www.linkedin.com/in/ipsita-bajpai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Linkedin
            </a>
          </div>

          <p className="text-lg text-muted-foreground">
            Reach out to me @{" "}
            <a
              href="mailto:ipsitabajpai26@gmail.com"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              ipsitabajpai26@gmail.com
            </a>
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8"
          >
            <img
              src="https://framerusercontent.com/images/vSr2F8oattqbR1L5xcm9SLVIPc.png"
              alt="Memoji"
              className="w-32 h-32 mx-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
