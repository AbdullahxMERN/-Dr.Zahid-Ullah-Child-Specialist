"use client";

import Link from "next/link";
import Image from "next/image";
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
  Calendar,
} from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/923469297818?text=${encodeURIComponent("Hello Dr. Zahid, I'd like to book an appointment.")}`;

const careValues = [
  {
    title: "Compassionate Care",
    description:
      "Every child is unique. We provide a gentle, welcoming environment to make clinical visits stress-free for both children and parents.",
    icon: Heart,
    iconBg: "bg-rose-50 border border-rose-100 text-rose-600",
  },
  {
    title: "Evidence-Based Medicine",
    description:
      "Treatments are guided by the latest global protocols in pediatric endocrinology, ensuring safe and highly effective medical interventions.",
    icon: Shield,
    iconBg: "bg-amber-50 border border-amber-100 text-amber-600",
  },
  {
    title: "Family-Centered Approach",
    description:
      "We work hand-in-hand with parents, offering detailed education and guidance to manage chronic conditions like Type 1 Diabetes at home.",
    icon: Users,
    iconBg: "bg-violet-50 border border-violet-100 text-violet-600",
  },
  {
    title: "Global Standards",
    description:
      "Continuous alignment with European (ESPE) and International (ISPAD) pediatric standards to bring world-class medicine to Islamabad.",
    icon: Globe,
    iconBg: "bg-emerald-50 border border-emerald-100 text-emerald-600",
  },
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
    ],
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
    ],
  },
  {
    period: "July 2016 – Dec 2019",
    role: "FCPS Post-Graduate Trainee",
    org: "Lady Reading Hospital, Peshawar",
    current: false,
    highlights: [
      "Assisting Child Specialists and Consultants for critically ill patients.",
      "Emergency Management, Neonatal resuscitation, ETT Intubation, NICU/PICU management.",
    ],
  },
  {
    period: "Jan 2016 – June 2016",
    role: "FCPS Post-Graduate Trainee",
    org: "North West General Hospital, Peshawar",
    current: false,
    highlights: [
      "Assisting Child Specialists and Consultants for managing critically ill patients.",
    ],
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
    title:
      "Association of Hyperthyroidism with Patients of Beta Thalassemia Major",
    journal: "Infra Journal of Bioscience Research",
    year: "2023",
    category: "Endocrinology & Hematology",
    icon: FlaskConical,
  },
  {
    title:
      "Congenital Normonatremic Hyperbilirubinemia with Glucuronyl Transferase Deficiency",
    journal: "Journal of Population Therapeutics",
    year: "2024",
    category: "Neonatal Endocrinology",
    icon: Heart,
  },
  {
    title:
      "Frequency of Rickets in Children with Lower Respiratory Tract Infections",
    journal: "PJMHS",
    year: "2022",
    category: "Bone & Metabolism",
    icon: TrendingUp,
  },
  {
    title:
      "Biochemical Profile of Malnutrition Children at a Tertiary Care Hospital",
    journal: "PJMHS",
    year: "2022",
    category: "Pediatric Nutrition",
    icon: BookOpen,
  },
];

const specialties = [
  "Growth Disorders (Short/Tall Stature)",
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
            <span className="text-[#2d9596] text-xs font-bold uppercase tracking-[0.25em]">
              Meet the Doctor
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-14 items-start">
            {/* ── Left: Portrait ONLY ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="/dr-zahid.png"
                  alt="Dr. Zahid Ullah – Consultant Child Specialist"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-top"
                />
                {/* Strong gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071620]/90 via-[#071620]/30 via-55% to-transparent pointer-events-none" />

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-12 z-10 pointer-events-none">
                  <p
                    style={{
                      fontFamily: "var(--font-headline)",
                      fontSize: "clamp(22px,2.5vw,28px)",
                      fontWeight: 800,
                      color: "#fff",
                      lineHeight: 1.2,
                      marginBottom: 5,
                    }}
                  >
                    Dr. Zahid Ullah
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.72)",
                      fontSize: 11.5,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      marginBottom: 10,
                    }}
                  >
                    MBBS · FCPS Paediatrics · Fellow Endocrinology
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="#FCD34D"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <span
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: 10.5,
                        fontWeight: 700,
                        marginLeft: 4,
                      }}
                    >
                      4.9 · Google Rating
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Right: Full Bio + Stats ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              {/* Heading */}
              <div>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-[#0d1f2d] leading-tight mb-3">
                  Dedicated to Every{" "}
                  <span className="text-[#1a5f7a] italic font-semibold">
                    Child's Health
                  </span>
                </h1>
                <p className="text-gray-500 text-base leading-relaxed">
                  Dr ZAHID ULLAH MBBS, RMP, FCPS(PEADS) Fellow Paediatrics
                  Endocrinology PIMS Islamabad Member of Pakistan paediatrics
                  Association (PPA) Member of The International Society for
                  Pediatric and Adolescent Diabetes (ISPAD) Member of The
                  European Society for Paediatric Endocrinology( ESPE) Ex
                  Incharge Children Unit women and Children Hospital Karak City
                  Ex Registrar Lady Reading Hospital Peshawar
                </p>
              </div>

              {/* Stat chips — 4 in a row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    label: "Patients Treated",
                    value: "5,000+",
                    bg: "#ecfdf5",
                    border: "#bbf7d0",
                    text: "#065f46",
                  },
                  {
                    label: "Experience",
                    value: "10+ Yrs",
                    bg: "#eff6ff",
                    border: "#bfdbfe",
                    text: "#1e40af",
                  },
                  {
                    label: "Speciality",
                    value: "Paeds & Endo",
                    bg: "#f5f3ff",
                    border: "#ddd6fe",
                    text: "#5b21b6",
                  },
                  {
                    label: "Based In",
                    value: "Islamabad",
                    bg: "#fffbeb",
                    border: "#fde68a",
                    text: "#92400e",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: s.bg,
                      border: `1px solid ${s.border}`,
                      borderRadius: 14,
                      padding: "11px 12px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: s.text,
                        opacity: 0.6,
                        marginBottom: 3,
                      }}
                    >
                      {s.label}
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: s.text,
                        lineHeight: 1.2,
                      }}
                    >
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <blockquote className="relative border-l-4 border-[#2d9596] pl-5 py-1">
                <p className="text-[#1a5f7a] font-headline text-base italic font-semibold leading-snug">
                  &ldquo;Every child deserves the best start in life — and that
                  starts with the right diagnosis, delivered with care.&rdquo;
                </p>
                <cite className="block text-xs text-gray-400 font-bold uppercase tracking-wider mt-1.5 not-italic">
                  — Dr. Zahid Ullah
                </cite>
              </blockquote>

              {/* CTAs */}
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

      {/* ── Credentials & Memberships Section ── */}
      <section className="py-16 px-6 md:px-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            {/* Academic Credentials */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#2d9596] mb-5">
                Academic Credentials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { degree: "MBBS", detail: "Bachelor of Medicine & Surgery" },
                  {
                    degree: "FCPS Paediatrics",
                    detail: "Fellow, College of Physicians & Surgeons Pakistan",
                  },
                  {
                    degree: "Fellow Paeds Endocrinology",
                    detail:
                      "PIMS – Pakistan Institute of Medical Sciences, Islamabad",
                  },
                  { degree: "RMP", detail: "Registered Medical Practitioner" },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-[#f8fafc] border border-gray-100 rounded-2xl px-5 py-4 shadow-sm"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2d9596] mt-1.5 shrink-0" />
                    <div>
                      <p className="text-base font-bold text-[#1a5f7a]">
                        {c.degree}
                      </p>
                      <p className="text-xs text-gray-500 font-medium mt-1">
                        {c.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* International Memberships */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#2d9596] mb-5">
                International Memberships
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  {
                    label: "BLS Certified",
                    org: "Basic Life Support Certification",
                    bg: "bg-emerald-50 border-emerald-100 text-emerald-800 shadow-emerald-50/50",
                  },
                  {
                    label: "PIMS Fellow",
                    org: "Fellowship training at Pakistan Institute of Medical Sciences",
                    bg: "bg-sky-50 border-sky-100 text-sky-800 shadow-sky-50/50",
                  },
                  {
                    label: "ISPAD Member",
                    org: "International Society for Pediatric and Adolescent Diabetes",
                    bg: "bg-violet-50 border-violet-100 text-violet-800 shadow-violet-50/50",
                  },
                  {
                    label: "ESPE Member",
                    org: "European Society for Paediatric Endocrinology",
                    bg: "bg-amber-50 border-amber-100 text-amber-800 shadow-amber-50/50",
                  },
                ].map((b, i) => (
                  <div
                    key={i}
                    className={`px-5 py-3 rounded-2xl border text-sm font-bold flex items-center justify-between shadow-sm ${b.bg}`}
                  >
                    <div>
                      <p className="font-bold text-sm">{b.label}</p>
                      <p className="text-[11px] font-medium opacity-80 mt-0.5">
                        {b.org}
                      </p>
                    </div>
                    <span className="text-xs opacity-60">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
              <h2 className="font-headline text-2xl font-bold text-[#1a5f7a]">
                Professional Summary
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">
              Strategic Pediatric Specialist and Endocrinology Fellow committed
              to advancing patient outcomes through evidence-based clinical
              practice and specialized metabolic care. With over a decade of
              clinical experience — including serving as Head of Department at
              Women & Children Hospital, Karak City — Dr. Zahid Ullah brings
              unparalleled expertise in managing complex pediatric conditions.
              His international memberships with ISPAD and ESPE ensure that
              every patient receives globally recognized, up-to-date care.
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
                  <div
                    key={idx}
                    className="relative flex items-start gap-4 p-5 bg-white border border-gray-100/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] active:scale-[0.98] transition-transform"
                  >
                    {/* Always-visible accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1a5f7a] to-[#2d9596] rounded-l-full" />

                    {/* Distinct color per icon */}
                    <div
                      className={`w-10 h-10 rounded-xl ${v.iconBg} flex items-center justify-center shrink-0 shadow-sm`}
                    >
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
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">
              Career History
            </span>
            <h2 className="font-headline text-3xl font-bold text-[#1a5f7a] mt-2">
              Professional Experience
            </h2>
          </div>
          <div className="space-y-6">
            {experience.map((e, i) => (
              <motion.div
                key={e.role + e.period + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${e.current ? "bg-[#e8f4f8] border-[#2d9596]/30 shadow-md" : "bg-white border-gray-100 shadow-sm"}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    {e.current && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#2d9596] text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                        Current Position
                      </span>
                    )}
                    <h3 className="font-headline text-lg font-bold text-[#1a5f7a]">
                      {e.role}
                    </h3>
                    <p className="font-semibold text-sm text-gray-700 mt-0.5">
                      {e.org}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#2d9596] bg-[#2d9596]/10 px-3 py-1 rounded-full shrink-0 h-fit">
                    {e.period}
                  </span>
                </div>
                <ul className="space-y-1 mt-3">
                  {e.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
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
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">
              Academic Contributions
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#1a5f7a] mt-2">
              Research Publications
            </h2>
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
                      <span className="text-[#4e6e80] font-semibold not-italic">
                        Journal:{" "}
                      </span>
                      {pub.journal}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-[#1a5f7a] to-[#2d9596] text-white text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3">
          Ready to Consult Dr. Zahid?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Book an appointment today at our G-8 Markaz clinics — Mon to Fri.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1DAA61] hover:bg-[#17964f] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all active:scale-95"
        >
          <MessageCircle className="w-6 h-6" />
          WhatsApp Appointment
        </a>
      </section>
    </div>
  );
}
