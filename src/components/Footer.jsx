"use client";

import Link from "next/link";
import {
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Calendar,
  Clock,
} from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/923469297818?text=${encodeURIComponent("Hello Dr. Zahid, I'd like to book an appointment.")}`;

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.18 8.18 0 004.78 1.52V6.73a4.85 4.85 0 01-1.01-.04z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0d3a4d] pt-16 pb-8 px-6 md:px-16 border-t border-[#1a5f7a]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="space-y-5 lg:col-span-1">
          <div>
            <span className="font-headline text-2xl font-bold text-white">
              Dr. Zahid Ullah
            </span>
            <p className="text-xs text-[#2d9596] font-semibold mt-0.5">
              MBBS · RMP · FCPS Paediatrics · Fellow Paeds Endocrinology
            </p>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            Consultant Paediatrician &amp; Pediatric Endocrinologist dedicated
            to advancing children's health with compassion and clinical
            excellence in Islamabad.
          </p>
          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/share/1G26hGSkQx/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-md"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.tiktok.com/@zahidullah216?_r=1&_t=ZS-98RQVmM78vy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-md"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-md"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3.5">
            {[
              { label: "Home", href: "/" },
              { label: "About Dr. Zahid", href: "/about" },
              { label: "Qualifications", href: "/qualifications" },
              { label: "Medical Services", href: "/services" },
              { label: "Patient Reviews (4.9⭐)", href: "/reviews" },
              { label: "Frequently Asked Questions", href: "/faq" },
              { label: "Book Appointment", href: "/appointment" },
              { label: "Contact Us", href: "/contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group font-medium"
                >
                  {l.label}{" "}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-5">
            Clinic Info
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#2d9596] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-wide mb-1">
                  Clinic Location
                </p>
                <span className="text-sm text-white/80 font-semibold">
                  Muhammad Medical Centre
                </span>
                <span className="block text-xs text-white/60">
                  G-8 Markaz, Islamabad
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#2d9596] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-wide mb-1">
                  Phone Numbers
                </p>
                <a
                  href="tel:0512340508"
                  className="block text-sm text-white/70 hover:text-white font-medium"
                >
                  051-2340508
                </a>
                <a
                  href="tel:+923265557795"
                  className="block text-sm text-white/70 hover:text-white font-medium"
                >
                  +92 326 5557795
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-wide mb-1">
                  Doctor WhatsApp
                </p>
                <a
                  href="https://wa.me/923469297818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white font-medium"
                >
                  0346 9297818
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#2d9596] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-wide mb-1">
                  Appointment Days
                </p>
                <p className="text-sm text-white/70 font-semibold">
                  Monday – Friday
                </p>
                <p className="text-xs text-red-400 font-medium">
                  Saturday &amp; Sunday: Closed
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Appointment CTA */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider">
            Appointment Request
          </h4>
          <p className="text-sm text-white/60 leading-relaxed">
            Fill out our appointment form or chat directly with Dr. Zahid's team
            on WhatsApp.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fba58] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-md w-full justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp: 0346 9297818
          </a>
          <Link
            href="/appointment"
            className="flex items-center gap-2 bg-[#1a5f7a] hover:bg-[#2d9596] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-md w-full justify-center"
          >
            <Calendar className="w-4 h-4" />
            Online Appointment Form
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>
          © {new Date().getFullYear()} Dr. Zahid Ullah — Pediatric Endocrinology
          Specialist, Islamabad.
        </p>
        <div className="flex gap-6">
          <Link
            href="/contact"
            className="hover:text-white/60 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            className="hover:text-white/60 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
