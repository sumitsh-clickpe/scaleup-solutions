import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search, FileText, Share2, Target, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
};

const serviceOverview = [
  { icon: "Search", title: "SEO Optimization", desc: "Rank higher and drive organic traffic with data-driven strategies." },
  { icon: "FileText", title: "Content Marketing", desc: "Compelling content that converts visitors into loyal customers." },
  { icon: "Share2", title: "Social Media", desc: "Build brand awareness and engagement across all platforms." },
  { icon: "Target", title: "Paid Advertising", desc: "Maximize ROI with targeted ad campaigns on every channel." },
];

const testimonials = [
  { name: "Sarah Chen", role: "CMO, TechVault", text: "MargCred transformed our digital presence. Our organic traffic grew 340% in just 6 months.", rating: 5 },
  { name: "Marcus Johnson", role: "Founder, GrowthLab", text: "The paid ads campaigns delivered 5x ROAS consistently. Best marketing investment we've made.", rating: 5 },
  { name: "Emily Rodriguez", role: "VP Marketing, CloudBase", text: "Their content strategy positioned us as thought leaders. Inbound leads tripled.", rating: 5 },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Landing = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Scale Your Business with{" "}
            <span className="text-gradient">Expert Marketing Solutions</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Data-driven advertising services that deliver measurable growth. From SEO to paid campaigns, we help B2B companies dominate their market.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-hero text-primary-foreground shadow-glow text-base px-8 rounded-xl hover:opacity-90 transition-opacity">
              <Link to="/signup">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl text-base px-8">
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold mb-4">Everything You Need to Grow</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto">Comprehensive marketing solutions tailored for ambitious B2B companies.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceOverview.map(s => (
            <motion.div key={s.title} variants={fadeUp} className="gradient-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-shadow duration-300 border border-border/50 group">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-accent-foreground mb-4 group-hover:scale-110 transition-transform">
                {iconMap[s.icon]}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["500+", "Clients Served"], ["340%", "Avg Traffic Growth"], ["₹2Cr+", "Ad Spend Managed"], ["98%", "Client Retention"]].map(([stat, label]) => (
            <motion.div key={label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">{stat}</div>
              <div className="text-sm text-muted-foreground mt-1">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
          Trusted by Industry Leaders
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <motion.div key={t.name} variants={fadeUp} className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="text-foreground mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-display font-semibold text-sm">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative gradient-hero rounded-3xl p-12 md:p-16 text-center shadow-glow overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-fuchsia-500/90" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">Ready to Accelerate Your Growth?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Join 500+ companies that have transformed their marketing with MargCred.</p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-xl text-base px-8">
              <Link to="/signup">Start Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-display font-bold text-lg text-gradient mb-3">MargCred</div>
            <p className="text-sm text-muted-foreground">Data-driven advertising services that deliver measurable growth for B2B companies.</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link to="/login" className="hover:text-primary transition-colors">Login</Link>
              <Link to="/signup" className="hover:text-primary transition-colors">Sign Up</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Legal</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/refund" className="hover:text-primary transition-colors">Refund Policy</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Contact</h4>
            <p className="text-sm text-muted-foreground">+91 7965258132</p>
          </div>
        </div>
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 MargCred. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/refund" className="hover:text-primary transition-colors">Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Landing;
