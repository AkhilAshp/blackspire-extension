import { motion } from "framer-motion";

const RealTalk = () => (
  <section id="real-talk" className="py-24 md:py-32">
    <div className="container max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass p-8 md:p-12 rounded-lg glow-border"
      >
        <p className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          ROI - HUMAN WAY
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-wide md:text-4xl text-foreground mb-10">
          Let’s be practical for a second.
        </h2>
        
        <div className="text-left max-w-md mx-auto space-y-5 mb-10">
          <p className="text-lg text-muted-foreground leading-relaxed">
            If even a few pieces of content bring:
          </p>
          <ul className="space-y-4 pl-4 border-l-2 border-primary/20 ml-2">
            <li className="flex items-center gap-3 text-foreground font-medium pl-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              10–15 people interested
            </li>
            <li className="flex items-center gap-3 text-foreground font-medium pl-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              And 2–3 actually convert
            </li>
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed pt-2">
            You’re already close to covering your cost.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            And this isn’t one post — <br className="hidden sm:block"/>it’s consistent work every week.
          </p>
        </div>

        <div className="inline-block mt-4 rounded-full bg-primary/10 px-8 py-3 border border-primary/20">
          <p className="font-heading text-sm font-bold tracking-wide text-primary">
            Over time, this compounds.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default RealTalk;
