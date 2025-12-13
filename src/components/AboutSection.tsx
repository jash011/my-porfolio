import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Digital designer with a{" "}
              <span className="text-muted-foreground">dash of chaos</span>
            </h2>
            
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/4dSt64G5V7y7kmoQDU5ZQJHEnU.jpg"
                alt="Ipsita Bajpai"
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-muted-foreground text-lg">
              and I dress like Google calendar ( a busy one !)
            </p>
          </motion.div>

          {/* Right side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/90">
              Hey there! I'm a Product Designer by day and a midnight snacker by night. 
              I've spent the last 4+ years designing intuitive experiences for mid-stage 
              startups like Internshala, Innovaccer, and Navi.
            </p>

            <a
              href="https://drive.google.com/file/d/1x7ZQVXgpQtd5yxc0PedoJrhZtdhPo5IP/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xl font-semibold text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Check my resume here
            </a>

            {/* Companies */}
            <div className="space-y-4 pt-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Currently at
                </p>
                <img
                  src="https://framerusercontent.com/images/peYyk6MwKR4qujOhwIAOeUS6ys.svg"
                  alt="Navi"
                  className="h-8 object-contain invert"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Previously with
                </p>
                <div className="flex items-center gap-6">
                  <img
                    src="https://framerusercontent.com/images/RsvjWU3RcK2LYAxUCWIu3i12KU.png"
                    alt="Company"
                    className="h-8 object-contain brightness-0 invert"
                  />
                  <img
                    src="https://framerusercontent.com/images/R210MuQzvmQFPjhZZpAieQ7A68.png"
                    alt="Innovaccer"
                    className="h-8 object-contain brightness-0 invert"
                  />
                  <img
                    src="https://framerusercontent.com/images/X9GkvXYhGRJWDz2zq3iWP3j0KzI.jpeg"
                    alt="Internshala"
                    className="h-8 object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
