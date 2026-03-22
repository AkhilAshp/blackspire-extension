import { motion } from "framer-motion";

const Scarcity = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-lg text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass p-8 rounded-lg glow-border"
      >
        <p className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Scarcity
        </p>
        <h2 className="font-heading text-xl md:text-2xl font-bold tracking-wide text-foreground mb-8 max-w-sm mx-auto leading-relaxed">
          We keep this limited. We only work with a small number of businesses at a time so we can actually focus and not just "deliver content".
        </h2>

        <div className="relative h-3 rounded-full bg-secondary overflow-hidden mb-6">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 left-0 rounded-full bg-primary"
            style={{ boxShadow: "0 0 16px hsl(168 100% 48% / 0.5)" }}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground font-mono-data gap-2">
          <span>3 slots remaining</span>
          <span className="hidden sm:inline text-border">•</span>
          <span>Limited availability</span>
          <span className="hidden sm:inline text-border">•</span>
          <span>Next cohort start: [Future Date]</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Scarcity;
