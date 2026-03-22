import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/?text=Hey,%20I%20came%20across%20Blackspire.%20I%20want%20to%20understand%20how%20you%20can%20help%20my%20business%20grow.";

const pillTags = ["Mobility", "Technology", "Infrastructure", "Health", "Innovation"];

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
    <div className="container relative z-10 py-20 md:py-32">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >


          <div className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 animate-pulse-glow">
            You focus on your work. We’ll handle the growth.
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl text-foreground max-w-3xl">
            You don’t need more effort. <br className="hidden md:block"/>
            <span className="text-gradient">You need a better system.</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl font-body max-w-2xl mx-auto">
            Most businesses don’t struggle because of what they offer — they struggle because people don’t see it, trust it, or act on it. That’s what we solve.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#solution"
              className="font-heading inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-xs font-bold tracking-widest uppercase text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(168_100%_48%/0.45)] active:scale-[0.97] animate-pulse-glow"
            >
              Get My Growth Plan
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading inline-flex items-center gap-2 rounded-sm glow-border px-7 py-3.5 text-xs font-bold tracking-widest uppercase text-foreground transition-all hover:bg-secondary active:scale-[0.97]"
            >
              Chat on WhatsApp
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 text-sm font-heading font-medium tracking-wider text-muted-foreground"
          >
            Only working with a few businesses at a time.
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
