import { ExternalLink } from "lucide-react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";

const D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/1860c4a8b_resources-about-desktop.png";
const M_ = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/6cfc2f84c_resources-about-mobile.png";

const resources = [
  { name: "The Bible Companion", href: "https://thebiblecompanion.online" },
  { name: "Kingdom Pathway", href: "https://pathway.kingdommandateministry.com" },
  { name: "Kingdom Declarations", href: "https://declarations.kingdommandateministry.com" },
  { name: "Kingdom Healing Room", href: "https://healing.kingdommandateministry.com" },
  { name: "Kingdom Purpose Finder", href: "https://purpose.kingdommandateministry.com" },
  { name: "Kingdom Identity", href: "https://identity.kingdommandateministry.com" },
  { name: "Kingdom Gift Finder", href: "https://gifts.kingdommandateministry.com" },
  { name: "Kingdom Mandate Ministry", href: "https://kingdommandateministry.com" },
  { name: "YouTube Channel", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { name: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
  { name: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
];

export default function Resources() {
  return (
    <PageBackground desktopImg={D} mobileImg={M_}>
      <HeroSection title="Continue the Journey" subtitle="Grow deeper with the Kingdom Mandate Ministry ecosystem." />
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map(r => (
            <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer">
              <GlassCard className="flex items-center justify-between hover:bg-red-900/50 transition-colors cursor-pointer group">
                <span className="font-cinzel text-yellow-400 text-sm font-semibold group-hover:text-yellow-300">{r.name}</span>
                <ExternalLink size={16} className="text-yellow-500/60 group-hover:text-yellow-400 flex-shrink-0" />
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </PageBackground>
  );
}