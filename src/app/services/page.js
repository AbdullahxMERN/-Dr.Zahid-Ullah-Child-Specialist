"use client";

import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Baby, 
  Activity, 
  ShieldAlert, 
  Calendar, 
  MessageCircle, 
  ArrowRight,
  Heart,
  Thermometer,
  Microscope,
  Award
} from "lucide-react";
import Link from "next/link";

const WHATSAPP_NUMBER = "923469297818";

const servicesList = [
  {
    name: "New Born Check Up",
    category: "Neonatal Care",
    desc: "Comprehensive neonatal assessment, screening, and developmental milestones evaluation.",
    icon: Baby,
  },
  {
    name: "Infantile Colic",
    category: "Neonatal Care",
    desc: "Specialized assessment and management of unsoothable crying and colic in infants.",
    icon: Baby,
  },
  {
    name: "Neonatal Jaundice",
    category: "Neonatal Care",
    desc: "Early detection, bilirubin monitoring, phototherapy guidance, and treatment.",
    icon: Baby,
  },
  {
    name: "Short Stature",
    category: "Endocrinology & Growth",
    desc: "Growth velocity analysis, hormone evaluation, and evidence-based growth therapies.",
    icon: Activity,
  },
  {
    name: "Hypothyroidism / Hyperthyroidism",
    category: "Endocrinology & Growth",
    desc: "Comprehensive thyroid function evaluation and endocrine treatment management.",
    icon: Activity,
  },
  {
    name: "Obesity",
    category: "Endocrinology & Growth",
    desc: "Metabolic risk profiling, lifestyle, and clinical weight management plans for children.",
    icon: Activity,
  },
  {
    name: "Congenital Adrenal Hyperplasia (CAH)",
    category: "Endocrinology & Growth",
    desc: "Specialized diagnostic workup and long-term hormone replacement monitoring.",
    icon: Microscope,
  },
  {
    name: "Type 1 Diabetes Mellitus",
    category: "Endocrinology & Growth",
    desc: "Insulin pump management, continuous glucose monitoring (CGM), and diabetes education.",
    icon: Activity,
  },
  {
    name: "Rickets",
    category: "Endocrinology & Growth",
    desc: "Vitamin D, calcium, and bone density evaluation for metabolic bone health.",
    icon: Activity,
  },
  {
    name: "Acute Hepatitis",
    category: "Infectious & General Paediatrics",
    desc: "Liver function workup, symptom management, and viral hepatitis clinical care.",
    icon: ShieldAlert,
  },
  {
    name: "Recurrent Chest Infection",
    category: "Infectious & General Paediatrics",
    desc: "Diagnostic evaluation of recurring respiratory illness, immunity, and treatment.",
    icon: Thermometer,
  },
  {
    name: "Recurrent Diarrhea",
    category: "Infectious & General Paediatrics",
    desc: "Gastrointestinal workup, malabsorption screening, and chronic diarrhea management.",
    icon: ShieldAlert,
  },
  {
    name: "Recurrent Tonsillitis",
    category: "Infectious & General Paediatrics",
    desc: "Throat infection management, antibiotic protocols, and ENT follow-up.",
    icon: Thermometer,
  },
  {
    name: "Anemia",
    category: "Infectious & General Paediatrics",
    desc: "Investigation of nutritional, iron-deficiency, and metabolic anemias in children.",
    icon: Microscope,
  },
  {
    name: "Fits / Seizures",
    category: "Infectious & General Paediatrics",
    desc: "Clinical evaluation and management of febrile and afebrile childhood seizures.",
    icon: ShieldAlert,
  },
  {
    name: "Oral Stomatitis",
    category: "Infectious & General Paediatrics",
    desc: "Diagnosis and pain relief treatment for oral ulcers and stomatitis.",
    icon: Thermometer,
  },
  {
    name: "Poor Weight Gain",
    category: "Infectious & General Paediatrics",
    desc: "Failure to thrive workup, nutritional intervention, and growth recovery plans.",
    icon: Activity,
  },
  {
    name: "Pneumonia",
    category: "Infectious & General Paediatrics",
    desc: "Prompt antibiotic therapy, chest monitoring, and inpatient/outpatient management.",
    icon: Thermometer,
  },
  {
    name: "Measles",
    category: "Infectious & General Paediatrics",
    desc: "Infectious disease isolation guidance, symptom management, and prevention.",
    icon: ShieldAlert,
  },
  {
    name: "Chicken Pox",
    category: "Infectious & General Paediatrics",
    desc: "Varicella care, skin lesion protection, and complication management.",
    icon: ShieldAlert,
  },
  {
    name: "Diarrhea",
    category: "Infectious & General Paediatrics",
    desc: "Rehydration therapy, oral electrolytes, and acute gastroenteritis treatment.",
    icon: ShieldAlert,
  },
  {
    name: "Urinary Tract Infection (UTI)",
    category: "Infectious & General Paediatrics",
    desc: "Urine culture interpretation, targeted antibiotic therapy, and renal imaging.",
    icon: Microscope,
  },
  {
    name: "Asthma",
    category: "Infectious & General Paediatrics",
    desc: "Inhaler technique, emergency action plans, and chronic asthma control.",
    icon: Thermometer,
  },
  {
    name: "Worm Infestations",
    category: "Infectious & General Paediatrics",
    desc: "Intestinal parasite screening, deworming therapy, and hygiene education.",
    icon: ShieldAlert,
  },
  {
    name: "Poor Appetite",
    category: "Infectious & General Paediatrics",
    desc: "Nutritional deficiency screening and appetite stimulation strategies.",
    icon: Heart,
  },
];

export default function ServicesPage() {
  const getWhatsAppLink = (serviceName) => {
    const msg = `Hello Dr. Zahid Ullah, I would like to book an appointment for: *${serviceName}*`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero */}
      <section className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-[#1a5f7a] via-[#1d6e85] to-[#2d9596] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest mb-4">
              Pediatric Services
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Medical Conditions We Treat
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Specialized pediatric and endocrine consultations provided at Muhammad Medical Centre, G-8 Markaz, Islamabad.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link
                href="/appointment"
                className="bg-[#1DAA61] hover:bg-[#17964f] text-white px-7 py-3 rounded-full font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Book Appointment Form
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesList.map((item, i) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-[#1a5f7a]/30 active:scale-[0.98]"
              >
                <div>
                  {/* Category Pill + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#2d9596] bg-[#2d9596]/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    {/* Icon always colored — works on both web & mobile */}
                    <div className="w-10 h-10 rounded-xl bg-[#1a5f7a] flex items-center justify-center text-white shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-headline text-base sm:text-lg font-bold text-[#1a5f7a] mb-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                {/* Action Button */}
                <div className="pt-3 border-t border-gray-100">
                  <a
                    href={getWhatsAppLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#008c8c] hover:bg-[#007474] active:bg-[#006060] text-white py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    Book Appointment
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
