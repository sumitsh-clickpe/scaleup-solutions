import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ShoppingCart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart, services, type Service } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const categories = ["All", "SEO", "Content", "Social Media", "Paid Ads"];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const Services = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceSort, setPriceSort] = useState<"" | "asc" | "desc">("");
  const { addToCart, items } = useCart();
  const { toast } = useToast();

  const filtered = services
    .filter(s => (category === "All" || s.category === category) && s.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => priceSort === "asc" ? a.price - b.price : priceSort === "desc" ? b.price - a.price : 0);

  const isInCart = (id: string) => items.some(i => i.service.id === id);

  const handleAdd = (service: Service) => {
    addToCart(service);
    toast({ title: "Added to cart", description: `${service.title} has been added.` });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-display font-bold mb-2">Marketing Services</h1>
        <p className="text-muted-foreground">Choose the perfect packages to accelerate your growth.</p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search services..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10 rounded-xl" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(c => (
            <Button key={c} variant={category === c ? "default" : "outline"} size="sm" onClick={() => setCategory(c)}
              className={`rounded-xl text-xs ${category === c ? "gradient-hero text-primary-foreground" : ""}`}>
              {c}
            </Button>
          ))}
        </div>
        <select value={priceSort} onChange={e => setPriceSort(e.target.value as any)}
          className="bg-card border border-border rounded-xl px-3 py-2 text-sm text-foreground">
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Grid */}
      <motion.div initial="hidden" animate="visible" variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(s => (
          <motion.div key={s.id} variants={fadeUp} className="bg-card rounded-2xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 flex flex-col overflow-hidden group">
            <div className="gradient-hero p-6 flex items-center justify-center">
              <span className="text-3xl font-display font-bold text-primary-foreground">₹{s.price.toLocaleString("en-IN")}</span>
              <span className="text-primary-foreground/70 text-sm ml-1">/mo</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs font-medium text-primary bg-accent rounded-full px-3 py-1 w-fit mb-3">{s.category}</span>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{s.description}</p>
              <ul className="space-y-1.5 mb-6">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-success shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button onClick={() => handleAdd(s)} className={`w-full rounded-xl ${isInCart(s.id) ? "bg-success text-success-foreground" : "gradient-hero text-primary-foreground shadow-glow"}`}>
                {isInCart(s.id) ? <><CheckCircle className="w-4 h-4 mr-2" /> In Cart</> : <><ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart</>}
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No services match your search.</p>
        </div>
      )}
    </div>
  );
};

export default Services;
