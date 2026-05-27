export default function PageBackground({ desktopImg, mobileImg, children }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Desktop bg */}
      <div
        className="hidden md:block fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${desktopImg})` }}
      />
      {/* Mobile bg */}
      <div
        className="md:hidden fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${mobileImg})` }}
      />
      {/* Dark burgundy overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/40 via-red-950/30 to-black/50 -z-10 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}