import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Smartphone, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";

const fmt = (n: number) => `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const Payment = () => {
  const navigate = useNavigate();
  const { total, items } = useCart();
  const [method, setMethod] = useState<"card" | "upi">("card");
  const [processing, setProcessing] = useState(false);

  if (items.length === 0) {
    navigate("/services");
    return null;
  }

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => navigate("/success"), 2500);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="bg-card rounded-2xl border border-border/50 shadow-card p-8">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-4 h-4 text-success" />
            <span className="text-sm text-muted-foreground">Secure Payment</span>
          </div>
          <h1 className="text-2xl font-display font-bold mb-1">Payment</h1>
          <p className="text-muted-foreground text-sm mb-6">Total: <span className="text-gradient font-display font-bold text-lg">{fmt(total)}</span></p>

          {/* Method Toggle */}
          <div className="flex gap-2 mb-6">
            {([["card", CreditCard, "Card"], ["upi", Smartphone, "UPI"]] as const).map(([m, Icon, label]) => (
              <button key={m} onClick={() => setMethod(m)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-medium transition-all ${method === m ? "border-primary bg-accent text-accent-foreground shadow-sm" : "border-border text-muted-foreground hover:border-primary/50"}`}>
                <Icon className="w-4 h-4" />{label}
              </button>
            ))}
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            <AnimatePresence mode="wait">
              {method === "card" ? (
                <motion.div key="card" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-4">
                  <div>
                    <Label>Card Number</Label>
                    <Input placeholder="4242 4242 4242 4242" className="mt-1 rounded-xl" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>Expiry</Label><Input placeholder="MM/YY" className="mt-1 rounded-xl" required /></div>
                    <div><Label>CVV</Label><Input placeholder="123" type="password" maxLength={4} className="mt-1 rounded-xl" required /></div>
                  </div>
                  <div><Label>Cardholder Name</Label><Input placeholder="John Doe" className="mt-1 rounded-xl" required /></div>
                </motion.div>
              ) : (
                <motion.div key="upi" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-4">
                  <div><Label>UPI ID</Label><Input placeholder="yourname@upi" className="mt-1 rounded-xl" required /></div>
                </motion.div>
              )}
            </AnimatePresence>

            <Button type="submit" disabled={processing} className="w-full gradient-hero text-primary-foreground rounded-xl shadow-glow h-12 text-base">
              {processing ? (
                <span className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" />Processing Payment...</span>
              ) : (
                `Pay ${fmt(total)}`
              )}
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span>🔒 256-bit SSL</span>
            <span>PCI Compliant</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Payment;
