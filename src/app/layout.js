import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Dr. Zahid Ullah | Child Specialist & Pediatric Endocrinologist – G-8 Islamabad",
  description: "Dr. Zahid Ullah – MBBS, FCPS Paediatrics, Fellow Paediatrics Endocrinology at PIMS Islamabad. Consultant Pediatrician specializing in growth disorders, diabetes, thyroid, neonatal care and general paediatrics. G-8 Markaz, Islamabad. Book via WhatsApp: 0346 9297818",
  keywords: ["child specialist Islamabad", "pediatrician G-8 Markaz", "pediatric endocrinologist PIMS", "Dr Zahid Ullah", "best child doctor Islamabad", "growth disorder specialist", "diabetes in children Islamabad"],
  openGraph: {
    title: "Dr. Zahid Ullah | Child Specialist & Pediatric Endocrinologist",
    description: "FCPS Paediatrics, Fellow Paediatrics Endocrinology. Expert care for growth disorders, diabetes, thyroid conditions and general paediatrics. G-8 Markaz, Islamabad.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="bg-background text-on-surface font-body antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow page-enter">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
