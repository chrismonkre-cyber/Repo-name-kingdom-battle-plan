const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/e4ec92c5d_newlogo.png";

export default function HeroSection({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center pt-10 pb-6 px-4">
      <img src={LOGO} alt="Kingdom Mandate Ministry" className="h-20 w-20 md:h-28 md:w-28 rounded-full object-cover mb-4 drop-shadow-lg" />
      <h1 className="font-cinzel font-bold text-3xl md:text-5xl text-yellow-400 drop-shadow-lg mb-2" style={{ textShadow: "0 0 30px rgba(200,160,50,0.5)" }}>
        {title}
      </h1>
      {subtitle && (
        <p className="font-lora italic text-yellow-100/90 text-base md:text-lg max-w-2xl" style={{ textShadow: "0 0 10px rgba(0,0,0,0.7)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}