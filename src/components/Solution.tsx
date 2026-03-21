import { motion } from "framer-motion";
import { Sparkles, Server, Rocket } from "lucide-react";

const solutions = [
  { icon: Sparkles, title: "BRAND & POSITIONING", desc: "Define your unique value to stand above competitors." },
  { icon: Server, title: "TECH INFRASTRUCTURE", desc: "Build a powerful, scalable foundation for operations." },
  { icon: Rocket, title: "GROWTH & ACQUISITION", desc: "Implement engineering-led strategies for new client capture." },
];

const Solution = () => (
  <section id="solution" className="relative py-24 md:py-32">
    <div className="pointer-events-none absolute inset-0 gradient-glow opacity-40" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Our Approach
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-wide md:text-5xl text-foreground">
          "We Don't Offer Services. <br className="hidden md:block" />We Build Growth Systems"
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, boxShadow: "0 0 40px hsl(168 100% 48% / 0.12)" }}
            className="glass rounded-lg p-8 text-center transition-colors"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 glow-border">
              <s.icon className="text-glow" size={26} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-sm font-bold tracking-wide uppercase mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>


    </div>
  </section>
);

export default Solution;
