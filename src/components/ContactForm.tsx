import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/?text=";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = encodeURIComponent(
      `Hi, I'm ${form.name} (${form.email}). ${form.message}`
    );
    window.open(`${WHATSAPP_URL}${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-lg p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <p className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">
              CONTACT FORM
            </p>
            <h2 className="font-heading text-xl font-bold tracking-wide uppercase">
              Reach Out
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {(["name", "email", "message"] as const).map((field) => (
              <div key={field}>
                <label className="font-heading block text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  {field}
                </label>
                {field === "message" ? (
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-sm border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary resize-none font-body"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full rounded-sm border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary font-body"
                  />
                )}
                {errors[field] && (
                  <p className="mt-1 text-xs text-destructive">{errors[field]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="font-heading w-full inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs font-bold tracking-widest uppercase text-primary-foreground transition-all hover:shadow-[0_0_24px_hsl(168_100%_48%/0.4)] active:scale-[0.97]"
            >
              Send <Send size={14} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
