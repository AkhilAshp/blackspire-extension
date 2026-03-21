import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/?text=Hey,%20I%20came%20across%20Blackspire.%20I%20want%20to%20understand%20how%20you%20can%20help%20my%20business%20grow.";

const CTA = () => (
  <section className="py-24 md:py-32">
    <div className="container max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          FINAL CTA
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-wide md:text-5xl text-foreground mb-4">
          "Let's Build Your <br className="hidden md:block"/>Growth System"
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-10">
          We'll show you what's missing and how to fix it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-xs font-bold tracking-widest uppercase text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(168_100%_48%/0.45)] active:scale-[0.97] animate-pulse-glow"
          >
            Book a Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading inline-flex items-center gap-2 rounded-sm glow-border px-7 py-3.5 text-xs font-bold tracking-widest uppercase text-foreground transition-all hover:bg-secondary active:scale-[0.97]"
          >
            Talk on WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
