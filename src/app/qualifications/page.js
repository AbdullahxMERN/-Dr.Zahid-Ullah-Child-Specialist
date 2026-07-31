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
    badgeBg: "bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-indigo-100/50",
    current: true,
    detail: "Specialized sub-fellowship in growth disorders, Type 1 Diabetes management, and advanced endocrine dynamic testing."
  },
  {
    title: "FCPS Paediatrics",
    institution: "College of Physicians & Surgeons Pakistan",
    year: "Postgraduate Specialization",
    Icon: Medal,
    badgeBg: "bg-teal-50 border border-teal-100 text-teal-600 shadow-teal-100/50",
    current: false,
    detail: "Full Fellowship in Paediatrics, covering neonatal, acute and chronic paediatric conditions."
  },
  {
    title: "RMP",
    institution: "Registered Medical Practitioner – PMC Reg #: 216371-N",
    year: "Medical Licensing",
    Icon: ClipboardList,
    badgeBg: "bg-sky-50 border border-sky-100 text-sky-600 shadow-sky-100/50",
    current: false,
    detail: "Licensed to practice medicine in Pakistan under PMC guidelines."
  },
  {
    title: "MBBS",
    institution: "Ayub Medical College, Khyber Medical University, Peshawar",
    year: "2013",
    Icon: GraduationCap,
    badgeBg: "bg-purple-50 border border-purple-100 text-purple-600 shadow-purple-100/50",
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
  { name: "Pakistan Paediatrics Association", short: "PPA", Icon: Users, desc: "National professional body for pediatric medicine in Pakistan.", iconBg: "bg-emerald-50 border border-emerald-100 text-emerald-600 shadow-emerald-100/50" },
  { name: "International Society for Pediatric & Adolescent Diabetes", short: "ISPAD", Icon: Globe2, desc: "Global leader in pediatric and adolescent diabetes research and care.", iconBg: "bg-blue-50 border border-blue-100 text-blue-600 shadow-blue-100/50" },
  { name: "European Society for Paediatric Endocrinology", short: "ESPE", Icon: Award, desc: "Europe's foremost authority in pediatric endocrinology standards.", iconBg: "bg-purple-50 border border-purple-100 text-purple-600 shadow-purple-100/50" },
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
        <div className="absolute inset-0 opacity-10" />
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
      <section className="py-24 px-6 md:px-16 bg-[#fafcff]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">Academic Journey</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#1a5f7a] mt-2">Degrees &amp; Certifications</h2>
            <div className="w-16 h-1.5 bg-[#2d9596] mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {degrees.map((d, i) => {
              const DegIcon = d.Icon;
              return (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative bg-white rounded-3xl border border-gray-100 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between overflow-hidden"
                >
                  {/* Top decorative line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2d9596] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Radial background glow on hover */}
                  <div className="absolute right-0 top-0 w-40 h-40 rounded-full bg-[#1a5f7a]/2 blur-3xl pointer-events-none group-hover:bg-[#2d9596]/5 transition-colors duration-500" />
                  
                  <div className="space-y-5 relative z-10">
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${d.badgeBg} shadow-sm flex items-center justify-center shrink-0`}>
                        <DegIcon className="w-6 h-6" />
                      </div>
                      {d.current && (
                        <span className="px-3 py-1 rounded-full bg-[#2d9596]/10 text-[#2d9596] text-[10px] font-extrabold uppercase tracking-wider border border-[#2d9596]/20">
                          Current Specialization
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#2d9596]">
                        {d.year}
                      </span>
                      <h3 className="font-headline text-xl md:text-2xl font-bold text-[#1a5f7a] leading-tight">
                        {d.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-semibold leading-relaxed">
                        {d.institution}
                      </p>
                    </div>

                    <p className="text-xs text-gray-400 leading-relaxed font-medium pt-3 border-t border-gray-100">
                      {d.detail}
                    </p>
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
          <div className="relative max-w-3xl mx-auto pl-8 border-l-2 border-dashed border-[#2d9596]/30 space-y-8 py-2">
             {education.map((e, i) => (
              <motion.div 
                key={e.label} 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline node dot */}
                <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white bg-[#1a5f7a] shadow-[0_0_0_4px_rgba(26,95,122,0.1)] z-10" />

                {/* Card Content */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm md:hover:shadow-md transition-all">
                  <div>
                    <p className="font-headline text-lg font-bold text-[#1a5f7a]">{e.label}</p>
                    <p className="text-sm text-gray-500 mt-1">{e.institution}</p>
                  </div>
                  <span className="text-sm font-bold text-[#2d9596] bg-[#e8f4f8] px-4 py-1.5 rounded-full shrink-0 w-fit">{e.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-[#fafcff] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">Professional Bodies</span>
            <h2 className="font-headline text-3xl font-bold text-[#1a5f7a] mt-2">International Memberships</h2>
            <div className="w-16 h-1.5 bg-[#2d9596] mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberships.map((m, i) => {
              const MIcon = m.Icon;
              return (
                <motion.div
                  key={m.short}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative bg-white rounded-3xl border-2 border-[#1a5f7a]/20 p-8 text-center shadow-[0_4px_24px_rgba(26,95,122,0.10)] md:hover:shadow-[0_12px_40px_rgba(26,95,122,0.18)] md:hover:border-[#2d9596]/50 md:hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col items-center overflow-hidden"
                >
                  {/* Top decorative line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2d9596] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Radial background glow on hover */}
                  <div className="absolute right-0 top-0 w-32 h-32 rounded-full bg-[#1a5f7a]/2 blur-3xl pointer-events-none group-hover:bg-[#2d9596]/5 transition-colors duration-500" />
                  
                  <div className="space-y-4 relative z-10 w-full flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-2xl ${m.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
                      <MIcon className="w-6 h-6" />
                    </div>
                    
                    <div className="inline-block px-3 py-1 rounded-full bg-[#2d9596]/10 text-[#2d9596] border border-[#2d9596]/20 text-[10px] font-extrabold uppercase tracking-wider">
                      {m.short}
                    </div>
                    
                    <h3 className="font-headline text-base font-bold text-[#1a5f7a] leading-snug group-hover:text-[#2d9596] transition-colors duration-300">
                      {m.name}
                    </h3>
                    
                    <p className="text-xs text-gray-400 leading-relaxed font-medium pt-4 border-t border-gray-100/80 w-full">
                      {m.desc}
                    </p>
                  </div>
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
          <div className="space-y-4">
            {trainingsWorkshops.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative flex items-start gap-4 p-5 pl-7 bg-white rounded-2xl border border-gray-100 shadow-sm md:hover:shadow-md md:hover:border-[#2d9596]/20 transition-all overflow-hidden"
              >
                {/* Vertical colored strip for visual highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#1a5f7a] to-[#2d9596]" />
                
                <div>
                  <p className="font-bold text-sm text-gray-800 md:group-hover:text-[#1a5f7a] transition-colors">{t.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{t.org} · {t.year}</p>
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
                className="px-4 py-2.5 rounded-full bg-[#e8f4f8] text-[#1a5f7a] text-sm font-semibold border border-[#2d9596]/20 md:hover:bg-[#1a5f7a] md:hover:text-white md:hover:border-transparent transition-all cursor-default shadow-sm">
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
          className="inline-flex items-center gap-2 bg-[#1DAA61] hover:bg-[#17964f] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all active:scale-95">
          <MessageCircle className="w-6 h-6" />
          Book via WhatsApp
        </a>
      </section>
    </div>
  );
}
