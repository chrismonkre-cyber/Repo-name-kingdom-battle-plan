import { Smartphone } from "lucide-react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";

const D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/1860c4a8b_resources-about-desktop.png";
const M_ = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/6cfc2f84c_resources-about-mobile.png";

export default function About() {
  return (
    <PageBackground desktopImg={D} mobileImg={M_}>
      <HeroSection title="About Kingdom Battle Plan" subtitle="Helping believers stand firm and walk in victory." />
      <div className="max-w-3xl mx-auto px-4 pb-8 space-y-6">
        <GlassCard>
          <p className="font-lora text-yellow-100/90 text-sm md:text-base leading-relaxed">
            Kingdom Battle Plan exists to help believers stand on Scripture, pray with authority, resist fear, renew the mind, and walk in the victory of Jesus Christ. This app is not about striving in human strength, but about standing in the finished work of Christ and applying the Word of God daily.
          </p>
        </GlassCard>
        <GlassCard>
          <h3 className="font-cinzel font-bold text-yellow-400 text-lg mb-2">Kingdom Mandate Ministry</h3>
          <p className="font-lora text-yellow-100/90 text-sm md:text-base leading-relaxed">
            Kingdom Mandate Ministry exists to awaken believers, stir the fire of revival, and equip the Body of Christ to walk in purpose, power, and truth.
          </p>
        </GlassCard>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a href="https://kingdommandateministry.com" target="_blank" rel="noopener noreferrer" className="font-cinzel text-sm px-5 py-2.5 rounded-lg bg-gradient-to-r from-yellow-700 to-yellow-600 text-black font-semibold hover:from-yellow-600 hover:to-yellow-500 transition-all shadow-lg">
            Visit Kingdom Mandate Ministry
          </a>
          <a href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" target="_blank" rel="noopener noreferrer" className="font-cinzel text-sm px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-800 to-red-700 text-yellow-100 font-semibold hover:from-red-700 hover:to-red-600 transition-all shadow-lg border border-yellow-600/30">
            Partner / Sow
          </a>
        </div>

        {/* Install This App */}
        <GlassCard id="install-section">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone size={24} className="text-yellow-400" />
            <h3 className="font-cinzel font-bold text-yellow-300 text-lg">Install This Free Kingdom App</h3>
          </div>
          <p className="font-lora text-white text-sm mb-4">
            You can install Kingdom Battle Plan on your phone, tablet, or computer without using an app store.
          </p>
          <ol className="space-y-2 mb-4">
            {["Open this app in your browser.","Tap your browser menu (three dots or share icon).","Choose \"Add to Home Screen\" or \"Install App.\"","Open it anytime like a normal app — no App Store needed."].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-cinzel font-bold text-yellow-400 text-sm flex-shrink-0 w-5">{i + 1}.</span>
                <span className="font-lora text-white text-sm">{step}</span>
              </li>
            ))}
          </ol>
          <p className="font-lora text-yellow-200 text-xs italic">Available on iOS Safari, Android Chrome, and desktop browsers.</p>
        </GlassCard>
      </div>
      <Footer />
    </PageBackground>
  );
}