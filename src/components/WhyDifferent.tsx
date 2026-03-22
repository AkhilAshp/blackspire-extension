import { motion } from "framer-motion";

const differences = [
  { num: "01", title: "ANALYZE", desc: "Look at what’s working" },
  { num: "02", title: "OPTIMIZE", desc: "Improve it" },
  { num: "03", title: "SYSTEMIZE", desc: "Build a repeatable system" },
];

const WhyDifferent = () => (
  <section id="why-different" className="py-24 md:py-32">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <p className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          WHY THIS IS DIFFERENT
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-wide md:text-5xl text-foreground mb-6">
          Most people just post and hope it works. <br className="hidden md:block"/>
          We don't do that.
        </h2>
        <p className="text-lg text-muted-foreground">
          We:
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {differences.map((d, i) => (
          <motion.div
            key={d.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-lg p-8 relative overflow-hidden glow-border"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <span className="font-heading text-6xl font-bold">{d.num}</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-heading text-sm font-bold tracking-wide uppercase mb-3 text-glow">{d.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyDifferent;
