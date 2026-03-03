import { useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";
import ScrollFadeIn from "./ScrollFadeIn";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

4;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:vivek954sahu@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <div className="w-16 h-1 gradient-bg rounded mx-auto mb-4" />
          <p className="text-muted-foreground text-center max-w-md mx-auto mb-12">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <ScrollFadeIn delay={0.1}>
            <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
              {[
                {
                  icon: FiMail,
                  label: "Email",
                  value: "vivek954sahu@gmail.com",
                  href: "mailto:vivek954sahu@gmail.com",
                },
                {
                  icon: FaWhatsapp,
                  label: "WhatsApp",
                  value: "Chat on WhatsApp",
                  href: "https://wa.me/7698238008",
                },
                {
                  icon: FaLinkedinIn,
                  label: "LinkedIn",
                  value: "Connect on LinkedIn",
                  href: "https://linkedin.com/vivek-sahu-335258297",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center glow-hover text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-6 space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-secondary text-foreground rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-secondary text-foreground rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-secondary text-foreground rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <button
                type="submit"
                className="w-full gradient-bg text-primary-foreground py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow"
              >
                <FiSend size={16} /> Send Message
              </button>
            </form>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
