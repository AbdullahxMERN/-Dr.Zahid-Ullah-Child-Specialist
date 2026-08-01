"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, User, ChevronDown, CheckCircle, MapPin, Calendar } from "lucide-react";

const WHATSAPP_NUMBER = "923469297818";
const CLINIC_PHONE_1 = "0512340508";
const CLINIC_PHONE_2 = "+923265557795";

const diseasesList = [
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

const genders = ["Male", "Female", "Prefer not to say"];

export default function AppointmentPage() {
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    gender: "",
    service: "",
    date: "",
    reason: "",
    clinic: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const buildWhatsAppMsg = () => {
    return `*📋 APPOINTMENT REQUEST — DR. ZAHID ULLAH*\n\n🏥 *Clinic:* ${form.clinic}, G-8 Markaz, Islamabad\n👨‍👧 *Parent/Guardian:* ${form.parentName}\n👶 *Child's Name:* ${form.childName}\n🎂 *Child's Age:* ${form.childAge}\n📞 *Phone:* ${form.phone}\n📧 *Email:* ${form.email || "N/A"}\n⚥ *Gender:* ${form.gender}\n⚕️ *Service:* ${form.service}\n📅 *Preferred Date:* ${form.date || "Flexible"}\n📝 *Reason:* ${form.reason}\n\n_Submitted via Dr. Zahid Ullah Website_`;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!form.parentName || !form.childName || !form.phone || !form.service || !form.clinic) {
      alert("Please fill in all required fields marked with *");
      return;
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMsg())}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const handleDirectCall = () => {
    window.open(`tel:${CLINIC_PHONE_1}`);
  };

  const handleDirectWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Dr. Zahid Ullah, I want to book an appointment.")}`, "_blank");
  };

  const inputCls =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#1a5f7a] focus:ring-2 focus:ring-[#1a5f7a]/15 outline-none transition-all font-medium shadow-sm";
  const labelCls = "block text-xs font-bold text-gray-700 mb-1.5 tracking-wide";

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#e8f4f8] via-white to-[#f0f7fa] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-gray-100"
        >
          <div className="w-20 h-20 bg-[#1DAA61]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#1DAA61]" />
          </div>
          <h2 className="font-headline text-2xl font-bold text-[#1a5f7a] mb-3">Appointment Request Sent!</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Your appointment details for <strong className="text-[#1a5f7a]">{form.childName}</strong> have been opened in WhatsApp. Dr. Zahid’s team will confirm your slot shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full bg-[#1a5f7a] text-white py-3.5 rounded-xl font-bold hover:bg-[#154f67] transition-all shadow-md active:scale-95"
          >
            Book Another Appointment
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4f8] via-[#f4fafd] to-white py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Buttons matching reference screenshot */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <button
            onClick={handleDirectWhatsApp}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#1DAA61] hover:bg-[#17964f] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 min-w-[220px]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Book via WhatsApp
          </button>
          <button
            onClick={handleDirectCall}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white border border-[#1a5f7a] text-[#1a5f7a] hover:bg-[#1a5f7a] hover:text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-95 min-w-[220px]"
          >
            <Phone className="w-4 h-4" />
            Call to Book
          </button>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-12 max-w-3xl mx-auto"
        >
          {/* Header text inside form card */}
          <div className="text-center mb-8 pb-6 border-b border-gray-100">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#1a5f7a]/10 text-[#1a5f7a] text-xs font-bold uppercase tracking-wider mb-2">
              Appointment Form
            </span>
            <h1 className="font-headline text-2xl sm:text-3xl font-bold text-[#1a5f7a]">
              Book Consultation with Dr. Zahid Ullah
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#2d9596]" />
              Muhammad Medical Centre / Health Next Hospital, G-8 Markaz, Islamabad
            </p>
            <p className="text-xs text-[#2d9596] font-bold mt-1">PMDC No: 21927-N</p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            
            {/* Row 1: Parent Name & Child Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Parent / Guardian Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ahmed Khan"
                  value={form.parentName}
                  onChange={(e) => set("parentName", e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Child's Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Child's full name"
                  value={form.childName}
                  onChange={(e) => set("childName", e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>

            {/* Row 2: Child's Age & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Child's Age *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5 years / 6 months"
                  value={form.childAge}
                  onChange={(e) => set("childAge", e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="03438998962"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>

            {/* Row 3: Email & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Gender *</label>
                <div className="relative">
                  <select
                    required
                    value={form.gender}
                    onChange={(e) => set("gender", e.target.value)}
                    className={`${inputCls} appearance-none pr-10 bg-white`}
                  >
                    <option value="">Select gender</option>
                    {genders.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Select Clinic */}
            <div>
              <label className={labelCls}>Select Clinic *</label>
              <div className="relative">
                <select
                  required
                  value={form.clinic}
                  onChange={(e) => set("clinic", e.target.value)}
                  className={`${inputCls} appearance-none pr-10 bg-white`}
                >
                  <option value="">Choose a clinic</option>
                  <option value="Muhammad Medical Centre">Muhammad Medical Centre</option>
                  <option value="Health Next Hospital">Health Next Hospital</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Select Service */}
            <div>
              <label className={labelCls}>Select Service *</label>
              <div className="relative">
                <select
                  required
                  value={form.service}
                  onChange={(e) => set("service", e.target.value)}
                  className={`${inputCls} appearance-none pr-10 bg-white`}
                >
                  <option value="">Choose a service</option>
                  {diseasesList.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label className={labelCls}>Preferred Date *</label>
              <input
                type="date"
                required
                value={form.date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => set("date", e.target.value)}
                className={inputCls}
              />
            </div>

            {/* Reason for Visit */}
            <div>
              <label className={labelCls}>Reason for Visit *</label>
              <textarea
                required
                rows={4}
                placeholder="Briefly describe your child's symptoms or reason for consultation..."
                value={form.reason}
                onChange={(e) => set("reason", e.target.value)}
                className={`${inputCls} resize-none`}
              />
            </div>

            {/* Big Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-[#008c8c] hover:bg-[#007474] text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                Submit Appointment Request
              </button>
            </div>
            <p className="text-center text-xs text-gray-500 font-medium mt-2">
              Appointment Days: <strong className="text-[#1a5f7a]">Monday to Friday</strong> · Off Days: <strong className="text-red-500">Saturday &amp; Sunday</strong>
            </p>
          </form>
        </motion.div>

        {/* Direct Contact Cards below Form */}
        <div className="max-w-3xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1DAA61]/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-[#1DAA61]" />
            </div>
            <div>
              <p className="font-bold text-xs text-gray-400 uppercase tracking-wider">Doctor WhatsApp</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[#1a5f7a] font-bold hover:underline"
              >
                0346 9297818
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1a5f7a]/10 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-[#1a5f7a]" />
            </div>
            <div>
              <p className="font-bold text-xs text-gray-400 uppercase tracking-wider">Clinic Phone</p>
              <a href="tel:0512340508" className="text-base text-[#1a5f7a] font-bold hover:underline">
                051-2340508 / 0326 5557795
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
