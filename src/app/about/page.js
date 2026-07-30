"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Users, Heart, Star, CheckCircle, MessageCircle, MapPin, Microscope, Globe, FlaskConical } from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/923469297818?text=${encodeURIComponent("Hello Dr. Zahid, I'd like to book an appointment.")}`;

const credentials = [
  { label: "MBBS", note: "Ayub Medical College, Khyber Medical University, Peshawar – 2013", icon: "🎓" },
  { label: "RMP", note: "Registered Medical Practitioner – PMC Reg #: 216371-N", icon: "📋" },
  { label: "FCPS Paediatrics", note: "College of Physicians & Surgeons Pakistan", icon: "🏅" },
  { label: "Fellow Paediatrics Endocrinology", note: "PIMS – Pakistan Institute of Medical Sciences, Islamabad (Feb 2026 – Present)", icon: "⭐" },
  { label: "Member – Pakistan Paediatrics Association (PPA)", note: "", icon: "🇵🇰" },
  { label: "Member – ISPAD", note: "International Society for Pediatric & Adolescent Diabetes", icon: "🌍" },
  { label: "Member – ESPE", note: "European Society for Paediatric Endocrinology", icon: "🇪🇺" },
];

const experience = [
  {
    period: "Feb 2026 – Present",
    role: "2nd Fellowship Training (Paeds Endocrinology)",
    org: "PIMS – Pakistan Institute of Medical Sciences, Islamabad",
    current: true,
    highlights: [
      "Advanced clinical management of growth disorders, Type 1 Diabetes, and metabolic bone diseases.",
      "Conducting specialized endocrine dynamic testing and hormonal profiling.",
    ]
  },
  {
    period: "July 2019 – Jan 2026",
    role: "HOD & District Specialist Paediatrics",
    org: "Women & Children Hospital, Karak City, KPK",
    current: false,
    highlights: [
      "Served as Head of Department (HOD), leading a team of Paediatric specialists.",
      "Managed the Nursery and NICU independently, handling extreme neonatal emergencies.",
      "Greatest outreaches (OPD) and inpatient pediatric care for the entire district.",
    ]
  },
  {
    period: "July 2016 – Dec 2019",
    role: "FCPS Post-Graduate Trainee",
    org: "Lady Reading Hospital, Peshawar",
    current: false,
    highlights: [
      "Assisting Child Specialists and Consultants for critically ill patients.",
      "Emergency Management, Neonatal resuscitation, ETT Intubation, NICU/PICU management.",
    ]
  },
  {
    period: "Jan 2016 – June 2016",
    role: "FCPS Post-Graduate Trainee",
    org: "North West General Hospital, Peshawar",
    current: false,
    highlights: [
      "Assisting Child Specialists and Consultants for managing critically ill patients.",
    ]
  },
];

const researchPublications = [
  "Frequency of UTI in Children Presenting with Diarrhea – The Research of Medical Science Review (2023)",
  "Association of Hyperthyroidism with Patients of Beta Thalassemia Major – Infra Journal of Bioscience Research (2023)",
  "Congenital Normonatremic Hyperbilirubinemia with Glucuronyl Transferase Deficiency – Journal of Population Therapeutics (2024)",
  "Frequency of Rickets in Children with Lower Respiratory Tract Infections – PJMHS (2022)",
  "Biochemical Profile of Malnutrition Children at a Tertiary Care Hospital – PJMHS (2022)",
];

const specialties = [
  "Growth Disorders (Short/Tall Stature)",
  "Pediatric Diabetes (Type 1 & 2)",
  "Thyroid Disorders",
  "Metabolic Bone Disease",
  "Adrenal & Pituitary Conditions",
  "Neonatal & Newborn Care",
  "Puberty Disorders",
  "Chronic Disease Management",
  "Acute Hepatitis",
  "Recurrent Chest Infections",
  "Tonsillitis & ENT Issues",
  "Anemia & Blood Disorders",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#1a5f7a] via-[#1d6e85] to-[#2d9596] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#f59e0b] blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-5">
              About the Doctor
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-4">
              Dr. Zahid Ullah
            </h1>
            <p className="text-white/90 text-lg font-semibold mb-2">MBBS · RMP · FCPS Paediatrics · Fellow Paediatrics Endocrinology</p>
            <p className="text-white/70 leading-relaxed mb-4">
              Consultant Child Specialist & Pediatric Endocrinologist based in Islamabad — delivering world-class, evidence-based care to children and families across Pakistan with compassion and clinical excellence.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["BLS Certified", "PIMS Fellow", "ISPAD Member", "ESPE Member"].map(b => (
                <span key={b} className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold">{b}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fba58] text-white px-7 py-3.5 rounded-full font-bold shadow-lg transition-all active:scale-95">
                <MessageCircle className="w-5 h-5" />
                Book Appointment
              </a>
              <a href="/clinics"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-7 py-3.5 rounded-full font-bold transition-all border border-white/20">
                <MapPin className="w-5 h-5" />
                Clinic Locations
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="w-52 h-52 md:w-64 md:h-64 rounded-3xl bg-white/10 border-4 border-white/30 flex items-center justify-center shrink-0 shadow-2xl overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida/AP1WRLtKMOKvtlstINcTqFrQxqS35J4QiFqAXfnndfUkfvKPDsvUqv6wdNzjhwO4fR5H0IKcFQg_gLt_KZnGk0v89n4qGZRbJFj-NiFkjhzStBePNDlJle94SjcKGyFPN1GdqyqvzWbvsNo3BGCTdbny-9KmcGd_U5Hc9YEodz4XYy8qSqg0oYX2_hUKnPLVXBXYlbg1QcvR9-op8YKFclXTRoM8JK0RQlA8CKo40NT3j3FxjvxYPd_dU9j_2A"
              alt="Dr. Zahid Ullah"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 md:px-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "10+", icon: <Award className="w-6 h-6" /> },
            { label: "Patients Treated", value: "5,000+", icon: <Users className="w-6 h-6" /> },
            { label: "Google Rating", value: "5.0 ⭐", icon: <Star className="w-6 h-6" /> },
            { label: "Research Publications", value: "5+", icon: <BookOpen className="w-6 h-6" /> },
          ].map((s) => (
            <div key={s.label} className="text-center p-5 rounded-2xl bg-[#f0f7fa] hover:bg-[#e8f4f8] transition-colors">
              <div className="flex justify-center text-[#1a5f7a] mb-2">{s.icon}</div>
              <p className="font-headline text-2xl font-bold text-[#1a5f7a]">{s.value}</p>
              <p className="text-xs text-gray-500 font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1a5f7a]/10 flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-[#1a5f7a]" />
              </div>
              <h2 className="font-headline text-2xl font-bold text-[#1a5f7a]">Professional Summary</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">
              Strategic Pediatric Specialist and Endocrinology Fellow committed to advancing patient outcomes through evidence-based clinical practice and specialized metabolic care. With over a decade of clinical experience — including serving as Head of Department at Women & Children Hospital, Karak City — Dr. Zahid Ullah brings unparalleled expertise in managing complex pediatric conditions. His international memberships with ISPAD and ESPE ensure that every patient receives globally recognized, up-to-date care.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials & Specialties */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Qualifications */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h2 className="font-headline text-2xl font-bold text-[#1a5f7a] mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#2d9596]" /> Qualifications & Memberships
            </h2>
            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c.label} className="flex items-start gap-3 p-4 rounded-xl bg-[#f0f7fa] hover:bg-[#e8f4f8] transition-colors group">
                  <span className="text-xl shrink-0 mt-0.5">{c.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800 group-hover:text-[#1a5f7a] transition-colors">{c.label}</p>
                    {c.note && <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{c.note}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Areas of Expertise */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h2 className="font-headline text-2xl font-bold text-[#1a5f7a] mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-[#2d9596]" /> Areas of Expertise
            </h2>
            <div className="grid grid-cols-1 gap-2.5 mb-8">
              {specialties.map((s) => (
                <div key={s} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#f0f7fa] hover:bg-[#e8f4f8] transition-colors group">
                  <CheckCircle className="w-4 h-4 text-[#2d9596] shrink-0" />
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1a5f7a] transition-colors">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career History */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">Career History</span>
            <h2 className="font-headline text-3xl font-bold text-[#1a5f7a] mt-2">Professional Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((e, i) => (
              <motion.div key={e.role + e.period + i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${e.current ? "bg-[#e8f4f8] border-[#2d9596]/30 shadow-md" : "bg-white border-gray-100 shadow-sm"}`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    {e.current && <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#2d9596] text-white text-[10px] font-bold uppercase tracking-wider mb-2">Current Position</span>}
                    <h3 className="font-headline text-lg font-bold text-[#1a5f7a]">{e.role}</h3>
                    <p className="font-semibold text-sm text-gray-700 mt-0.5">{e.org}</p>
                  </div>
                  <span className="text-xs font-bold text-[#2d9596] bg-[#2d9596]/10 px-3 py-1 rounded-full shrink-0 h-fit">{e.period}</span>
                </div>
                <ul className="space-y-1 mt-3">
                  {e.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#2d9596] shrink-0 mt-1">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Publications */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">Academic Contributions</span>
            <h2 className="font-headline text-3xl font-bold text-[#1a5f7a] mt-2">Research Publications</h2>
          </div>
          <div className="space-y-4">
            {researchPublications.map((pub, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a5f7a] to-[#2d9596] flex items-center justify-center text-white font-bold text-xs shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed group-hover:text-[#1a5f7a] transition-colors">{pub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-[#1a5f7a] to-[#2d9596] text-white text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3">Ready to Consult Dr. Zahid?</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Book an appointment today at our G-8 Markaz clinics — Mon to Fri.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fba58] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all active:scale-95">
          <MessageCircle className="w-6 h-6" />
          WhatsApp Appointment
        </a>
      </section>
    </div>
  );
}
