"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Award, 
  BookOpen, 
  Users, 
  Heart, 
  Star, 
  CheckCircle, 
  MessageCircle, 
  MapPin, 
  Microscope, 
  Globe, 
  FlaskConical,
  GraduationCap,
  Shield,
  Check,
  TrendingUp,
  ArrowRight,
  Calendar
} from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/923469297818?text=${encodeURIComponent("Hello Dr. Zahid, I'd like to book an appointment.")}`;

const careValues = [
  {
    title: "Compassionate Care",
    description: "Every child is unique. We provide a gentle, welcoming environment to make clinical visits stress-free for both children and parents.",
    icon: Heart,
    iconBg: "bg-rose-50 border border-rose-100 text-rose-600",
  },
  {
    title: "Evidence-Based Medicine",
    description: "Treatments are guided by the latest global protocols in pediatric endocrinology, ensuring safe and highly effective medical interventions.",
    icon: Shield,
    iconBg: "bg-amber-50 border border-amber-100 text-amber-600",
  },
  {
    title: "Family-Centered Approach",
    description: "We work hand-in-hand with parents, offering detailed education and guidance to manage chronic conditions like Type 1 Diabetes at home.",
    icon: Users,
    iconBg: "bg-violet-50 border border-violet-100 text-violet-600",
  },
  {
    title: "Global Standards",
    description: "Continuous alignment with European (ESPE) and International (ISPAD) pediatric standards to bring world-class medicine to Islamabad.",
    icon: Globe,
    iconBg: "bg-emerald-50 border border-emerald-100 text-emerald-600",
  }
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
  {
    title: "Frequency of UTI in Children Presenting with Diarrhea",
    journal: "The Research of Medical Science Review",
    year: "2023",
    category: "Infectious Diseases",
    icon: Microscope,
  },
  {
    title: "Association of Hyperthyroidism with Patients of Beta Thalassemia Major",
    journal: "Infra Journal of Bioscience Research",
    year: "2023",
    category: "Endocrinology & Hematology",
    icon: FlaskConical,
  },
  {
    title: "Congenital Normonatremic Hyperbilirubinemia with Glucuronyl Transferase Deficiency",
    journal: "Journal of Population Therapeutics",
    year: "2024",
    category: "Neonatal Endocrinology",
    icon: Heart,
  },
  {
    title: "Frequency of Rickets in Children with Lower Respiratory Tract Infections",
    journal: "PJMHS",
    year: "2022",
    category: "Bone & Metabolism",
    icon: TrendingUp,
  },
  {
    title: "Biochemical Profile of Malnutrition Children at a Tertiary Care Hospital",
    journal: "PJMHS",
    year: "2022",
    category: "Pediatric Nutrition",
    icon: BookOpen,
  },
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

      {/* ── About Hero — Editorial Profile Style ── */}
      <section className="relative bg-gradient-to-br from-[#f8fafb] via-white to-[#edf4f6] overflow-hidden">

        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#d4e9f0]/35 blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-amber-100/30 blur-[80px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">

          {/* Page label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="h-px w-10 bg-[#2d9596]" />
            <span className="text-[#2d9596] text-xs font-bold uppercase tracking-[0.25em]">Meet the Doctor</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">

            {/* Left — Photo + Quick-facts card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-5"
            >
              {/* Editorial portrait */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-gradient-to-b from-[#e8f4f8] to-[#d0e8f0]">
                <img
                  src="/dr-zahid.png"
                  alt="Dr. Zahid Ullah – Consultant Child Specialist"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom overlay strip with name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d1f2d]/80 via-[#0d1f2d]/30 to-transparent px-6 py-5">
                  <p className="font-headline text-2xl font-bold text-white leading-tight">Dr. Zahid Ullah</p>
                  <p className="text-white/75 text-xs font-semibold mt-1">MBBS · FCPS Paediatrics · Fellow Endocrinology</p>
                </div>
              </div>

              {/* Quick-fact chips — 3 items, premium layout */}
              <div className="flex flex-col gap-3">
                {/* Patients — full width highlight card */}
                <div className="rounded-2xl border bg-emerald-50 border-emerald-100 text-emerald-800 px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-0.5">Patients Treated</p>
                    <p className="text-2xl font-bold leading-none">5,000+</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
                {/* Bottom row — two smaller chips */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border bg-violet-50 border-violet-100 text-violet-800 px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-0.5">Speciality</p>
                    <p className="text-sm font-bold leading-snug">Paediatrics &amp; Endocrinology</p>
                  </div>
                  <div className="rounded-2xl border bg-amber-50 border-amber-100 text-amber-800 px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-0.5">Based In</p>
                    <p className="text-sm font-bold leading-snug">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Bio & Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-8"
            >
              {/* Heading */}
              <div>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-[#0d1f2d] leading-tight mb-4">
                  Dedicated to Every{" "}
                  <span className="text-[#1a5f7a] italic font-semibold">Child's Health</span>
                </h1>
                <p className="text-gray-500 text-base leading-relaxed">
                  Dr. Zahid Ullah is a Consultant Child Specialist &amp; Pediatric Endocrinologist committed to delivering world-class, evidence-based care. With over a decade of clinical experience — including heading the Pediatrics Department at Women &amp; Children Hospital Karak — he brings exceptional expertise and genuine compassion to every consultation.
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="relative border-l-4 border-[#2d9596] pl-5 py-2">
                <p className="text-[#1a5f7a] font-headline text-lg italic font-semibold leading-snug">
                  "Every child deserves the best start in life — and that starts with the right diagnosis, delivered with care."
                </p>
                <cite className="block text-xs text-gray-400 font-bold uppercase tracking-wider mt-2 not-italic">— Dr. Zahid Ullah</cite>
              </blockquote>

              {/* Credentials list */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2d9596] mb-4">Academic Credentials</p>
                <div className="space-y-3">
                  {[
                    { degree: "MBBS", detail: "Bachelor of Medicine & Surgery" },
                    { degree: "FCPS Paediatrics", detail: "Fellow, College of Physicians & Surgeons Pakistan" },
                    { degree: "Fellow Paeds Endocrinology", detail: "PIMS – Pakistan Institute of Medical Sciences, Islamabad" },
                    { degree: "RMP", detail: "Registered Medical Practitioner" },
                  ].map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#2d9596] mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-[#1a5f7a]">{c.degree}</p>
                        <p className="text-xs text-gray-400 font-medium mt-0.5">{c.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Membership badges */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2d9596] mb-3">International Memberships</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "BLS Certified", bg: "bg-emerald-50 border-emerald-200 text-emerald-700" },
                    { label: "PIMS Fellow",   bg: "bg-sky-50 border-sky-200 text-sky-700" },
                    { label: "ISPAD Member",  bg: "bg-violet-50 border-violet-200 text-violet-700" },
                    { label: "ESPE Member",   bg: "bg-amber-50 border-amber-200 text-amber-700" },
                  ].map(b => (
                    <span key={b.label} className={`px-3.5 py-1.5 rounded-full border text-xs font-bold ${b.bg}`}>
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle CTA — secondary, not dominant */}
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/appointment"
                  className="flex items-center gap-2 bg-[#1a5f7a] hover:bg-[#154f67] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Consultation
                </Link>
                <Link
                  href="/qualifications"
                  className="text-sm font-bold text-[#1a5f7a] hover:text-[#2d9596] underline underline-offset-4 transition-colors"
                >
                  Full Qualifications →
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 md:px-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "10+", icon: <Award className="w-6 h-6" /> },
            { label: "Patients Treated", value: "5,000+", icon: <Users className="w-6 h-6" /> },
            { label: "Google Rating", value: "5.0", icon: <Star className="w-6 h-6" /> },
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
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Philosophy of Care */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-headline text-2xl font-bold text-[#1a5f7a] mb-8 flex items-center gap-2.5">
              <Heart className="w-6 h-6 text-[#2d9596]" /> Philosophy of Care
            </h2>
            
            {/* Care Values List */}
            <div className="space-y-6">
              {careValues.map((v, idx) => {
                const IconComponent = v.icon;
                return (
                  <div key={idx} className="relative flex items-start gap-4 p-5 bg-white border border-gray-100/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] active:scale-[0.98] transition-transform">
                    {/* Always-visible accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1a5f7a] to-[#2d9596] rounded-l-full" />
                    
                    {/* Distinct color per icon */}
                    <div className={`w-10 h-10 rounded-xl ${v.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 pl-1">
                      <h4 className="font-bold text-sm text-[#1a5f7a]">
                        {v.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Areas of Expertise */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="font-headline text-2xl font-bold text-[#1a5f7a] mb-8 flex items-center gap-2.5">
              <Heart className="w-6 h-6 text-[#2d9596]" /> Areas of Expertise
            </h2>
            
            {/* Unified container card */}
            <div className="relative overflow-hidden bg-white border border-gray-100 shadow-[0_10px_35px_rgba(26,95,122,0.04)] rounded-[2.5rem] p-8 md:p-10">

              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {specialties.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {/* Always-colored check circle */}
                    <div className="w-5 h-5 rounded-full bg-[#2d9596] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 leading-snug">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
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
      <section className="py-24 px-6 md:px-16 bg-[#fafcff]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">Academic Contributions</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#1a5f7a] mt-2">Research Publications</h2>
            <div className="w-16 h-1.5 bg-[#2d9596] mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPublications.map((pub, i) => {
              const PubIcon = pub.icon;
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group bg-white rounded-2xl border border-[#d8e2e6] border-t-[3px] border-t-[#6b8fa0] p-7 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#f0f4f6] text-[#4e6e80] flex items-center justify-center group-hover:bg-[#e6eef2] transition-colors duration-200">
                      <PubIcon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-[#f4f6f8] text-[#5a7585] text-[10px] font-bold uppercase tracking-wider border border-[#d0dce2]">
                      Published · {pub.year}
                    </span>
                  </div>

                  {/* Category */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-[#6b8fa0]">
                    {pub.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-headline text-[1.05rem] font-bold text-[#0f2534] leading-snug">
                    {pub.title}
                  </h3>
                </div>

                {/* Journal Divider & Citation */}
                <div className="mt-5 pt-4 border-t border-[#eaeef0]">
                  <p className="text-xs text-[#8fa5b0] font-medium italic">
                    <span className="text-[#4e6e80] font-semibold not-italic">Journal: </span>
                    {pub.journal}
                  </p>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-[#1a5f7a] to-[#2d9596] text-white text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3">Ready to Consult Dr. Zahid?</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Book an appointment today at our G-8 Markaz clinics — Mon to Fri.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1DAA61] hover:bg-[#17964f] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all active:scale-95">
          <MessageCircle className="w-6 h-6" />
          WhatsApp Appointment
        </a>
      </section>
    </div>
  );
}
