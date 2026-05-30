import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import PageBackground from "../components/PageBackground";
import HeroSection from "../components/HeroSection";
import GlassCard from "../components/GlassCard";
import Footer from "../components/Footer";

const D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/ed6542af1_journal-desktop.png";
const M_ = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/338fbbf22_journal-mobile.png";

const prompts = [
  "What battle am I facing today?",
  "What Scripture am I standing on?",
  "What lie do I need to replace with truth?",
  "What fear do I need to surrender?",
  "What victory has God already given me?",
  "What action step of obedience will I take today?",
];

const KEY = "kingdom-battle-journal";

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  const save = () => {
    if (!title.trim() || !content.trim()) return;
    const next = [{ id: Date.now(), title, content, date: new Date().toLocaleDateString() }, ...entries];
    setEntries(next);
    localStorage.setItem(KEY, JSON.stringify(next));
    setTitle("");
    setContent("");
  };

  const remove = (id) => {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  };

  return (
    <PageBackground desktopImg={D} mobileImg={M_}>
      <HeroSection title="Battle Journal" subtitle="Write what God is showing you. Record the victory." />
      <div className="max-w-3xl mx-auto px-4 pb-8">
        <GlassCard className="mb-6">
          <h3 className="font-cinzel text-yellow-400 text-sm font-semibold mb-2">Journal Prompts</h3>
          <ul className="space-y-1">
            {prompts.map(p => (
              <li key={p} className="font-lora text-yellow-200 text-xs cursor-pointer hover:text-yellow-300 transition-colors" onClick={() => setContent(prev => prev ? prev + "\n" + p : p)}>
                • {p}
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="mb-6">
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Journal title..."
            className="w-full bg-transparent border border-yellow-700/30 rounded-lg px-4 py-2 text-yellow-100 font-cinzel text-sm placeholder:text-yellow-100/40 mb-3 outline-none focus:border-yellow-500"
          />
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Pour out your heart..."
            rows={5}
            className="w-full bg-transparent border border-yellow-700/30 rounded-lg px-4 py-2 text-yellow-100 font-lora text-sm placeholder:text-yellow-100/40 mb-3 outline-none focus:border-yellow-500 resize-none"
          />
          <button onClick={save} className="font-cinzel text-sm px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-700 to-yellow-600 text-black font-semibold hover:from-yellow-600 hover:to-yellow-500 transition-all">
            Save Entry
          </button>
        </GlassCard>

        {entries.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-cinzel text-yellow-400 text-lg font-bold">Saved Entries</h3>
            {entries.map(e => (
              <GlassCard key={e.id}>
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-cinzel text-yellow-300 text-sm font-semibold">{e.title}</h4>
                    <p className="text-yellow-200/70 text-xs mb-1">{e.date}</p>
                    <p className="font-lora text-white text-sm whitespace-pre-wrap">{e.content}</p>
                  </div>
                  <button onClick={() => remove(e.id)} className="text-red-400 hover:text-red-300 flex-shrink-0 p-1">
                    <Trash2 size={16} />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </PageBackground>
  );
}