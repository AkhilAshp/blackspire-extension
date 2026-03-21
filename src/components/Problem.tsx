import { motion } from "framer-motion";
import { TrendingDown, Eye, BarChart3, Users } from "lucide-react";

const problems = [
  { icon: TrendingDown, title: "INCONSISTENT LEADS", desc: "Erratic pipeline and unpredictable revenue." },
  { icon: Eye, title: "LOW VISIBILITY", desc: "Lost in the noise, unable to capture market share." },
  { icon: BarChart3, title: "POOR CONVERSION", desc: "Engaging prospects, but failing to close at scale." },
  { icon: Users, title: "REFERRAL RELIANCE", desc: "Growth capped by network size and word-of-mouth." },
];

const Problem = () => (
  <section id="problem" className="relative py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
          PROBLEM SECTION
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-wide md:text-5xl text-foreground">
          The System Gap
        </h2>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, boxShadow: "0 0 30px hsl(168 100% 48% / 0.1)" }}
            className="glass rounded-lg p-6 transition-colors"
          >
            <p.icon className="text-glow mb-4" size={28} strokeWidth={1.5} />
            <h3 className="font-heading text-sm font-bold tracking-wide uppercase mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>


    </div>
  </section>
);

export default Problem;
