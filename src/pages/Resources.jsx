import { ExternalLink, Smartphone } from "lucide-react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";

const D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/1860c4a8b_resources-about-desktop.png";
const M_ = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/6cfc2f84c_resources-about-mobile.png";

const resources = [
  { name: "Main Ministry Site", href: "https://kingdommandateministry.com" },
  { name: "The Bible Companion", href: "https://thebiblecompanion.online" },
  { name: "Kingdom Prayer Wall", href: "https://prayer.kingdommandateministry.com" },
  { name: "Kingdom Fire Companion", href: "https://fire.kingdommandateministry.com" },
  { name: "Kingdom Pathway", href: "https://pathway.kingdommandateministry.com" },
  { name: "Kingdom Declarations", href: "https://declarations.kingdommandateministry.com" },
  { name: "Kingdom Healing Room", href: "https://healing.kingdommandateministry.com" },
  { name: "Kingdom Purpose Finder", href: "https://purpose.kingdommandateministry.com" },
  { name: "Kingdom Identity", href: "https://identity.kingdommandateministry.com" },
  { name: "Kingdom Gift Finder", href: "https://gifts.kingdommandateministry.com" },
  { name: "Kingdom Battle Plan", href: "https://battle.kingdommandateministry.com" },
  { name: "Kingdom Grace Vault", href: "https://grace.kingdommandateministry.com" },
  { name: "Kingdom Revival Fire", href: "https://revival.kingdommandateministry.com" },
  { name: "Kingdom Family Altar", href: "https://family.kingdommandateministry.com" },
  { name: "Kingdom Marketplace Mandate", href: "https://marketplace.kingdommandateministry.com" },
  { name: "Kingdom Freedom", href: "https://freedom.kingdommandateministry.com" },
  { name: "YouTube Channel", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { name: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
  { name: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

const installSteps = [
  "Open this app in your browser.",
  'Tap your browser menu (three dots or share icon).',
  'Choose "Add to Home Screen" or "Install App."',
  "Open it anytime like a normal app — no App Store needed.",
];

export default function Resources() {
  const scrollToInstall = () => {
    document.getElementById("install-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageBackground desktopImg={D} mobileImg={M_}>
      <HeroSection title="Continue the Journey" subtitle="Grow deeper with the Kingdom Mandate Ministry ecosystem." />
      <div className="max-w-4xl mx-auto px-4 pb-8">
        {/* Install CTA banner */}
        <GlassCard className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Smartphone size={28} className="text-yellow-400 flex-shrink-0" />
            <div>
              <h3 className="font-cinzel font-bold text-yellow-300 text-base">Install This Free Kingdom App</h3>
              <p className="font-lora text-white text-sm">Add it to your Home Screen — works on any device.</p>
            </div>
          </div>
          <button
            onClick={scrollToInstall}
            className="font-cinzel text-sm px-5 py-2.5 rounded-lg bg-gradient-to-r from-yellow-700 to-yellow-600 text-black font-semibold hover:from-yellow-600 hover:to-yellow-500 transition-all shadow-lg whitespace-nowrap"
          >
            Install / Add to Home Screen
          </button>
        </GlassCard>

        {/* Ecosystem links */}
        <h2 className="font-cinzel font-bold text-yellow-300 text-xl mb-4" style={{ textShadow: "0 0 20px rgba(255,210,80,0.5), 0 2px 6px rgba(0,0,0,0.8)" }}>Kingdom Mandate Ministry Ecosystem</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {resources.map(r => (
            <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer">
              <GlassCard className="flex items-center justify-between hover:bg-red-900/60 transition-colors cursor-pointer group py-3 px-4">
                <span className="font-cinzel text-yellow-300 text-sm font-semibold group-hover:text-yellow-200">{r.name}</span>
                <ExternalLink size={15} className="text-yellow-400/80 group-hover:text-yellow-300 flex-shrink-0 ml-2" />
              </GlassCard>
            </a>
          ))}
        </div>

        {/* Install Instructions */}
        <div id="install-section">
          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <Smartphone size={24} className="text-yellow-400" />
              <h3 className="font-cinzel font-bold text-yellow-300 text-lg">Install This Free Kingdom App</h3>
            </div>
            <p className="font-lora text-white text-sm mb-4">
              You can install Kingdom Battle Plan on your phone, tablet, or computer without using an app store.
            </p>
            <ol className="space-y-2 mb-5">
              {installSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-cinzel font-bold text-yellow-400 text-sm flex-shrink-0 w-5">{i + 1}.</span>
                  <span className="font-lora text-white text-sm">{step}</span>
                </li>
              ))}
            </ol>
            <p className="font-lora text-yellow-200 text-xs italic">Available on iOS Safari, Android Chrome, and desktop browsers.</p>
          </GlassCard>
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}