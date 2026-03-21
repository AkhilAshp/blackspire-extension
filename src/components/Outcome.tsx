import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const before = ["Basic", "Inconsistent", "Random Traffic"];
const after = ["Professional Brand", "Predictable Leads", "Converted Clients"];

const Outcome = () => (
  <section id="outcome" className="py-24 md:py-32">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14"
      >
        <p className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          OUTCOME SECTION
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-wide md:text-5xl text-foreground">
          Proven Results
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-lg p-8"
        >
          <h3 className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-6">Before</h3>
          <ul className="space-y-4">
            {before.map((b) => (
              <li key={b} className="flex items-center gap-3 text-muted-foreground">
                <X size={16} className="text-destructive shrink-0" /> {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-lg p-8 glow-border cyan-glow"
        >
          <h3 className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-glow mb-6">After</h3>
          <ul className="space-y-4">
            {after.map((a) => (
              <li key={a} className="flex items-center gap-3 text-foreground">
                <Check size={16} className="text-glow shrink-0" /> {a}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>


    </div>
  </section>
);

export default Outcome;
