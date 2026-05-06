import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Success = () => {
  const { items, total, clearCart } = useCart();
  const orderId = useMemo(() => `ADS-${Date.now().toString(36).toUpperCase()}`, []);
  const purchasedItems = useMemo(() => [...items], []);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 max-w-lg text-center">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", duration: 0.6 }}>
        <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-success" />
        </div>
        <h1 className="text-3xl font-display font-bold mb-2">Payment Successful!</h1>
        <p className="text-muted-foreground mb-8">Thank you for your purchase. Your services will be activated shortly.</p>

        <div className="bg-card rounded-2xl border border-border/50 shadow-card p-6 text-left mb-8">
          <div className="flex justify-between text-sm mb-4">
            <span className="text-muted-foreground">Order ID</span>
            <span className="font-mono font-medium">{orderId}</span>
          </div>
          <div className="border-t pt-4 space-y-3">
            {purchasedItems.map(item => (
              <div key={item.service.id} className="flex justify-between text-sm">
                <span>{item.service.title} × {item.quantity}</span>
                <span>${(item.service.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t mt-4 pt-4 flex justify-between font-display font-bold text-lg">
            <span>Total Paid</span>
            <span className="text-gradient">${total.toFixed(2)}</span>
          </div>
        </div>

        <Button asChild className="gradient-hero text-primary-foreground rounded-xl shadow-glow px-8">
          <Link to="/services">Go to Dashboard <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Success;
