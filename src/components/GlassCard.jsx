export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`backdrop-blur-md bg-red-950/40 border border-yellow-600/30 rounded-xl p-5 md:p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
}