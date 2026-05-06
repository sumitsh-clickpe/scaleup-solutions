import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const fmt = (n: number) => `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const Cart = () => {
  const { items, removeFromCart, updateQuantity, subtotal, gst, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground/40 mb-4" />
          <h1 className="text-2xl font-display font-bold mb-2">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Browse our services to get started.</p>
          <Button asChild className="gradient-hero text-primary-foreground rounded-xl shadow-glow">
            <Link to="/services">Explore Services</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-display font-bold mb-8">Shopping Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <motion.div key={item.service.id} layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="bg-card rounded-2xl border border-border/50 shadow-card p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex-1">
                <span className="text-xs font-medium text-primary bg-accent rounded-full px-2 py-0.5">{item.service.category}</span>
                <h3 className="font-display font-semibold mt-1">{item.service.title}</h3>
                <p className="text-sm text-muted-foreground">₹{item.service.price.toLocaleString("en-IN")}/mo</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-border rounded-xl overflow-hidden">
                  <button onClick={() => updateQuantity(item.service.id, item.quantity - 1)} className="px-3 py-2 hover:bg-secondary transition-colors"><Minus className="w-3 h-3" /></button>
                  <span className="px-3 py-2 text-sm font-medium min-w-[2rem] text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.service.id, item.quantity + 1)} className="px-3 py-2 hover:bg-secondary transition-colors"><Plus className="w-3 h-3" /></button>
                </div>
                <span className="font-display font-semibold min-w-[5rem] text-right">{fmt(item.service.price * item.quantity)}</span>
                <button onClick={() => removeFromCart(item.service.id)} className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
              </div>
            </motion.div>
          ))}
        </div>
        <div>
          <div className="bg-card rounded-2xl border border-border/50 shadow-card p-6 sticky top-24">
            <h2 className="font-display font-semibold text-lg mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{fmt(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">GST (18%)</span><span>{fmt(gst)}</span></div>
              <div className="border-t pt-3 flex justify-between font-display font-bold text-lg"><span>Total</span><span className="text-gradient">{fmt(total)}</span></div>
            </div>
            <Button asChild className="w-full mt-6 gradient-hero text-primary-foreground rounded-xl shadow-glow">
              <Link to="/checkout">Proceed to Checkout <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
