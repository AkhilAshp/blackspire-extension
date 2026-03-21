import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/?text=Hey,%20I%20came%20across%20Blackspire.%20I%20want%20to%20understand%20how%20you%20can%20help%20my%20business%20grow.";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <span className="font-heading text-sm font-bold tracking-widest uppercase text-glow md:text-base">
          Blackspire Pvt. Ltd. – External Division
        </span>
        <div className="hidden lg:flex items-center gap-8">
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading rounded-sm bg-primary px-5 py-2 text-xs font-bold tracking-widest uppercase text-primary-foreground transition-all hover:shadow-[0_0_24px_hsl(168_100%_48%/0.4)] active:scale-[0.97]"
        >
          Book a Call
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
