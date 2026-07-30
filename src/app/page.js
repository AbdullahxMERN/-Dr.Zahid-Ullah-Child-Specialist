"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Award, 
  TrendingUp, 
  Activity, 
  Heart,
  Calendar,
  Building,
  Phone,
  MessageCircle,
  Baby,
  Shield,
  ExternalLink
} from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/923469297818?text=${encodeURIComponent("Hello Dr. Zahid, I'd like to book an appointment.")}`;

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Dr. Zahid, one of the finest child specialists I've ever met. I personally know him and consult him from the past few years. He is not just a best doctor but a good human being as well. His good demeanor and professionalism has made him visible and vibrant in his community. May Allah bless you with more than what you want and deserve. Regards ❤️",
      author: "Arshad Jamal",
      role: "Google Review",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWl2188c1D_Tor-0nloKD0Jdf8dz7ypIh17hDfeMt2VLrdzxBRtUw=w200-h200-p-rp-mo-br100",
      initials: "AJ"
    },
    {
      quote: "Dr. Zahid Ullah is an excellent child specialist. He is very professional, kind, and listens carefully to parents’ concerns. Highly recommended for children’s health.",
      author: "Junaidsomi Junaid",
      role: "Google Review",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWtiFqMucDOMrqLZg-SXfhLpvZmsVeVIuIIruoYFeQxfaQObX5VRQ=w200-h200-p-rp-mo-br100",
      initials: "JJ"
    },
    {
      quote: "Dr. Zahid is a highly competent and dedicated doctor. I have personally known him for his exceptional clinical skills and profound knowledge in his field. He carries himself as a true professional and stands as a valuable legacy in the medical profession.",
      author: "Asif Zia",
      role: "Google Review",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVK2ZcmON5BkPiK3A5qA5Aya1SGwiLHM_l6VjfFw6Rh1ccZNnF0=w200-h200-p-rp-mo-br100",
      initials: "AZ"
    },
    {
      quote: "Dr. Zahid, your dedication and care for my child have been a beacon of hope 💡. Alhamdolillah for doctors like you. 🕊️",
      author: "saqib khattak",
      role: "Google Review",
      avatar: null,
      initials: "SK"
    },
    {
      quote: "Dr is kind and well explanatory",
      author: "Engr Irfan Ullah",
      role: "Google Review",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWj4cbdu71S_4V8cc5xcxAXmTAC5hmi-Iawb4uGE2WTd40GlsQ=w200-h200-p-rp-mo-br100",
      initials: "IU"
    },
    {
      quote: "We are incredibly fortunate to have a consultant of Dr. Zahid Ullah’s caliber. Beyond his impressive credentials as an RMP, FCPS, and Pediatric Endocrinology Fellow, he possesses a wonderful, gentle manner that instantly puts children at ease. He takes the time to listen thoroughly, explain complex medical concepts in simple terms, and design precise treatment plans. His dedication as a child specialist goes far beyond the clinic walls—he truly cares about the long-term well-being and development of every child he treats.",
      author: "Wasim Ullah khan",
      role: "Google Review",
      avatar: null,
      initials: "WK"
    },
    {
      quote: "Extremely professional and best doc in Islamabad,best child specialist,strongly recommend for children in Islamabad,bestone",
      author: "Ahmad yousafzai",
      role: "Google Review",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWwpkFcvUx9WkQ705BIJCWwBTBb7HPHhmYRru8-_Qho97s-MrMC=w200-h200-p-rp-mo-br100",
      initials: "AY"
    },
    {
      quote: "Very talented and best Dr i have ever seen.",
      author: "Waqar Ahmad",
      role: "Google Review",
      avatar: null,
      initials: "WA"
    }
  ];

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "5000+", label: "Patients Treated" },
    { value: "25+", label: "Specialty Services" },
    { value: "4.9★", label: "Google Rating" },
  ];

  const specializations = [
    {
      icon: TrendingUp,
      title: "Growth Disorders",
      desc: "Expert evaluation for short/tall stature, growth hormone deficiency, and pubertal disorders.",
      color: "from-[#1a5f7a] to-[#2d9596]",
    },
    {
      icon: Activity,
      title: "Diabetes Management",
      desc: "Comprehensive Type 1 & 2 diabetes care with insulin pump therapy, CGM & modern protocols.",
      color: "from-[#0d9488] to-[#2d9596]",
    },
    {
      icon: Baby,
      title: "Neonatal Care",
      desc: "Complete newborn check-ups, jaundice management, infantile colic, and feeding issues.",
      color: "from-[#f59e0b] to-[#e67e22]",
    },
    {
      icon: Heart,
      title: "General Paediatrics",
      desc: "Routine consultations, respiratory infections, tonsillitis, anemia, fever, and chronic diseases.",
      color: "from-[#7c3aed] to-[#1a5f7a]",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#f0f7fa] via-white to-[#e8f4f8]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1a5f7a]/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#2d9596]/5 blur-[100px]" />
        </div>

        <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-16">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a5f7a]/10 text-[#1a5f7a] font-bold text-xs border border-[#1a5f7a]/20 shadow-sm">
              <Award className="w-4 h-4" />
              PIMS Islamabad · Pediatric Endocrinology Fellow
            </div>

            <div>
              <p className="text-[#2d9596] font-bold text-sm uppercase tracking-[0.15em] mb-2">Consultant Child Specialist</p>
              <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl text-[#1a5f7a] leading-[1.05] tracking-tight font-bold">
                Dr. Zahid<br />
                <span className="text-[#2d9596] italic font-normal">Ullah</span>
              </h1>
            </div>

            <p className="text-base text-gray-700 font-semibold leading-relaxed">
              MBBS · RMP · FCPS Paediatrics · Fellow Paediatrics Endocrinology
            </p>

            <p className="text-gray-500 leading-relaxed max-w-lg">
              Dedicated pediatric specialist delivering compassionate, evidence-based care for your child's growth, hormonal health, and overall wellbeing at Muhammad Medical Centre, G-8 Markaz, Islamabad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Link
                href="/appointment"
                className="flex items-center justify-center gap-2 bg-[#1a5f7a] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#154f67] shadow-lg shadow-[#1a5f7a]/20 hover:shadow-xl transition-all group active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#1fba58] shadow-lg transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Dr. Zahid
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-gray-200/60">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <span className="text-xs text-gray-600 font-bold">4.9 Google Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#2d9596]" />
                <span className="text-xs text-gray-600 font-bold">Verified Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2d9596]" />
                <span className="text-xs text-gray-600 font-bold">G-8 Markaz, Islamabad</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Doctor Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-[340px] sm:max-w-[400px] mx-auto lg:max-w-none mt-6 lg:mt-0"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Premium responsive container: Aspect 3:4 on both mobile and desktop */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl aspect-[3/4] bg-gradient-to-br from-[#1a5f7a] to-[#2d9596]">
                <img
                  src="/dr-zahid.jpg"
                  alt="Dr. Zahid Ullah – Consultant Pediatrician"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Badge Top Right */}
              <motion.div
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-6 -right-2 sm:-right-4 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 z-20"
              >
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#1a5f7a]/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a5f7a]" />
                  </div>
                  <div>
                    <p className="font-headline text-lg sm:text-xl font-bold text-[#1a5f7a] leading-none">5000+</p>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 font-semibold mt-0.5">Patients Treated</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge Bottom Left */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-2 sm:-left-4 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 z-20 max-w-[180px] sm:max-w-[200px]"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#25D366] uppercase tracking-widest">Available Now</span>
                </div>
                <p className="text-xs sm:text-sm font-headline font-bold text-[#1a5f7a] mt-1">Mon – Fri</p>
                <p className="text-[10px] sm:text-[11px] text-gray-400 leading-snug">G-8 Markaz, Islamabad</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#1a5f7a] py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-headline text-3xl font-bold text-white">{s.value}</p>
              <p className="text-white/70 text-xs font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">
            Expertise &amp; Specializations
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#1a5f7a]">
            What We Treat
          </h2>
          <div className="w-16 h-1.5 bg-[#2d9596] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col gap-5"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-headline text-lg font-bold text-[#1a5f7a] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
                <Link href="/services" className="text-[#2d9596] font-bold text-sm flex items-center gap-1 group-hover:text-[#1a5f7a] transition-colors">
                  View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-[#2d9596] font-bold text-xs uppercase tracking-widest">
              Grateful Parents
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#1a5f7a]">
              Patient Reviews (4.9 Rating)
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrevTestimonial}
              className="w-12 h-12 rounded-full border border-gray-200 text-[#1a5f7a] flex items-center justify-center hover:bg-[#1a5f7a] hover:text-white transition-all shadow-sm active:scale-90"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="w-12 h-12 rounded-full border border-gray-200 text-[#1a5f7a] flex items-center justify-center hover:bg-[#1a5f7a] hover:text-white transition-all shadow-sm active:scale-90"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-md"
            >
              <div className="flex gap-1 text-[#f59e0b] mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[#f59e0b]" />
                ))}
              </div>
              <p className="font-headline text-lg md:text-xl italic text-gray-700 leading-relaxed mb-6">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                {testimonials[activeTestimonial].avatar ? (
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].author}
                    className="w-11 h-11 rounded-full object-cover shrink-0 shadow-sm border border-gray-100"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1a5f7a] to-[#2d9596] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                    {testimonials[activeTestimonial].initials}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-[#1a5f7a] text-sm">{testimonials[activeTestimonial].author}</h4>
                  <p className="text-xs text-gray-400 font-medium">{testimonials[activeTestimonial].role}</p>
                </div>
                <div className="ml-auto">
                  <Link
                    href="/reviews"
                    className="text-xs text-[#2d9596] font-bold flex items-center gap-1 hover:text-[#1a5f7a]"
                  >
                    View All Reviews <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#1a5f7a] via-[#1d6e85] to-[#2d9596] text-white relative overflow-hidden text-center">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Prioritize Your Child's Health Today
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Get professional guidance, diagnostics, and customized treatment plans at Muhammad Medical Centre, G-8 Markaz, Islamabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Link
              href="/appointment"
              className="w-full sm:w-auto bg-white text-[#1a5f7a] px-10 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg"
            >
              Schedule Appointment
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1fba58] text-white px-10 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp: 0346 9297818
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
