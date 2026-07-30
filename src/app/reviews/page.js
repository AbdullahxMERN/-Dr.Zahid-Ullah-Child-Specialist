"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

const WHATSAPP_LINK = `https://wa.me/923469297818?text=${encodeURIComponent("Hello Dr. Zahid, I'd like to book an appointment.")}`;
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sca_esv=ce761633f93c9f1e&sxsrf=APpeQntHNbV8OO8j7_0VnMSO2pUv8txUIA:1785387876809&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_7VT-J5ObkQdH7eWRswsuBpa4aCq66U9KfmdperaqoCM6SRip9j8D2f1V8UAsNVlGMmL7-iaI0a56jVthGyZxWYnubJRjU24moQXGMFukPPRAmlSBFM0mjexizTthCjmeanMdJdn4L7vyQbmWKPGNvHeJ25QXW2lcVsqAI4LwklcVS08SjhO79ALNHb5OZdBZfyOQizgHeJfRUC6TmbpjHBfJf6z&q=Dr.Zahid+Ullah+MBBS,+RMP,+FCPS+PEADS+,+Fellow+Paediatrics+Endocrinology+Consultant+Child+Specialist+Reviews&sa=X&ved=2ahUKEwiqtbuR0PmVAxW93wIHHVFmCUYQ0bkNegQINxAH&biw=1920&bih=953&dpr=1";

const reviews = [
  {
    name: "Arshad Jamal",
    initials: "AJ",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWl2188c1D_Tor-0nloKD0Jdf8dz7ypIh17hDfeMt2VLrdzxBRtUw=w200-h200-p-rp-mo-br100",
    text: "Dr. Zahid, one of the finest child specialists I've ever met. I personally know him and consult him from the past few years. He is not just a best doctor but a good human being as well. His good demeanor and professionalism has made him visible and vibrant in his community. May Allah bless you with more than what you want and deserve. Regards ❤️",
  },
  {
    name: "Junaidsomi Junaid",
    initials: "JJ",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWtiFqMucDOMrqLZg-SXfhLpvZmsVeVIuIIruoYFeQxfaQObX5VRQ=w200-h200-p-rp-mo-br100",
    text: "Dr. Zahid Ullah is an excellent child specialist. He is very professional, kind, and listens carefully to parents’ concerns. Highly recommended for children’s health.",
  },
  {
    name: "Asif Zia",
    initials: "AZ",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVK2ZcmON5BkPiK3A5qA5Aya1SGwiLHM_l6VjfFw6Rh1ccZNnF0=w200-h200-p-rp-mo-br100",
    text: "Dr. Zahid is a highly competent and dedicated doctor. I have personally known him for his exceptional clinical skills and profound knowledge in his field. He carries himself as a true professional and stands as a valuable legacy in the medical profession.",
  },
  {
    name: "Saqib Khattak",
    initials: "SK",
    avatar: null,
    text: "Dr. Zahid, your dedication and care for my child have been a beacon of hope 💡. Alhamdolillah for doctors like you. 🕊️",
  },
  {
    name: "Engr Irfan Ullah",
    initials: "IU",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWj4cbdu71S_4V8cc5xcxAXmTAC5hmi-Iawb4uGE2WTd40GlsQ=w200-h200-p-rp-mo-br100",
    text: "Dr is kind and well explanatory",
  },
  {
    name: "Wasim Ullah Khan",
    initials: "WK",
    avatar: null,
    text: "We are incredibly fortunate to have a consultant of Dr. Zahid Ullah’s caliber. Beyond his impressive credentials as an RMP, FCPS, and Pediatric Endocrinology Fellow, he possesses a wonderful, gentle manner that instantly puts children at ease. He takes the time to listen thoroughly, explain complex medical concepts in simple terms, and design precise treatment plans. His dedication as a child specialist goes far beyond the clinic walls—he truly cares about the long-term well-being and development of every child he treats.",
  },
  {
    name: "Ahmad Yousafzai",
    initials: "AY",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWwpkFcvUx9WkQ705BIJCWwBTBb7HPHhmYRru8-_Qho97s-MrMC=w200-h200-p-rp-mo-br100",
    text: "Extremely professional and best doc in Islamabad,best child specialist,strongly recommend for children in Islamabad,bestone",
  },
  {
    name: "Waqar Ahmad",
    initials: "WA",
    avatar: null,
    text: "Very talented and best Dr i have ever seen.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-[#1a5f7a] via-[#1d6e85] to-[#2d9596] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#f59e0b] blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest mb-4">
              Patient Testimonials
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Patient Reviews
            </h1>

            {/* Rating Summary */}
            <div className="inline-flex items-center gap-6 bg-white/10 border border-white/20 rounded-2xl px-8 py-4 mt-3 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="font-headline text-4xl font-bold text-white">4.9</span>
                <div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <p className="text-white/80 text-xs font-semibold mt-0.5">Google Verified Rating</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-6 md:px-16 bg-[#f9fbfc]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    {r.avatar ? (
                      <div className="relative shrink-0">
                        <img
                          src={r.avatar}
                          alt={r.name}
                          className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white ring-2 ring-[#2d9596]/20 group-hover:ring-[#2d9596]/50 transition-all"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a5f7a] to-[#2d9596] flex items-center justify-center text-white font-bold text-lg shadow-md border-2 border-white ring-2 ring-[#2d9596]/20">
                          {r.initials || r.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="flex-grow min-w-0">
                      <p className="font-bold text-sm text-gray-800 truncate">{r.name}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#34A853]"></span>
                        Google Review · Verified
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Write / Add Review Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-br from-[#f0f7fa] to-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#1a5f7a] mb-3">Leave a Google Review</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your feedback helps other parents choose the right care for their children. Click below to add your review on Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#1a5f7a] hover:bg-[#154f67] text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg transition-all active:scale-95"
            >
              <Star className="w-4 h-4 fill-white" />
              Write Google Review
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2.5 bg-[#1DAA61] hover:bg-[#17964f] text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
