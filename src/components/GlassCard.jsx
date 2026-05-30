export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`backdrop-blur-md bg-red-950/55 border border-yellow-500/50 rounded-xl p-5 md:p-6 shadow-xl ${className}`}>
      {children}
    </div>
  );
}