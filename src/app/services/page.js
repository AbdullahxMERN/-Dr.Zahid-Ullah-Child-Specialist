"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const WHATSAPP_NUMBER = "923469297818";

/* ─── 3 CATEGORY ACCENT COLORS (PROFESSIONAL & SUBTLE) ─── */
const CAT_STYLE = {
  "Neonatal Care": {
    accent: "#0369a1",
    light: "#f0f9ff",
    border: "#e0f2fe",
  },
  "Endocrinology & Growth": {
    accent: "#0f766e",
    light: "#f0fdfa",
    border: "#ccfbf1",
  },
  "Infectious & General Paediatrics": {
    accent: "#1a5f7a",
    light: "#f0f9ff",
    border: "#e2eef4",
  },
};

/* ─── MEDICAL SVG ICONS ─── */
const IconNewborn = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
    <path d="M9 5.5C9 4.1 10.3 3 12 3s3 1.1 3 2.5" />
  </svg>
);
const IconColic = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3C8.7 3 6 5.7 6 9c0 2 .9 3.7 2.3 4.8L7 21h10l-1.3-7.2C17.1 12.7 18 11 18 9c0-3.3-2.7-6-6-6z" />
    <path d="M9.5 9.5c.5-1 1.5-1.5 2.5-1.5M10 13h4" />
  </svg>
);
const IconJaundice = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v2M12 16v2M6 12h2M16 12h2" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const IconGrowth = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 20l4-8 4 4 4-6 4 5" />
    <path d="M7 20V10M11 20v-4M15 20v-7M19 20v-5" />
  </svg>
);
const IconThyroid = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="9" cy="13" rx="3.5" ry="4.5" />
    <ellipse cx="15" cy="13" rx="3.5" ry="4.5" />
    <path d="M9 8.5C9 7 10 6 12 6s3 1 3 2.5M12 6V4M10 4h4" />
  </svg>
);
const IconObesity = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="2" />
    <path d="M7 10c0-2.8 2.2-5 5-5s5 2.2 5 5v3c0 1.5-.6 2.9-1.7 3.9L14 21H10l-.3-4.1C8.6 15.9 8 14.5 8 13v-3z" />
    <path d="M10 13h4M9 16h6" />
  </svg>
);
const IconHormone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4M8 9l4 2 4-2" />
    <circle cx="6" cy="15" r="2" />
    <circle cx="18" cy="15" r="2" />
    <path d="M8 11l-2 4M16 11l2 4M6 17v2h2M18 17v2h-2" />
  </svg>
);
const IconDiabetes = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l2.5 6H20l-5 3.5 2 6L12 14l-5 3.5 2-6L4 8h5.5L12 2z" />
    <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9 19h6M11 19v2M13 19v2" />
  </svg>
);
const IconBone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 3a2 2 0 0 1 2 2c0 .7-.3 1.3-.8 1.7L12 12l4.8-5.3A2 2 0 1 1 19 8.5l-5 5.5 2.5 2.8a2 2 0 1 1-1.5 1.2L12 15l-3 3.5a2 2 0 1 1-1.5-1.2L10 14.5 5 9A2 2 0 1 1 6 3z" />
  </svg>
);
const IconLiver = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12c0-5 4-9 9-9 3 0 5.5 1.5 7 4 .5 1 .8 2 .8 3 0 4.5-3.5 8-7.8 8C8 18 3 15.5 3 12z" />
    <path d="M8 12c1-2 3-3 5-3M13 9c1.5 0 3 .5 4 1.5M7 15c1.5 1.5 4 2 6 1M12 18v3" />
  </svg>
);
const IconLung = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v8" />
    <path d="M12 11c-2 0-5 1.5-5 5 0 2 1.5 3 3 3s3-1 3-3" />
    <path d="M12 11c2 0 5 1.5 5 5 0 2-1.5 3-3 3s-3-1-3-3" />
    <path d="M7 16c-.5 1-1 1.5-1 2M17 16c.5 1 1 1.5 1 2" />
  </svg>
);
const IconGut = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 4c0 0 2 1 2 3s-2 3-2 5 2 4 4 4 4-2 4-4-2-3-2-5 2-3 2-5" />
    <path d="M14 4c0 0 2 1 2 3s-2 3-2 5 2 4 4 4" />
    <path d="M4 16c0 2 1.5 4 4 4h8c2.5 0 4-2 4-4" />
  </svg>
);
const IconThroat = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3C9.5 3 7 5 7 8c0 1.5.5 2.8 1.5 3.8" />
    <path d="M12 3c2.5 0 5 2 5 5 0 1.5-.5 2.8-1.5 3.8" />
    <path d="M8.5 11.8C9 13 10 14 12 14s3-1 3.5-2.2" />
    <ellipse cx="9" cy="9" rx="1.2" ry="1.5" />
    <ellipse cx="15" cy="9" rx="1.2" ry="1.5" />
    <path d="M12 14v4M10 18c0 1 1 2 2 2s2-1 2-2" />
  </svg>
);
const IconBlood = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3L6 12a6 6 0 1 0 12 0L12 3z" />
    <path d="M12 9v4M10 13h4" />
    <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const IconBrain = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.5 2A3.5 3.5 0 0 0 6 5.5c0 .5.1 1 .3 1.4A3.5 3.5 0 0 0 4 10c0 1.3.7 2.4 1.7 3A3.5 3.5 0 0 0 7 19.5c.8 0 1.6-.3 2.2-.8" />
    <path d="M14.5 2A3.5 3.5 0 0 1 18 5.5c0 .5-.1 1-.3 1.4A3.5 3.5 0 0 1 20 10c0 1.3-.7 2.4-1.7 3A3.5 3.5 0 0 1 17 19.5c-.8 0-1.6-.3-2.2-.8" />
    <path d="M12 2v20" />
    <path d="M6.3 6.9S8 8 9.5 8M17.7 6.9S16 8 14.5 8M5.7 13S8 14 9.5 14M18.3 13S16 14 14.5 14" />
  </svg>
);
const IconMouth = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 9c0-3 2-5 5-5s5 2 5 5" />
    <path d="M6 12c0 4 2.5 7 6 7s6-3 6-7M6 12h12" />
    <path d="M9 12v3M12 12v4M15 12v3" />
  </svg>
);
const IconScale = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v18M8 21h8M12 6l-4 4h8l-4-4z" />
    <path d="M6 10l-2 5h4l-2-5zM18 10l-2 5h4l-2-5z" />
    <path d="M4 15h4M16 15h4" />
  </svg>
);
const IconVirus = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    <circle
      cx="12"
      cy="12"
      r="2"
      fill="currentColor"
      opacity="0.25"
      stroke="none"
    />
  </svg>
);
const IconKidney = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 4C5.5 4 4 6.5 4 9c0 4 2 7 5 8l1 3h4l1-3c3-1 5-4 5-8 0-2.5-1.5-5-4-5-1.5 0-2.7.8-3 2-.3-1.2-1.5-2-3-2z" />
    <path d="M12 9c0 2-1 4-2 5" />
  </svg>
);
const IconSkin = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
    <circle cx="8" cy="10" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="12" cy="8" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="10" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="15" cy="14" r="1.2" fill="currentColor" stroke="none" />
    <path d="M8.5 17.5c1-1 5-1 7 0" />
  </svg>
);
const IconPoop = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3" />
    <path d="M7 10c-1.5.5-2.5 1.7-2.5 3 0 1.8 1.9 3 4.5 3h6c2.6 0 4.5-1.2 4.5-3 0-1.3-1-2.5-2.5-3" />
    <path d="M6 13c-1.1.5-2 1.5-2 2.5C4 17 5.8 18 9 18h6c3.2 0 5-1 5-2.5 0-1-.9-2-2-2.5" />
    <path d="M5 16c-.6.5-1 1.1-1 1.7C4 19.1 7.6 21 12 21s8-1.9 8-3.3c0-.6-.4-1.2-1-1.7" />
  </svg>
);
const IconNutrition = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C9 2 6 4.5 6 8c0 2 .8 3.7 2 5l1 9h6l1-9c1.2-1.3 2-3 2-5 0-3.5-3-6-6-6z" />
    <path d="M9 8c.5-2 1.5-3 3-3M9 13h6M10 16h4M10.5 19h3" />
  </svg>
);

/* ─── SERVICES LIST ─── */
const servicesList = [
  {
    name: "New Born Check Up",
    category: "Neonatal Care",
    icon: IconNewborn,
    desc: "Comprehensive neonatal assessment, screening, and developmental milestones evaluation.",
  },
  {
    name: "Infantile Colic",
    category: "Neonatal Care",
    icon: IconColic,
    desc: "Specialized assessment and management of unsoothable crying and colic in infants.",
  },
  {
    name: "Neonatal Jaundice",
    category: "Neonatal Care",
    icon: IconJaundice,
    desc: "Early detection, bilirubin monitoring, phototherapy guidance, and treatment.",
  },
  {
    name: "Short Stature",
    category: "Endocrinology & Growth",
    icon: IconGrowth,
    desc: "Growth velocity analysis, hormone evaluation, and evidence-based growth therapies.",
  },
  {
    name: "Hypothyroidism / Hyperthyroidism",
    category: "Endocrinology & Growth",
    icon: IconThyroid,
    desc: "Comprehensive thyroid function evaluation and endocrine treatment management.",
  },
  {
    name: "Obesity",
    category: "Endocrinology & Growth",
    icon: IconObesity,
    desc: "Metabolic risk profiling, lifestyle, and clinical weight management plans for children.",
  },
  {
    name: "Congenital Adrenal Hyperplasia (CAH)",
    category: "Endocrinology & Growth",
    icon: IconHormone,
    desc: "Specialized diagnostic workup and long-term hormone replacement monitoring.",
  },

  {
    name: "Rickets",
    category: "Endocrinology & Growth",
    icon: IconBone,
    desc: "Vitamin D, calcium, and bone density evaluation for metabolic bone health.",
  },
  {
    name: "Acute Hepatitis",
    category: "Infectious & General Paediatrics",
    icon: IconLiver,
    desc: "Liver function workup, symptom management, and viral hepatitis clinical care.",
  },
  {
    name: "Recurrent Chest Infection",
    category: "Infectious & General Paediatrics",
    icon: IconLung,
    desc: "Diagnostic evaluation of recurring respiratory illness, immunity, and treatment.",
  },
  {
    name: "Recurrent Diarrhea",
    category: "Infectious & General Paediatrics",
    icon: IconGut,
    desc: "Gastrointestinal workup, malabsorption screening, and chronic diarrhea management.",
  },
  {
    name: "Recurrent Tonsillitis",
    category: "Infectious & General Paediatrics",
    icon: IconThroat,
    desc: "Throat infection management, antibiotic protocols, and ENT follow-up.",
  },
  {
    name: "Anemia",
    category: "Infectious & General Paediatrics",
    icon: IconBlood,
    desc: "Investigation of nutritional, iron-deficiency, and metabolic anemias in children.",
  },
  {
    name: "Fits / Seizures",
    category: "Infectious & General Paediatrics",
    icon: IconBrain,
    desc: "Clinical evaluation and management of febrile and afebrile childhood seizures.",
  },
  {
    name: "Oral Stomatitis",
    category: "Infectious & General Paediatrics",
    icon: IconMouth,
    desc: "Diagnosis and pain relief treatment for oral ulcers and stomatitis.",
  },
  {
    name: "Poor Weight Gain",
    category: "Infectious & General Paediatrics",
    icon: IconScale,
    desc: "Failure to thrive workup, nutritional intervention, and growth recovery plans.",
  },
  {
    name: "Pneumonia",
    category: "Infectious & General Paediatrics",
    icon: IconLung,
    desc: "Prompt antibiotic therapy, chest monitoring, and inpatient/outpatient management.",
  },
  {
    name: "Measles",
    category: "Infectious & General Paediatrics",
    icon: IconVirus,
    desc: "Infectious disease isolation guidance, symptom management, and prevention.",
  },
  {
    name: "Chicken Pox",
    category: "Infectious & General Paediatrics",
    icon: IconSkin,
    desc: "Varicella care, skin lesion protection, and complication management.",
  },
  {
    name: "Diarrhea",
    category: "Infectious & General Paediatrics",
    icon: IconPoop,
    desc: "Rehydration therapy, oral electrolytes, and acute gastroenteritis treatment.",
  },
  {
    name: "Urinary Tract Infection (UTI)",
    category: "Infectious & General Paediatrics",
    icon: IconKidney,
    desc: "Urine culture interpretation, targeted antibiotic therapy, and renal imaging.",
  },
  {
    name: "Asthma",
    category: "Infectious & General Paediatrics",
    icon: IconLung,
    desc: "Inhaler technique, emergency action plans, and chronic asthma control.",
  },
  {
    name: "Worm Infestations",
    category: "Infectious & General Paediatrics",
    icon: IconGut,
    desc: "Intestinal parasite screening, deworming therapy, and hygiene education.",
  },
  {
    name: "Poor Appetite",
    category: "Infectious & General Paediatrics",
    icon: IconNutrition,
    desc: "Nutritional deficiency screening and appetite stimulation strategies.",
  },
];

export default function ServicesPage() {
  const getWhatsAppLink = (serviceName) => {
    const msg = `Hello Dr. Zahid Ullah, I would like to book an appointment for: *${serviceName}*`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div style={{ minHeight: "100vh", background: "#eef2f6" }}>
      <style>{`
        /* ─ Premium clean card ─ */
        .svc-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(26,95,122,0.08);
          box-shadow:
            0 4px 6px -1px rgba(0,0,0,0.06),
            0 20px 40px -8px rgba(0,0,0,0.18),
            0 10px 15px -3px rgba(0,0,0,0.10);
          display: flex;
          flex-direction: column;
          padding: 28px;
          position: relative;
          overflow: hidden;
        }

        /* ─ Left accent bar ─ */
        .svc-accent-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          border-radius: 16px 0 0 16px;
        }

        /* ─ Icon box ─ */
        .svc-icon-box {
          width: 46px; height: 46px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px; flex-shrink: 0;
        }
        .svc-icon-box svg { width: 22px; height: 22px; }

        /* ─ Category label ─ */
        .svc-cat {
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 8px; display: block;
        }

        /* ─ Divider ─ */
        .svc-divider {
          height: 1px; background: #f1f5f9;
          margin: 16px 0;
        }

        /* ─ Book button ─ */
        .svc-btn {
          display: inline-flex; align-items: center;
          justify-content: center; gap: 7px;
          width: 100%; padding: 11px 16px;
          border-radius: 9px; font-size: 13px; font-weight: 600;
          text-decoration: none; margin-top: auto;
          background: #f8fafc;
          color: #1a5f7a;
          border: 1px solid #e2e8f0;
          letter-spacing: 0.01em;
        }

        /* ─ Responsive grid ─ */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) { .svc-grid { grid-template-columns: repeat(2,1fr); gap: 16px; } }
        @media (max-width: 640px)  { .svc-grid { grid-template-columns: 1fr; gap: 14px; } }
      `}</style>

      {/* ─── HERO ─── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #1a5f7a 0%, #1d6e85 50%, #2d9596 100%)",
          padding: "72px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "740px", margin: "0 auto" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "5px 16px",
              borderRadius: "9999px",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            Muhammad Medical Centre / Health Next Hospital · G-8 Markaz · Islamabad
          </span>
          <h1
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(26px, 4vw, 42px)",
              fontWeight: "800",
              color: "#fff",
              marginBottom: "14px",
              lineHeight: "1.2",
            }}
          >
            Medical Conditions We Treat
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(14px, 1.7vw, 16px)",
              maxWidth: "540px",
              margin: "0 auto 28px",
              lineHeight: "1.7",
            }}
          >
            Specialized pediatric &amp; endocrine consultations by Dr. Zahid
            Ullah — evidence-based care for every child.
          </p>
          <Link
            href="/appointment"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#1DAA61",
              color: "#fff",
              padding: "11px 26px",
              borderRadius: "9999px",
              fontWeight: "700",
              fontSize: "14px",
              textDecoration: "none",
              boxShadow: "0 2px 12px rgba(29,170,97,0.3)",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Book Appointment
          </Link>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section
        style={{
          padding: "68px 20px 80px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            style={{
              color: "#2d9596",
              fontWeight: "700",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Medical Specialities
          </span>
          <h2
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "clamp(22px, 3.2vw, 34px)",
              fontWeight: "800",
              color: "#0f2e3a",
              marginTop: "8px",
              marginBottom: "0",
            }}
          >
            Our Pediatric Services
          </h2>
          <div
            style={{
              width: "56px",
              height: "4px",
              background: "#2d9596",
              margin: "14px auto 0",
              borderRadius: "9999px",
            }}
          />
        </div>

        {/* Grid */}
        <div className="svc-grid">
          {servicesList.map((item, i) => {
            const IconComp = item.icon;
            const cs = CAT_STYLE[item.category];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.035, 0.35) }}
                className="svc-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "24px",
                  border: "1px solid rgba(26,95,122,0.08)",
                  boxShadow:
                    "0 4px 6px -1px rgba(0,0,0,0.06), 0 20px 40px -8px rgba(0,0,0,0.18), 0 10px 15px -3px rgba(0,0,0,0.10)",
                  display: "flex",
                  flexDirection: "column",
                  padding: "28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Left accent bar */}
                <div
                  className="svc-accent-bar"
                  style={{ background: cs.accent }}
                />

                {/* Icon */}
                <div
                  className="svc-icon-box"
                  style={{
                    background: cs.light,
                    color: cs.accent,
                    border: `1px solid ${cs.border}`,
                  }}
                >
                  <IconComp />
                </div>

                {/* Category */}
                <span className="svc-cat" style={{ color: cs.accent }}>
                  {item.category}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "17px",
                    fontWeight: "700",
                    color: "#0f172a",
                    marginBottom: "8px",
                    lineHeight: "1.3",
                  }}
                >
                  {item.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "12.5px",
                    color: "#64748b",
                    lineHeight: "1.65",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>

                <div className="svc-divider" />

                {/* Book button */}
                <a
                  href={getWhatsAppLink(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svc-btn"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ color: "#25D366", flexShrink: 0 }}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  Book Appointment
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #1a5f7a 0%, #1d6e85 50%, #2d9596 100%)",
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "28px",
              fontWeight: "800",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            Schedule a Consultation
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "14px",
              marginBottom: "26px",
              lineHeight: "1.65",
            }}
          >
            Book a slot for your child's check-up via WhatsApp or our
            appointment form.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/appointment"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                color: "#1a5f7a",
                padding: "11px 24px",
                borderRadius: "9999px",
                fontWeight: "700",
                fontSize: "13.5px",
                textDecoration: "none",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Appointment Form
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#25D366",
                color: "#fff",
                padding: "11px 24px",
                borderRadius: "9999px",
                fontWeight: "700",
                fontSize: "13.5px",
                textDecoration: "none",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
