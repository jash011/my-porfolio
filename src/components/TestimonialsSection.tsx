import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Ipsita's design expertise, attention to detail, and user-first approach make her an exceptional Product Designer. She takes ownership, iterates effectively, and crafts seamless experiences for both mobile and web. Her passion for design and problem-solving mindset set her apart",
    name: "Siddharth Kamani",
    role: "Group Product Manager- Navi lending",
    image: "https://framerusercontent.com/images/a2C3ThGGh63I8xWehahNiRQXi8.jpeg",
  },
  {
    quote: "Ipsita is a skilled Product Designer with strong ownership, problem-solving, and stakeholder engagement. Her user-centric approach and data-driven decisions make her a valuable asset. I highly recommend her for roles requiring strategic design thinking and execution.",
    name: "Jay Modi",
    role: "Head of Design- Navi",
    image: "https://framerusercontent.com/images/mw2kwWsQMaLWRQr3stXxGcWKj8.jpeg",
  },
  {
    quote: "Ipsita has a remarkable ability to break down complex problem statements and advocate for user needs with unwavering dedication. Her curiosity about how different segments of data interact sets her apart, making her an invaluable asset—especially given her extensive experience in SaaS and B2B dashboards",
    name: "Divyanshu Kaychap",
    role: "Peer Designer",
    image: "https://framerusercontent.com/images/G8cnPvRERbeQMktVewkoh304uE.jpeg",
  },
  {
    quote: "Ipsita has great attention to detail, she makes sure to understand what is the business and product context of the feature and what will be the user journey for the use case. She has good finesse in her designs and her focus always is in it being more functional",
    name: "Arpit Rustogi",
    role: "Senior Product Manager- Navi lending",
    image: "https://framerusercontent.com/images/kGMn6HZLbTow7L1eeM898091vM.png",
  },
  {
    quote: "Ipsita's UX expertise and detailed UI designs consistently delivered seamless user journeys on time. I highly recommend Ipsita for her outstanding design skills.",
    name: "Kamalkanana",
    role: "SDE3- Navi",
    image: "https://framerusercontent.com/images/IQrGpin2I1IxeSQJ8Qu24cwt0.jpeg",
  },
];

const TestimonialsSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What are they saying</h2>
          <p className="text-xl text-muted-foreground">
            My stakeholders say something about me; hopefully, it's nice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
