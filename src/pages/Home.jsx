import { Link } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";

const D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/6275e4194_home-desktop.png";
const M = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/6f6cc9297_home-mobile.png";

const features = [
  { title: "Stand Firm", text: "Put on the armor of God and refuse to be moved by fear, pressure, or lies." },
  { title: "Pray with Authority", text: "Use Scripture, prayer, and declarations to align your heart with Heaven." },
  { title: "Walk in Victory", text: "Victory is not earned by striving — it is received through Christ and walked out by faith." },
];

const buttons = [
  { label: "Start Today", to: "/daily" },
  { label: "Open Battle Plan", to: "/battle" },
  { label: "Battle Journal", to: "/journal" },
];

export default function Home() {
  return (
    <PageBackground desktopImg={D} mobileImg={M}>
      <HeroSection title="Kingdom Battle Plan" subtitle="Stand firm. Pray boldly. Walk in victory." />
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <GlassCard className="text-center mb-8">
          <p className="font-lora text-yellow-100/90 text-sm md:text-base leading-relaxed">
            This Spirit-filled companion helps you stand on the Word of God, resist fear, renew your mind, pray with authority, and walk in the victory Christ has already won.
          </p>
        </GlassCard>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {buttons.map(b => (
            <Link key={b.label} to={b.to} className="font-cinzel text-sm px-5 py-2.5 rounded-lg bg-gradient-to-r from-yellow-700 to-yellow-600 text-black font-semibold hover:from-yellow-600 hover:to-yellow-500 transition-all shadow-lg">
              {b.label}
            </Link>
          ))}
          <a href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" target="_blank" rel="noopener noreferrer" className="font-cinzel text-sm px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-800 to-red-700 text-yellow-100 font-semibold hover:from-red-700 hover:to-red-600 transition-all shadow-lg border border-yellow-600/30">
            Partner / Sow
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {features.map(f => (
            <GlassCard key={f.title}>
              <h3 className="font-cinzel font-bold text-yellow-400 text-lg mb-2">{f.title}</h3>
              <p className="font-lora text-yellow-100/80 text-sm">{f.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}