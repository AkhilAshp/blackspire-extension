import { motion } from "framer-motion";
import { TrendingDown, Eye, BarChart3, Users } from "lucide-react";

const problems = [
  { icon: TrendingDown, title: "INCONSISTENT LEADS", desc: "Some weeks you get clients, some weeks nothing." },
  { icon: Eye, title: "LOW VISIBILITY", desc: "People check your page, but don’t reach out." },
  { icon: Users, title: "REFERRAL RELIANCE", desc: "You’re mostly depending on referrals." },
  { icon: BarChart3, title: "NO CONSISTENCY", desc: "You’re trying things, but nothing feels consistent." },
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
          If this feels familiar…
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mt-16"
      >
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          It’s not that you’re doing something wrong. <br className="hidden md:block"/>
          It’s just that there’s no proper system yet.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Problem;
