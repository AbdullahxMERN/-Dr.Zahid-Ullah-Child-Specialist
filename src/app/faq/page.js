"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  Calendar, 
  MessageCircle, 
  MapPin, 
  TrendingUp, 
  Activity, 
  Baby,
  Clock,
  Phone
} from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/923469297818?text=${encodeURIComponent("Hello Dr. Zahid, I'd like to book an appointment.")}`;
const PHONE_NUMBER = "03115197581";

const faqCategories = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "pediatrics", label: "General Pediatrics", icon: Baby },
  { id: "endocrinology", label: "Growth & Hormones", icon: TrendingUp },
  { id: "appointments", label: "Appointments & Clinic", icon: Calendar },
];

const faqs = [
  {
    category: "pediatrics",
    question: "What age group of children does Dr. Zahid Ullah treat?",
    answer: "Dr. Zahid Ullah treats newborns, infants, toddlers, children, and adolescents up to 18 years of age. His clinical experience covers neonatology, acute pediatric emergencies, and general pediatric well-checks."
  },
  {
    category: "endocrinology",
    question: "What is Pediatric Endocrinology and when should my child see a specialist?",
    answer: "Pediatric Endocrinology deals with hormone, gland, and growth disorders in children. You should consult a specialist if your child experiences growth issues (short stature or rapid growth), early or delayed puberty, unexplained weight gain/loss, thyroid swelling, or symptoms of childhood diabetes (excessive thirst and urination)."
  },
  {
    category: "appointments",
    question: "How can I book an appointment with Dr. Zahid Ullah?",
    answer: "You can easily book an appointment by navigating to our 'Appointment' page, calling our clinic directly at 0311-5197581, or sending a direct message to Dr. Zahid's team on WhatsApp at 0346-9297818."
  },
  {
    category: "endocrinology",
    question: "How do I know if my child's growth is normal or if they have Short Stature?",
    answer: "A child's growth is checked against standard pediatric growth charts. Signs that warrant an endocrinology check-up include growing slower than 4-5 cm per year after age 3, being significantly shorter than other children of the same age and gender, or crossing percentiles downward on their school growth cards."
  },
  {
    category: "endocrinology",
    question: "What support is available for children diagnosed with Type 1 Diabetes?",
    answer: "We provide comprehensive pediatric diabetes care. This includes personalized insulin dosage regimens, Continuous Glucose Monitoring (CGM) sensor applications, insulin pump coaching, counseling for school/home management, and detailed education sessions for parents to prevent hypoglycemic or diabetic emergencies."
  },
  {
    category: "appointments",
    question: "Where is the clinic located and what are the consultation days?",
    answer: "Dr. Zahid Ullah consults at Muhammad Medical Centre, G-8 Markaz, Islamabad. Consultations are available from Monday to Friday (Saturday & Sunday Closed). We recommend calling ahead or booking online to secure a specific slot."
  },
  {
    category: "pediatrics",
    question: "Are child vaccinations and immunizations available at the clinic?",
    answer: "Yes, standard pediatric immunizations and childhood vaccines are administered at Muhammad Medical Centre in accordance with WHO and national EPI guidelines. Please contact us to check vaccine availability and schedule a vaccination slot."
  },
  {
    category: "appointments",
    question: "Are laboratory diagnostic facilities available at the clinic?",
    answer: "Yes. Muhammad Medical Centre is equipped with reliable lab collection points for hormone assays, metabolic panels, pediatric blood work, and endocrine stimulation/suppression dynamic testing."
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafbfc] pb-24 text-gray-800">
      {/* Hero Header */}
      <section className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-[#1a5f7a] via-[#1d6e85] to-[#2d9596] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest mb-4">
              Help Center
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Find quick answers to common queries about child development, pediatric endocrine disorders, clinic schedules, and booking guides.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search queries (e.g. short stature, booking, location...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-gray-800 pl-12 pr-4 py-4 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2d9596]/50 placeholder-gray-400 text-sm font-medium transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-5xl mx-auto px-6 mt-12">
        <div className="flex flex-wrap gap-2.5 justify-center">
          {faqCategories.map((cat) => {
            const CatIcon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpenIndex(null);
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl border text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#1a5f7a] text-white border-transparent shadow-md shadow-[#1a5f7a]/15"
                    : "bg-white text-[#1a5f7a] border-gray-100 hover:bg-[#f0f7fa] shadow-sm"
                }`}
              >
                <CatIcon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-3xl mx-auto px-6 mt-12">
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`bg-white rounded-2xl border transition-all ${
                      isOpen
                        ? "border-[#2d9596]/35 shadow-md shadow-[#2d9596]/5"
                        : "border-gray-100 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-[#0d1f2d] hover:text-[#1a5f7a] transition-colors cursor-pointer"
                    >
                      <span className="text-sm md:text-base leading-snug">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#2d9596]" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-[300px] border-t border-gray-50" : "max-h-0"
                      }`}
                    >
                      <div className="p-6 text-xs md:text-sm text-gray-500 leading-relaxed font-medium bg-[#fcfdfe]">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="text-center py-16 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="font-headline text-lg font-bold text-[#1a5f7a]">No matching questions found</h3>
                <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
                  Try refining your search keyword or selecting a different category above.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Support Section */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <div className="bg-[#e8f4f8]/60 border border-[#2d9596]/15 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#2d9596]/5 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#1a5f7a]">
              Have a Different Question?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed font-semibold">
              If your question isn't answered here, feel free to contact us. Dr. Zahid's support team is always available to help clarify your queries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1DAA61] hover:bg-[#17964f] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Assistance
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 bg-[#1a5f7a] hover:bg-[#154f67] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Call: 0311 5197581
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
