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


          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl text-foreground max-w-3xl">
            "Turn Your Business Into a Consistent <span className="text-gradient">Client-Generating System"</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl font-body">
            We engineer high-performance growth systems for ambitious businesses, moving beyond generic services to deliver predictable acquisition.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#solution"
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 text-sm font-heading font-medium tracking-wider text-muted-foreground"
          >
            Limited onboarding — 6 businesses per cycle
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
