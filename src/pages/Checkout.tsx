import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { ArrowRight } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, subtotal, gst, total } = useCart();
  const [form, setForm] = useState({ name: "", email: "", company: "", address: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/payment");
  };

  if (items.length === 0) {
    navigate("/services");
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-display font-bold mb-8">Checkout</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2">
          <div className="bg-card rounded-2xl border border-border/50 shadow-card p-8">
            <h2 className="font-display font-semibold text-lg mb-6">Billing Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required className="mt-1 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required className="mt-1 rounded-xl" />
                </div>
              </div>
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Acme Inc." value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} required className="mt-1 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="address">Billing Address</Label>
                <Input id="address" placeholder="123 Business Ave, Suite 100" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} required className="mt-1 rounded-xl" />
              </div>
              <Button type="submit" className="w-full gradient-hero text-primary-foreground rounded-xl shadow-glow mt-4">
                Continue to Payment <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </motion.div>
        <div>
          <div className="bg-card rounded-2xl border border-border/50 shadow-card p-6 sticky top-24">
            <h2 className="font-display font-semibold text-lg mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map(item => (
                <div key={item.service.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.service.title} × {item.quantity}</span>
                  <span>${(item.service.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">GST (18%)</span><span>${gst.toFixed(2)}</span></div>
              <div className="border-t pt-3 flex justify-between font-display font-bold text-lg"><span>Total</span><span className="text-gradient">${total.toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
