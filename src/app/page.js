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
const MAPS_LINK = "https://maps.google.com/?q=Muhammad+Medical+Centre+G8+Markaz+Islamabad";

// ─── Count-up hook (module-level = stable, never remounts) ────────────────────
function useCountUp(end, duration = 1800, decimal = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      const current = eased * end;
      setCount(decimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty deps = fires once on mount, never again
  return count;
}

function StatCounter({ stat }) {
  const count = useCountUp(stat.end, stat.end >= 1000 ? 2000 : 1400, stat.decimal);
  return (
    <div className="text-center">
      <p className="font-headline text-lg sm:text-3xl font-bold text-white tabular-nums">
        {count}{stat.suffix}
      </p>
      <p className="text-white/70 text-[10px] sm:text-xs font-medium mt-0.5 sm:mt-1 leading-tight">{stat.label}</p>
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

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
    { end: 10,   suffix: "+", label: "Years Experience" },
    { end: 5000, suffix: "+", label: "Patients Treated" },
    { end: 25,   suffix: "+", label: "Specialty Services" },
    { end: 4.9,  suffix: "★", label: "Google Rating", decimal: true },
  ];


  const specializations = [
    {
      icon: TrendingUp,
      title: "Growth Disorders",
      desc: "Expert evaluation for short/tall stature, growth hormone deficiency, and pubertal disorders.",
      color: "bg-teal-50 border border-teal-100 text-teal-600 shadow-teal-100/50",
    },
    {
      icon: Activity,
      title: "Diabetes Management",
      desc: "Comprehensive Type 1 & 2 diabetes care with insulin pump therapy, CGM & modern protocols.",
      color: "bg-emerald-50 border border-emerald-100 text-emerald-600 shadow-emerald-100/50",
    },
    {
      icon: Baby,
      title: "Neonatal Care",
      desc: "Complete newborn check-ups, jaundice management, infantile colic, and feeding issues.",
      color: "bg-pink-50 border border-pink-100 text-pink-600 shadow-pink-100/50",
    },
    {
      icon: Heart,
      title: "General Paediatrics",
      desc: "Routine consultations, respiratory infections, tonsillitis, anemia, fever, and chronic diseases.",
      color: "bg-purple-50 border border-purple-100 text-purple-600 shadow-purple-100/50",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#f0f7fa] via-white to-[#e8f4f8]">
        <div className="absolute inset-0 z-0 pointer-events-none" />

        <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-9">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-7"
          >
        

            <div>
              <p className="text-[#2d9596] font-bold text-sm uppercase tracking-[0.15em] mb-2">Consultant Child Specialist</p>
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-7xl text-[#1a5f7a] leading-[1.05] tracking-tight font-bold">
                Dr. Zahid<br />
                <span className="text-[#2d9596] italic font-normal">Ullah</span>
              </h1>
            </div>

            <p className="text-base text-gray-700 font-semibold leading-relaxed">
              MBBS · RMP · FCPS Paediatrics · Fellow Paediatrics Endocrinology
            </p>

            <p className="text-gray-500 leading-relaxed max-w-lg">
              Dedicated pediatric specialist delivering compassionate, evidence-based care for your child's growth, hormonal health, and overall wellbeing at Muhammad Medical Centre & Health Next Hospital, G-8 Markaz, Islamabad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Link
                href="/appointment"
                className="flex items-center justify-center gap-2 bg-[#1a5f7a] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#154f67] shadow-lg shadow-[#1a5f7a]/20 hover:shadow-xl transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1DAA61] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#17964f] shadow-lg transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Dr. Zahid
              </a>
            </div>

          
          </motion.div>

          {/* Right — Doctor Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[370px] xl:max-w-[390px] mx-auto lg:ml-auto mt-16 sm:mt-10 lg:mt-0"
          >
            <div className="relative mx-auto w-full">
              {/* Premium responsive container: Aspect 4:5 to show more details and prevent vertical overflow */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl aspect-[4/5] bg-gradient-to-br from-[#1a5f7a] to-[#2d9596]">
                <img
                  src="/dr-zahid.jpg"
                  alt="Dr. Zahid Ullah – Consultant Pediatrician"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Badge Top Right — compact size sits in corner above/beside face */}
              <motion.div
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-3 -right-3 sm:-right-4 bg-white p-1.5 sm:p-3 rounded-lg sm:rounded-2xl shadow-xl border border-gray-100 z-20"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-md sm:rounded-xl bg-[#1a5f7a]/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#1a5f7a]" />
                  </div>
                  <div>
                    <p className="font-headline text-xs sm:text-base font-bold text-[#1a5f7a] leading-none">5000+</p>
                    <p className="text-[7px] sm:text-[10px] text-gray-400 font-semibold mt-0.5">Patients Treated</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge Bottom Left — Available Now */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-2 sm:-left-4 bg-white p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 z-20 max-w-[140px] sm:max-w-[180px]"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1DAA61] animate-pulse shrink-0" />
                  <p className="text-xs sm:text-sm font-headline font-bold text-[#1a5f7a]">Mon – Fri</p>
                </div>
                <p className="text-[9px] sm:text-[10px] text-gray-400 leading-snug mt-0.5">G-8 Markaz, Islamabad</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#1a5f7a] py-5 sm:py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-4 gap-2 sm:gap-6">
          {stats.map((s) => (
            <StatCounter key={s.label} stat={s} />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specializations.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                whileTap={{ scale: 0.97 }}
                className="bg-white border border-[#1a5f7a]/15 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 cursor-pointer active:scale-[0.97]"
                style={{ boxShadow: "0 4px 6px -1px rgba(0,0,0,0.06), 0 20px 40px -8px rgba(0,0,0,0.16), 0 10px 15px -3px rgba(0,0,0,0.08)" }}
              >
                <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-headline text-base sm:text-lg font-bold text-[#1a5f7a] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
                <Link href="/services" className="text-[#2d9596] font-bold text-sm flex items-center gap-1 hover:text-[#1a5f7a] transition-colors">
                  View All Services <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>
              </motion.div>
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

      {/* GOOGLE MAP SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-white to-[#f0f7fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#2d9596] font-bold text-xs uppercase tracking-[0.2em]">
                Convenient Location
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#1a5f7a]">
                Visit Our Clinic
              </h2>
              <div className="w-16 h-1.5 bg-[#2d9596] rounded-full mt-2" />
              
              <p className="text-gray-500 leading-relaxed">
                Dr. Zahid Ullah consults at **Muhammad Medical Centre** & **Health Next Hospital**, centrally located in the heart of Islamabad at G-8 Markaz. The clinics are easily accessible with ample parking space.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1a5f7a]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1a5f7a]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1a5f7a]">Clinic Address</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Muhammad Medical Centre / Health Next Hospital, G-8 Markaz, Islamabad, Pakistan</p>
                    <p className="text-xs text-[#2d9596] font-bold mt-1">PMDC No: 21927-N</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1a5f7a]/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-[#1a5f7a]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1a5f7a]">Timings &amp; Availability</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Monday – Friday</p>
                    <p className="text-xs text-gray-400 mt-0.5">(Saturday &amp; Sunday Closed)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1a5f7a] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#154f67] shadow-lg shadow-[#1a5f7a]/20 hover:shadow-xl transition-all active:scale-95"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
                <Link
                  href="/appointment"
                  className="flex items-center justify-center gap-2 border border-[#1a5f7a]/30 text-[#1a5f7a] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#1a5f7a]/5 transition-all active:scale-95"
                >
                  Book an Appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100/80 overflow-hidden p-4 md:p-6">
                <div className="rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-inner relative aspect-[16/10] md:aspect-[16/9]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.8!2d73.0479!3d33.6932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef9b6b8f6b1%3A0x0!2sMuhammad+Medical+Centre%2C+G8+Markaz%2C+Islamabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Muhammad Medical Centre Location Map"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#1a5f7a] via-[#1d6e85] to-[#2d9596] text-white relative overflow-hidden text-center">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Prioritize Your Child's Health Today
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            Get professional guidance, diagnostics, and customized treatment plans at Muhammad Medical Centre / Health Next Hospital, G-8 Markaz, Islamabad.
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
              className="w-full sm:w-auto bg-[#1DAA61] hover:bg-[#17964f] text-white px-10 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp: 0346 9297818
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
