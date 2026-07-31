"use client";

import { X, User, Phone, MapPin, Activity, MessageCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const WHATSAPP_NUMBER = "923469297818";

const services = [
  "New Born Check up",
  "Infantile Colic",
  "Neonatal Jaundice",
  "Acute Hepatitis",
  "Recurrent Chest Infection",
  "Recurrent Diarrhea",
  "Short Stature",
  "Hypothyroidism / Hyperthyroidism",
  "Obesity",
  "Congenital Adrenal Hyperplasia (CAH)",
  "Type 1 Diabetes Mellitus",
  "Rickets",
  "Recurrent Tonsillitis",
  "Anemia",
  "Fits / Seizures",
  "Oral Stomatitis",
  "Poor Weight Gain",
  "Pneumonia",
  "Measles",
  "Chicken Pox",
  "Diarrhea",
  "Urinary Tract Infection",
  "Asthma",
  "Worm Infestations",
  "Poor Appetite",
];

export default function BookingModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: "",
  });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      alert("Please fill in all required fields.");
      return;
    }
    const msg = `*Appointment Request*\n\n👤 *Patient Name:* ${formData.name}\n📞 *Contact:* ${formData.phone}\n🏥 *Clinic:* Muhammad Medical Centre, G-8 Markaz, Islamabad\n⚕️ *Service:* ${formData.service}\n📅 *Date:* ${formData.date || "Flexible"}\n\n_Sent via Dr. Zahid Ullah website_`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
      >
        <div className="h-2 bg-gradient-to-r from-[#1a5f7a] via-[#2d9596] to-[#1DAA61] w-full" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#1DAA61]/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#1DAA61]" />
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold text-[#1a5f7a]">Book via WhatsApp</h3>
                <p className="text-xs text-gray-500">Muhammad Medical Centre, G-8 Markaz, Islamabad</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleWhatsApp} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#1a5f7a] uppercase tracking-wider mb-1.5">Child's Name *</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" required placeholder="Child's full name" value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a5f7a] focus:ring-2 focus:ring-[#1a5f7a]/10 text-sm outline-none transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1a5f7a] uppercase tracking-wider mb-1.5">Contact Phone *</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="tel" required placeholder="03438998962" value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a5f7a] focus:ring-2 focus:ring-[#1a5f7a]/10 text-sm outline-none transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1a5f7a] uppercase tracking-wider mb-1.5">Select Service *</label>
              <div className="relative">
                <Activity className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select required value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a5f7a] focus:ring-2 focus:ring-[#1a5f7a]/10 text-sm outline-none transition-all appearance-none bg-white">
                  <option value="">Select service</option>
                  {services.map((s) => (<option key={s} value={s}>{s}</option>))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1a5f7a] uppercase tracking-wider mb-1.5">Preferred Date</label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="date" value={formData.date}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a5f7a] focus:ring-2 focus:ring-[#1a5f7a]/10 text-sm outline-none transition-all" />
              </div>
            </div>

            <button type="submit"
              className="w-full bg-[#1DAA61] hover:bg-[#17964f] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 mt-2">
              <MessageCircle className="w-5 h-5 fill-white" />
              Send Appointment Request on WhatsApp
            </button>
            <p className="text-center text-xs text-gray-500 font-medium">Monday to Friday · Off Days: Saturday &amp; Sunday</p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
