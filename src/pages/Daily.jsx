import { useState } from "react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";

const D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/467b30ea5_daily-desktop.png";
const M_ = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/003508a6b_daily-mobile.png";

const days = [
  { theme: "Armor of God", scripture: "Ephesians 6:10-18 — \"Put on the whole armor of God, that you may be able to stand against the schemes of the devil.\"", encouragement: "You are not defenseless. God has given you everything you need to stand.", prayer: "Father, I put on Your full armor today. Cover me with truth, righteousness, peace, faith, salvation, and Your Word. I stand in Your strength.", declaration: "I am armed with the armor of God. No weapon formed against me shall prosper.", action: "Read Ephesians 6:10-18 aloud. Identify which piece of armor you need most today.", reflection: "Which piece of the armor do I need to intentionally put on today?" },
  { theme: "Renewing the Mind", scripture: "Romans 12:2 — \"Do not be conformed to this world, but be transformed by the renewal of your mind.\"", encouragement: "Your mind is the battlefield. What you think shapes what you believe and how you live.", prayer: "Lord, renew my mind today. Replace every lie with Your truth. Help me think as You think.", declaration: "I take every thought captive. My mind is being renewed by the Word of God.", action: "Write down one lie you've been believing and replace it with a specific Scripture.", reflection: "What thought pattern do I need to surrender to God today?" },
  { theme: "Resisting Fear", scripture: "2 Timothy 1:7 — \"For God gave us a spirit not of fear but of power and love and self-control.\"", encouragement: "Fear is not from God. You have been given power, love, and a sound mind.", prayer: "Father, I refuse the spirit of fear. I receive Your power, love, and sound mind right now.", declaration: "I will not be afraid. God is with me. I walk in power, not in fear.", action: "Name one fear out loud and declare a Scripture over it.", reflection: "What fear have I allowed to control me that I need to release today?" },
  { theme: "Standing in Faith", scripture: "Hebrews 11:1 — \"Now faith is the assurance of things hoped for, the conviction of things not seen.\"", encouragement: "Faith is not wishful thinking — it is confident trust in the God who keeps His promises.", prayer: "Lord, strengthen my faith. Help me to trust You even when I cannot see the outcome.", declaration: "I walk by faith, not by sight. God is faithful, and His promises are sure.", action: "Recall a past situation where God was faithful and thank Him for it.", reflection: "Where is God asking me to trust Him even when I can't see the way?" },
  { theme: "Guarding the Heart", scripture: "Proverbs 4:23 — \"Above all else, guard your heart, for everything you do flows from it.\"", encouragement: "What enters your heart determines the direction of your life. Guard it fiercely.", prayer: "Father, help me guard my heart. Remove anything that does not honor You.", declaration: "I guard my heart with the Word of God. I will not allow bitterness, offense, or compromise.", action: "Identify one thing that has been polluting your heart and take steps to remove it.", reflection: "What have I been allowing into my heart that I need to guard against?" },
  { theme: "Prayer & Authority", scripture: "James 5:16 — \"The prayer of a righteous person has great power as it is working.\"", encouragement: "You are not powerless. In Christ, your prayers carry the authority of Heaven.", prayer: "Father, teach me to pray with boldness and authority. Let my prayers shake the darkness.", declaration: "My prayers are effective. I pray with the authority of Jesus Christ and Heaven responds.", action: "Spend 10 minutes in bold, specific prayer — not vague wishes but targeted declarations.", reflection: "Am I praying with expectation, or just going through the motions?" },
  { theme: "Victory in Christ", scripture: "1 Corinthians 15:57 — \"But thanks be to God, who gives us the victory through our Lord Jesus Christ.\"", encouragement: "The battle is already won. You are not fighting for victory — you are fighting from victory.", prayer: "Lord, thank You that the victory is already mine in Christ. Help me to walk in it daily.", declaration: "I am more than a conqueror through Christ. The enemy is already defeated.", action: "Write down three victories God has given you — past or present — and praise Him.", reflection: "Am I living like the battle is already won, or am I striving in my own strength?" },
];

export default function Daily() {
  const [idx, setIdx] = useState(new Date().getDay());
  const d = days[idx];

  return (
    <PageBackground desktopImg={D} mobileImg={M_}>
      <HeroSection title="Today's Battle Plan" subtitle="One day at a time. Stand in truth. Walk in victory." />
      <div className="max-w-3xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {days.map((day, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`font-cinzel text-xs px-3 py-1.5 rounded-lg border transition-all ${i === idx ? "bg-yellow-600/80 text-black border-yellow-500 font-bold" : "bg-red-950/40 text-yellow-100/70 border-yellow-700/30 hover:bg-red-900/40"}`}>
              {day.theme.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        <GlassCard>
          <h2 className="font-cinzel font-bold text-yellow-400 text-xl md:text-2xl mb-4">{d.theme}</h2>
          {[
            ["Scripture", d.scripture],
            ["Encouragement", d.encouragement],
            ["Prayer", d.prayer],
            ["Declaration", d.declaration],
            ["Action Step", d.action],
            ["Reflection", d.reflection],
          ].map(([label, text]) => (
            <div key={label} className="mb-4">
              <h4 className="font-cinzel text-yellow-500 text-sm font-semibold mb-1">{label}</h4>
              <p className="font-lora text-yellow-100/85 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </GlassCard>
      </div>
      <Footer />
    </PageBackground>
  );
}