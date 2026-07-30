"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Navigation, Calendar, Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const WHATSAPP_LINK = `https://wa.me/923469297818?text=${encodeURIComponent("Hello Dr. Zahid, I have a query.")}`;
const MAPS_LINK = "https://maps.google.com/?q=Muhammad+Medical+Centre+G8+Markaz+Islamabad";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    const msg = `*Message from Website*\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n\n💬 ${form.message}`;
    window.open(`https://wa.me/923469297818?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  const contactItems = [
    { icon: <Phone className="w-6 h-6" />, label: "Clinic Phone", value: "051-2340508", sub: "+92 326 5557795", href: "tel:051-2340508", color: "from-[#1a5f7a] to-[#2d9596]" },
    { icon: <MessageCircle className="w-6 h-6" />, label: "Doctor WhatsApp", value: "0346 9297818", sub: "Tap to open WhatsApp", href: WHATSAPP_LINK, color: "from-[#1DAA61] to-[#17964f]" },
    { icon: <MapPin className="w-6 h-6" />, label: "Clinic Location", value: "Muhammad Medical Centre", sub: "G-8 Markaz, Islamabad", href: MAPS_LINK, color: "from-[#f59e0b] to-[#e67e22]" },
    { icon: <Clock className="w-6 h-6" />, label: "Appointment Days", value: "Monday – Friday", sub: "Closed Sat & Sun", href: "/appointment", color: "from-[#1a5f7a] to-[#2d9596]" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-[#1a5f7a] to-[#2d9596] text-white overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest mb-4">Get in Touch</span>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Contact Dr. Zahid Ullah</h1>
            <p className="text-white/80 text-lg">Reach us for appointments, queries, or clinic information. We respond quickly via WhatsApp.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactItems.map((item, i) => (
            <motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group text-center block">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-105 transition-transform shadow-md`}>
                {item.icon}
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="font-bold text-[#1a5f7a] text-base">{item.value}</p>
              <p className="text-xs text-gray-500 mt-1 leading-tight">{item.sub}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Message Form + Map */}
      <section className="py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Message via WhatsApp */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-[#1a5f7a] via-[#2d9596] to-[#1DAA61]" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#1DAA61]/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#1DAA61]" />
                </div>
                <div>
                  <h2 className="font-headline text-xl font-bold text-[#1a5f7a]">Send a Message</h2>
                  <p className="text-xs text-gray-400">Sent directly to Dr. Zahid via WhatsApp</p>
                </div>
              </div>
              {!sent ? (
                <form onSubmit={handleSend} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Your Name *</label>
                    <input type="text" required placeholder="Ahmed Khan" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1a5f7a] focus:ring-2 focus:ring-[#1a5f7a]/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Phone Number *</label>
                    <input type="tel" required placeholder="03438998962" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1a5f7a] focus:ring-2 focus:ring-[#1a5f7a]/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wide">Message *</label>
                    <textarea required rows={4} placeholder="Type your question or query here..."
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1a5f7a] focus:ring-2 focus:ring-[#1a5f7a]/10 transition-all resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full bg-[#1DAA61] hover:bg-[#17964f] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95">
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-headline text-xl font-bold text-[#1a5f7a] mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-500 mb-6">Dr. Zahid's team will reply to you on WhatsApp shortly.</p>
                  <button onClick={() => { setSent(false); setForm({ name: "", phone: "", message: "" }); }}
                    className="px-6 py-2.5 bg-[#1a5f7a] text-white rounded-xl font-bold text-sm hover:bg-[#154f67] transition-all">
                    Send Another
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Clinic Info + Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-5">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs font-bold text-[#2d9596] uppercase tracking-wider">Primary Clinic</span>
                  <h3 className="font-headline text-xl font-bold text-[#1a5f7a] mt-0.5">Muhammad Medical Centre</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1"><MapPin className="w-3.5 h-3.5 text-[#2d9596]" />G-8 Markaz, Islamabad</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 pt-2">
                <Calendar className="w-4 h-4 text-[#2d9596]" />
                <span>Monday to Friday (Closed Saturday &amp; Sunday)</span>
              </div>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#1a5f7a] hover:bg-[#154f67] text-white py-3 rounded-xl font-bold text-sm transition-all shadow-md">
                <Navigation className="w-4 h-4" />
                Get Directions on Google Maps
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#1a5f7a] to-[#2d9596]" />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1a5f7a]/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#1a5f7a]" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#1a5f7a]">Muhammad Medical Centre</p>
                    <p className="text-xs text-gray-400">G-8 Markaz, Islamabad</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-gray-100 shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.8!2d73.0479!3d33.6932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef9b6b8f6b1%3A0x0!2sMuhammad+Medical+Centre%2C+G8+Markaz%2C+Islamabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Muhammad Medical Centre Location"
                    className="w-full"
                  />
                </div>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 text-xs font-bold text-[#1a5f7a] hover:text-[#2d9596] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[#1a5f7a] to-[#2d9596] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-sm mb-4">Follow Dr. Zahid Ullah</h3>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/share/1G26hGSkQx/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1565D8] text-white py-3 rounded-xl font-bold text-sm transition-all">
                  Facebook
                </a>
                <a href="https://www.tiktok.com/@zahidullah216?_r=1&_t=ZS-98RQVmM78vy" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-bold text-sm transition-all">
                  TikTok
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1DAA61] hover:bg-[#17964f] text-white py-3 rounded-xl font-bold text-sm transition-all">
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-14 px-6 text-center bg-gradient-to-b from-white to-[#f0f7fa]">
        <Link href="/appointment"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1a5f7a] to-[#2d9596] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all active:scale-95">
          <Calendar className="w-6 h-6" />
          Book an Appointment Online
        </Link>
      </section>
    </div>
  );
}
