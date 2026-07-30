"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Stethoscope, Menu, X, Calendar, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/923469297818?text=${encodeURIComponent("Hello Dr. Zahid, I'd like to book an appointment.")}`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Qualifications", href: "/qualifications" },
    { name: "Services", href: "/services" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
    { name: "Appointment", href: "/appointment" },
  ];

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-200 ${
      isScrolled
        ? "bg-white/97 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
        : "bg-white/90 backdrop-blur-sm py-4 border-b border-gray-100/50"
    }`}>
      <nav className="flex justify-between items-center px-5 md:px-12 max-w-7xl mx-auto">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1a5f7a] to-[#2d9596] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-headline text-lg font-bold text-[#1a5f7a] block leading-none">Dr. Zahid Ullah</span>
            <span className="text-[10px] text-[#2d9596] font-semibold">Child Specialist &amp; Endocrinologist</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex gap-6 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  isActive ? "text-[#1a5f7a]" : "text-gray-600 hover:text-[#1a5f7a]"
                }`}>
                {link.name}
                {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2d9596] rounded-full" />}
              </Link>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#25D366] text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-[#1fba58] transition-all shadow-md">
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </a>
          <Link href="/appointment"
            className="flex items-center gap-1.5 bg-[#1a5f7a] text-white px-5 py-2 rounded-full font-bold text-xs hover:bg-[#154f67] transition-all shadow-md">
            <Calendar className="w-3.5 h-3.5" />
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-[#1a5f7a] p-2" aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-200 xl:hidden ${
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        <div className="flex flex-col p-6 gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                className={`font-semibold text-base py-3 px-3 rounded-xl transition-colors ${
                  isActive ? "text-[#1a5f7a] bg-[#e8f4f8]" : "text-gray-600 hover:text-[#1a5f7a] hover:bg-gray-50"
                }`}>
                {link.name}
              </Link>
            );
          })}
          <div className="flex gap-3 mt-3 pt-3 border-t border-gray-100">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <Link href="/appointment" onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1a5f7a] text-white py-3 rounded-xl font-bold text-sm">
              <Calendar className="w-4 h-4" /> Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
