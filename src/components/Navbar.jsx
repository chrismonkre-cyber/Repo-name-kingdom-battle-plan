import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/e4ec92c5d_newlogo.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/daily", label: "Daily" },
  { to: "/battle", label: "Battle Plan" },
  { to: "/journal", label: "Journal" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-yellow-700/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO} alt="Kingdom Mandate Ministry" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover" />
          <span className="font-cinzel font-bold text-yellow-400 text-sm md:text-base hidden sm:block">Kingdom Battle Plan</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-cinzel text-sm tracking-wide transition-colors ${pathname === l.to ? "text-yellow-400" : "text-yellow-100/80 hover:text-yellow-300"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-yellow-400 p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-yellow-700/30">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 font-cinzel text-sm tracking-wide border-b border-yellow-900/20 ${pathname === l.to ? "text-yellow-400 bg-yellow-900/20" : "text-yellow-100/80"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}