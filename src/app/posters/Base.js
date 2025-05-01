import Image from "next/image";

export default function Base() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center text-white flex flex-col items-center justify-center p-6 sm:p-12"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="bg-black/60 backdrop-blur-sm p-8 sm:p-16 rounded-xl w-full max-w-5xl text-center space-y-10">
        {/* Festival Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase">
          Sunset Mirage 2025
        </h1>

        {/* Date & Location */}
        <p className="text-lg sm:text-xl uppercase tracking-wider text-white/80">
          August 22 – 24 · Mojave Desert
        </p>

        {/* Lineup */}
        <div className="space-y-8 mt-10">
          {/* Headliners */}
          <div className="text-3xl sm:text-4xl font-bold tracking-wide">
            Kendrick Lamar · Billie Eilish · Tame Impala
          </div>

          {/* Sub-headliners */}
          <div className="text-xl sm:text-2xl font-semibold tracking-tight text-white/90">
            Rosalía · Fred Again.. · Odesza · SZA · The 1975
          </div>

          {/* Lower tier artists */}
          <div className="text-sm sm:text-base font-medium text-white/70 leading-relaxed max-w-3xl mx-auto">
            Kaytranada · Japanese Breakfast · Jungle · Peggy Gou · Joji · Phoebe
            Bridgers · Arlo Parks · RÜFÜS DU SOL · Laufey · Jamie xx · Charlotte
            de Witte · BICEP · PinkPantheress
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12">
          <a
            href="#"
            className="inline-block bg-white text-black font-bold px-6 py-3 rounded-full text-lg uppercase hover:bg-gray-200 transition"
          >
            Get Tickets
          </a>
        </div>
      </div>
    </div>
  );
}
