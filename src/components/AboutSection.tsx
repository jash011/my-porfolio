import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left side - Title and image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Digital designer with a{" "}
              <span className="text-muted-foreground">dash of chaos</span>
            </h2>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-72 h-72 rounded-3xl overflow-hidden"
            >
              <img
                src="https://framerusercontent.com/images/4dSt64G5V7y7kmoQDU5ZQJHEnU.jpg"
                alt="Jash Shah"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-xl"
            >
              and I dress like Google calendar ( a busy one !)
            </motion.p>
          </motion.div>

          {/* Right side - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-10 md:pt-12"
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground/90">
              Hey there! I'm a Product Designer by day and a midnight snacker by night. 
              I've spent the last 4+ years designing intuitive experiences for mid-stage 
              startups like Internshala, Innovaccer, and Navi.
            </p>

            <motion.a
              href="https://drive.google.com/file/d/1x7ZQVXgpQtd5yxc0PedoJrhZtdhPo5IP/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 text-xl font-semibold text-foreground group"
            >
              <span className="relative">
                Check my resume here
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.a>

            {/* Companies */}
            <div className="space-y-8 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                  Currently at
                </p>
                <img
                  src="https://framerusercontent.com/images/peYyk6MwKR4qujOhwIAOeUS6ys.svg"
                  alt="Navi"
                  className="h-10 object-contain invert"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
                  Previously with
                </p>
                <div className="flex items-center gap-8">
                  <img
                    src="https://framerusercontent.com/images/RsvjWU3RcK2LYAxUCWIu3i12KU.png"
                    alt="Company"
                    className="h-10 object-contain brightness-0 invert"
                  />
                  <img
                    src="https://framerusercontent.com/images/R210MuQzvmQFPjhZZpAieQ7A68.png"
                    alt="Innovaccer"
                    className="h-10 object-contain brightness-0 invert"
                  />
                  <img
                    src="https://framerusercontent.com/images/X9GkvXYhGRJWDz2zq3iWP3j0KzI.jpeg"
                    alt="Internshala"
                    className="h-10 object-contain rounded"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
