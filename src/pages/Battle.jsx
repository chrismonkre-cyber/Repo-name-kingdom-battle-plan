import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/e9904e5a8_battle-desktop.png";
const M_ = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/d65d8197e_battle-mobile.png";

const plans = [
  { title: "The Armor of God", desc: "The full spiritual armor God provides for every believer.", scripture: "Ephesians 6:10-18", looks: "Feeling exposed, attacked, or unprepared for spiritual battles.", prayer: "Father, I put on Your full armor. I stand in truth, righteousness, faith, salvation, and Your Word. Strengthen me for battle.", declaration: "I am fully armed with the armor of God. I stand firm and will not be moved.", action: "Read Ephesians 6:10-18 aloud each morning this week as a spiritual discipline." },
  { title: "Battle Against Fear", desc: "Breaking free from the grip of fear through faith.", scripture: "2 Timothy 1:7", looks: "Anxiety about the future, paralysis in decisions, dread, avoidance.", prayer: "Lord, I refuse the spirit of fear. Fill me with Your power, love, and sound mind.", declaration: "Fear has no authority over me. I walk in the power and peace of God.", action: "Name your biggest fear aloud and speak 2 Timothy 1:7 over it three times." },
  { title: "Battle Against Anxiety", desc: "Finding peace by casting every care on God.", scripture: "Philippians 4:6-7", looks: "Racing thoughts, constant worry, inability to rest or trust God.", prayer: "Father, I cast every anxious thought on You. Guard my heart and mind with Your peace.", declaration: "The peace of God guards my heart and mind. I will not be anxious about anything.", action: "Write down three worries, pray over each one, and physically release them to God." },
  { title: "Battle Against Discouragement", desc: "Pressing forward when the weight feels unbearable.", scripture: "Isaiah 41:10", looks: "Loss of hope, weariness, wanting to quit, feeling forgotten by God.", prayer: "Lord, renew my strength. Lift my head and remind me that You are with me.", declaration: "I will not lose heart. God is strengthening me and holding me up.", action: "Read Isaiah 41:10 and Psalm 34:18. Write a prayer of renewed trust." },
  { title: "Battle Against Confusion", desc: "Seeking God's clarity when the path seems unclear.", scripture: "James 1:5", looks: "Indecision, mental fog, conflicting voices, lack of direction.", prayer: "Father, give me wisdom and clarity. Silence every voice that is not Yours.", declaration: "God gives me wisdom generously. I hear His voice and follow His leading.", action: "Get quiet before God for 15 minutes. Write down what He places on your heart." },
  { title: "Battle Against Temptation", desc: "Standing firm when the enemy tries to lure you away.", scripture: "1 Corinthians 10:13", looks: "Repeated struggles, compromise, rationalization of sin.", prayer: "Lord, strengthen me to resist temptation. Show me the way of escape You have provided.", declaration: "I am not a slave to sin. God always provides a way of escape and I will take it.", action: "Identify your most common temptation trigger and create a Scripture-based exit plan." },
  { title: "Battle for the Mind", desc: "Taking every thought captive to the obedience of Christ.", scripture: "2 Corinthians 10:5", looks: "Negative thought loops, lies believed as truth, mental torment.", prayer: "Father, help me take every thought captive. Renew my mind with Your truth.", declaration: "My mind belongs to Christ. I demolish lies and think according to God's Word.", action: "For one day, catch every negative thought and replace it with a specific Scripture." },
  { title: "Battle for the Family", desc: "Covering your household in prayer and spiritual authority.", scripture: "Joshua 24:15", looks: "Division, strife, spiritual attack on loved ones, broken communication.", prayer: "Lord, I cover my family with the blood of Jesus. Protect, unite, and strengthen us.", declaration: "As for me and my house, we will serve the Lord. My family walks under God's covering.", action: "Pray over each family member by name. Speak blessing and protection over them." },
  { title: "Battle for Purpose", desc: "Standing firm in God's calling when doubt creeps in.", scripture: "Jeremiah 29:11", looks: "Feeling lost, purposeless, questioning your calling, comparison.", prayer: "Father, reveal Your purpose for my life. Help me walk boldly in what You've called me to.", declaration: "God has a plan for me. I was created on purpose, for a purpose, and I will fulfill it.", action: "Write down three gifts or passions God has given you and ask how He wants to use them." },
  { title: "Battle for Healing", desc: "Standing on God's promises for wholeness and restoration.", scripture: "Isaiah 53:5", looks: "Physical pain, emotional wounds, chronic illness, hopelessness about health.", prayer: "Lord, I believe You are my Healer. Touch my body, soul, and spirit with Your power.", declaration: "By the stripes of Jesus, I am healed. God is restoring me — spirit, soul, and body.", action: "Lay hands on yourself, pray Isaiah 53:5, and thank God for healing — past, present, and coming." },
  { title: "Battle for Provision", desc: "Trusting God as your source when resources run low.", scripture: "Philippians 4:19", looks: "Financial stress, scarcity mindset, fear of not having enough.", prayer: "Father, You are my provider. I trust You to supply every need according to Your riches.", declaration: "My God supplies all my needs. I will not live in fear of lack — I serve a God of abundance.", action: "Give something away today as an act of faith and trust in God's provision." },
  { title: "Victory in Christ", desc: "Walking in the finished victory Jesus already secured.", scripture: "1 Corinthians 15:57", looks: "Living as though the battle is still undecided — striving, straining, doubting the outcome.", prayer: "Lord, thank You that the victory is already won. Help me live from victory, not toward it.", declaration: "I am more than a conqueror. Jesus has already won. I walk in His finished work.", action: "Write out three victories God has already given you and praise Him for each one." },
];

export default function Battle() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <PageBackground desktopImg={D} mobileImg={M_}>
      <HeroSection title="Battle Plan" subtitle="Use the Word. Stand in faith. Refuse defeat." />
      <div className="max-w-3xl mx-auto px-4 pb-8 space-y-3">
        {plans.map((p, i) => (
          <div key={i} className="backdrop-blur-md bg-red-950/40 border border-yellow-600/30 rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 cursor-pointer text-left"
            >
              <h3 className="font-cinzel font-bold text-yellow-400 text-sm md:text-base">{p.title}</h3>
              <ChevronDown size={20} className={`text-yellow-500 transition-transform duration-200 flex-shrink-0 ${openIdx === i ? "rotate-180" : ""}`} />
            </button>
            {openIdx === i && (
              <div className="px-5 pb-5 space-y-3">
                <p className="font-lora text-yellow-100/80 text-sm italic">{p.desc}</p>
                {[
                  ["Scripture", p.scripture],
                  ["What it looks like", p.looks],
                  ["Prayer", p.prayer],
                  ["Declaration", p.declaration],
                  ["Action Step", p.action],
                ].map(([label, text]) => (
                  <div key={label}>
                    <h4 className="font-cinzel text-yellow-500 text-xs font-semibold mb-0.5">{label}</h4>
                    <p className="font-lora text-yellow-100/85 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </PageBackground>
  );
}