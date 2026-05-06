import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  features: string[];
  icon: string;
}

export interface CartItem {
  service: Service;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (service: Service) => void;
  removeFromCart: (serviceId: string) => void;
  updateQuantity: (serviceId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  gst: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const services: Service[] = [
  { id: "seo-starter", title: "SEO Starter", description: "Boost your search rankings with on-page optimization, keyword research, and technical SEO audit.", price: 24999, category: "SEO", features: ["Keyword Research", "On-Page SEO", "Technical Audit", "Monthly Report"], icon: "Search" },
  { id: "seo-pro", title: "SEO Professional", description: "Advanced SEO with link building, content strategy, and competitor analysis for maximum visibility.", price: 49999, category: "SEO", features: ["Everything in Starter", "Link Building", "Competitor Analysis", "Content Strategy"], icon: "Search" },
  { id: "content-basic", title: "Content Basic", description: "Engaging blog posts and articles that drive organic traffic and establish thought leadership.", price: 21999, category: "Content", features: ["4 Blog Posts/Month", "SEO Optimized", "Social Snippets", "Content Calendar"], icon: "FileText" },
  { id: "content-premium", title: "Content Premium", description: "Full content marketing suite with whitepapers, case studies, and email nurture sequences.", price: 44999, category: "Content", features: ["8 Blog Posts/Month", "2 Whitepapers", "Case Studies", "Email Sequences"], icon: "FileText" },
  { id: "social-essentials", title: "Social Essentials", description: "Consistent social media presence across key platforms with scheduled posts and engagement.", price: 29999, category: "Social Media", features: ["3 Platforms", "12 Posts/Month", "Community Management", "Analytics Dashboard"], icon: "Share2" },
  { id: "social-growth", title: "Social Growth", description: "Aggressive social growth with influencer partnerships, paid boosts, and viral content strategy.", price: 64999, category: "Social Media", features: ["5 Platforms", "30 Posts/Month", "Influencer Outreach", "Paid Boosts"], icon: "Share2" },
  { id: "ads-starter", title: "Ads Starter", description: "Launch targeted PPC campaigns on Google and social platforms to generate qualified leads.", price: 39999, category: "Paid Ads", features: ["Google Ads Setup", "Facebook Ads", "A/B Testing", "Conversion Tracking"], icon: "Target" },
  { id: "ads-enterprise", title: "Ads Enterprise", description: "Multi-channel advertising with advanced retargeting, lookalike audiences, and attribution modeling.", price: 99999, category: "Paid Ads", features: ["All Ad Platforms", "Retargeting", "Lookalike Audiences", "Attribution Modeling"], icon: "Target" },
];

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (service: Service) => {
    setItems(prev => {
      const existing = prev.find(i => i.service.id === service.id);
      if (existing) return prev.map(i => i.service.id === service.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { service, quantity: 1 }];
    });
  };

  const removeFromCart = (serviceId: string) => setItems(prev => prev.filter(i => i.service.id !== serviceId));
  const updateQuantity = (serviceId: string, quantity: number) => {
    if (quantity <= 0) return removeFromCart(serviceId);
    setItems(prev => prev.map(i => i.service.id === serviceId ? { ...i, quantity } : i));
  };
  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.service.price * i.quantity, 0);
  const gst = Math.round(subtotal * 0.18 * 100) / 100;
  const total = subtotal + gst;

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, subtotal, gst, total }}>
      {children}
    </CartContext.Provider>
  );
};
