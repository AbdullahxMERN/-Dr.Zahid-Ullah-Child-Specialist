"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, BookOpen, MessageCircle, Microscope, Stethoscope, FlaskConical, ClipboardList, Medal, Globe2, Users, Trophy, Beaker, Building2 } from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/923469297818?text=${encodeURIComponent("Hello Dr. Zahid, I'd like to book an appointment.")}`;

const degrees = [
  {
    title: "Fellow Paediatrics Endocrinology",
    institution: "PIMS – Pakistan Institute of Medical Sciences, Islamabad",
    year: "Feb 2026 – Present · 2nd Fellowship",
    Icon: Trophy,
    color: "from-[#1a5f7a] to-[#f59e0b]",
    badgeBg: "bg-gradient-to-br from-[#1a5f7a] to-[#f59e0b]",
    current: true,
    detail: "Specialized sub-fellowship in growth disorders, Type 1 Diabetes management, and advanced endocrine dynamic testing."
  },
  {
    title: "FCPS Paediatrics",
    institution: "College of Physicians & Surgeons Pakistan",
    year: "Postgraduate Specialization",
    Icon: Medal,
    color: "from-[#f59e0b] to-[#e67e22]",
    badgeBg: "bg-gradient-to-br from-[#f59e0b] to-[#e67e22]",
    current: false,
    detail: "Full Fellowship in Paediatrics, covering neonatal, acute and chronic paediatric conditions."
  },
  {
    title: "RMP",
    institution: "Registered Medical Practitioner – PMC Reg #: 216371-N",
    year: "Medical Licensing",
    Icon: ClipboardList,
    color: "from-[#2d9596] to-[#3aada8]",
    badgeBg: "bg-gradient-to-br from-[#2d9596] to-[#3aada8]",
    current: false,
    detail: "Licensed to practice medicine in Pakistan under PMC guidelines."
  },
  {
    title: "MBBS",
    institution: "Ayub Medical College, Khyber Medical University, Peshawar",
    year: "2013",
    Icon: GraduationCap,
    color: "from-[#1a5f7a] to-[#2d9596]",
    badgeBg: "bg-gradient-to-br from-[#1a5f7a] to-[#2d9596]",
    current: false,
    detail: "Foundation medical degree with clinical rotations in surgery, medicine, and paediatrics."
  },
];

const education = [
  { label: "MBBS", institution: "Ayub Medical College, Khyber Medical University, Peshawar", year: "2013" },
  { label: "Intermediate", institution: "Govt. Post Graduate College, Kohat", year: "2007" },
  { label: "Matriculation", institution: "Dils Academy, Kohat", year: "2005" },
];

const memberships = [
  { name: "Pakistan Paediatrics Association", short: "PPA", Icon: Users, desc: "National professional body for pediatric medicine in Pakistan.", color: "from-[#00c853] to-[#1b5e20]", iconBg: "bg-gradient-to-br from-[#00c853] to-[#1b5e20]" },
  { name: "International Society for Pediatric & Adolescent Diabetes", short: "ISPAD", Icon: Globe2, desc: "Global leader in pediatric and adolescent diabetes research and care.", color: "from-[#0288d1] to-[#01579b]", iconBg: "bg-gradient-to-br from-[#0288d1] to-[#01579b]" },
  { name: "European Society for Paediatric Endocrinology", short: "ESPE", Icon: Award, desc: "Europe's foremost authority in pediatric endocrinology standards.", color: "from-[#1a5f7a] to-[#2d9596]", iconBg: "bg-gradient-to-br from-[#1a5f7a] to-[#2d9596]" },
];

const trainingsWorkshops = [
  { title: "4th International Conference on Pediatrics and Neonatology", org: "Science Conference, Zianghe", year: "2004" },
  { title: "20th National Pediatric Conference", org: "Pakistan Pediatric Association", year: "2021" },
  { title: "Neonatal Resuscitation Workshop", org: "North West General Hospital, Peshawar", year: "2015" },
  { title: "Continuing Medical Education – Central Policy", org: "Khyber Medical College", year: "2017" },
  { title: "One-Day Neo Symposium on Helping Babies Breathe", org: "Pakistan Pediatric Association", year: "2017" },
  { title: "Presentation Skills – Dept. of Medical Education", org: "LRH Peshawar", year: "2017" },
  { title: "Research Methodology & Bio-statistics", org: "Dept. of Medical Education, North West General Hospital, Peshawar", year: "2016" },
];

const skills = [
  "Pediatric Endocrinology", "Diabetes Management (T1 & T2)", "Growth Disorder Evaluation",
  "Thyroid & Metabolic Diseases", "Puberty Disorders", "Neonatal Care",
  "Insulin Pump Therapy", "CGM Technology", "Evidence-Based Medicine",
  "Patient & Family Education", "NICU/PICU Management", "Emergency Paediatrics",
  "Complete Patient History", "General Physical Examination", "Basic Life Support / First Aid",
  "Fundoscopy", "Interpretation of Imaging Files", "NG Tubing", "IV Infusion", "Blood Sampling",
];

export default function QualificationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-[#1a5f7a] via-[#1d6e85] to-[#2d9596] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#f59e0b] blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest mb-4">Academic Profile</span>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Qualifications & Credentials</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              A highly qualified pediatric endocrinologist with BLS certification, international memberships, and recognized clinical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Degrees Timeline */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">Academic Journey</span>
            <h2 className="font-headline text-3xl font-bold text-[#1a5f7a] mt-2">Degrees & Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {degrees.map((d, i) => {
              const DegIcon = d.Icon;
              return (
              <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg border ${d.current ? "border-[#2d9596]/30" : "border-gray-100"} p-6 overflow-hidden group hover:shadow-xl transition-all`}>
                {d.current && <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-[#2d9596] text-white text-[10px] font-bold uppercase tracking-wider">Current</span>}
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${d.color} rounded-l-2xl`} />
                <div className="pl-4">
                  <div className={`w-12 h-12 rounded-xl ${d.badgeBg} flex items-center justify-center text-white shadow-md mb-4`}>
                    <DegIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{d.year}</span>
                  <h3 className="font-headline text-xl font-bold text-[#1a5f7a] mt-1 mb-1">{d.title}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-2">{d.institution}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{d.detail}</p>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Background */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">Education</span>
            <h2 className="font-headline text-3xl font-bold text-[#1a5f7a] mt-2">Academic Background</h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {education.map((e, i) => (
              <motion.div key={e.label} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a5f7a] to-[#2d9596] flex items-center justify-center text-white font-bold text-xs shrink-0">
                  {e.year.slice(-2)}
                </div>
                <div className="flex-grow">
                  <p className="font-headline text-lg font-bold text-[#1a5f7a]">{e.label}</p>
                  <p className="text-sm text-gray-500">{e.institution}</p>
                </div>
                <span className="text-sm font-bold text-[#2d9596] bg-[#e8f4f8] px-3 py-1 rounded-full">{e.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">Professional Bodies</span>
            <h2 className="font-headline text-3xl font-bold text-[#1a5f7a] mt-2">International Memberships</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {memberships.map((m, i) => {
              const MIcon = m.Icon;
              return (
              <motion.div key={m.short} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 rounded-2xl ${m.iconBg} flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform`}>
                  <MIcon className="w-8 h-8" />
                </div>
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${m.color} text-white text-xs font-bold mb-3`}>{m.short}</div>
                <h3 className="font-bold text-sm text-gray-800 mb-2 leading-snug">{m.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trainings & Workshops */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">Continuing Education</span>
            <h2 className="font-headline text-3xl font-bold text-[#1a5f7a] mt-2">Trainings & Workshops</h2>
          </div>
          <div className="space-y-3">
            {trainingsWorkshops.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#2d9596]/20 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#e8f4f8] flex items-center justify-center text-[#1a5f7a] font-bold text-xs shrink-0 group-hover:bg-[#1a5f7a] group-hover:text-white transition-colors">
                  {t.year.slice(-2)}
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-800 group-hover:text-[#1a5f7a] transition-colors">{t.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.org} · {t.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#f0f7fa] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">Expertise Areas</span>
            <h2 className="font-headline text-3xl font-bold text-[#1a5f7a] mt-2">Clinical Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((s, i) => (
              <motion.span key={s} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="px-4 py-2.5 rounded-full bg-[#e8f4f8] text-[#1a5f7a] text-sm font-semibold border border-[#2d9596]/20 hover:bg-[#1a5f7a] hover:text-white hover:border-transparent transition-all cursor-default shadow-sm">
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#1a5f7a] to-[#2d9596] text-white text-center">
        <h2 className="font-headline text-3xl font-bold mb-3">Trust Your Child to Expert Hands</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">Book a consultation with Dr. Zahid Ullah at G-8 Markaz, Islamabad — Mon to Fri.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fba58] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all active:scale-95">
          <MessageCircle className="w-6 h-6" />
          Book via WhatsApp
        </a>
      </section>
    </div>
  );
}
