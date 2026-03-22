import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "UNDERSTAND", desc: "We understand what you’re doing." },
  { num: "2", title: "FIX", desc: "We fix how it’s presented." },
  { num: "3", title: "BUILD", desc: "We build consistency." },
  { num: "4", title: "IMPROVE", desc: "We improve what works." },
];

const Process = () => (
  <section id="process" className="py-24 md:py-32">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <p className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          PROCESS
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-wide md:text-5xl text-foreground">
          Nothing complicated.
        </h2>
      </motion.div>

      <div className="relative space-y-12">
        <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden md:block" />

        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-6 items-start"
          >
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 glow-border">
              <span className="font-mono-data text-sm font-bold text-glow">{s.num}</span>
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold tracking-wide uppercase mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mt-16"
      >
        <p className="text-lg md:text-xl text-muted-foreground font-medium">
          No guesswork. Just clear steps.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Process;
