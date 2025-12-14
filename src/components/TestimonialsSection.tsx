import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Jash's design expertise, attention to detail, and user-first approach make him an exceptional Product Designer. He takes ownership, iterates effectively, and crafts seamless experiences for both mobile and web. His passion for design and problem-solving mindset set him apart",
    name: "Siddharth Kamani",
    role: "Group Product Manager- Navi lending",
    image: "https://framerusercontent.com/images/a2C3ThGGh63I8xWehahNiRQXi8.jpeg",
  },
  {
    quote: "Jash is a skilled Product Designer with strong ownership, problem-solving, and stakeholder engagement. His user-centric approach and data-driven decisions make him a valuable asset. I highly recommend him for roles requiring strategic design thinking and execution.",
    name: "Jay Modi",
    role: "Head of Design- Navi",
    image: "https://framerusercontent.com/images/mw2kwWsQMaLWRQr3stXxGcWKj8.jpeg",
  },
  {
    quote: "Jash has a remarkable ability to break down complex problem statements and advocate for user needs with unwavering dedication. His curiosity about how different segments of data interact sets him apart, making him an invaluable asset—especially given his extensive experience in SaaS and B2B dashboards",
    name: "Divyanshu Kaychap",
    role: "Peer Designer",
    image: "https://framerusercontent.com/images/G8cnPvRERbeQMktVewkoh304uE.jpeg",
  },
  {
    quote: "Jash has great attention to detail, he makes sure to understand what is the business and product context of the feature and what will be the user journey for the use case. He has good finesse in his designs and his focus always is in it being more functional",
    name: "Arpit Rustogi",
    role: "Senior Product Manager- Navi lending",
    image: "https://framerusercontent.com/images/kGMn6HZLbTow7L1eeM898091vM.png",
  },
  {
    quote: "Jash's UX expertise and detailed UI designs consistently delivered seamless user journeys on time. I highly recommend Jash for his outstanding design skills.",
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
