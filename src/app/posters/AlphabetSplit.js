export default function AlphabetSplit({ data }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/edc-bg.jpg')" }}
    >
      <div className="bg-black/70 backdrop-blur-md p-8 sm:p-16 rounded-3xl max-w-6xl w-full text-center shadow-2xl space-y-10">
        {/* Title */}
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-widest uppercase text-[rgb(0,255,255)] drop-shadow-[0_0_10px_cyan]">
          {data.title}
        </h1>

        {/* Location + Dates */}
        <p className="text-xl sm:text-2xl font-medium tracking-wide uppercase text-pink-300">
          {data.location} · {data.dates.join(" · ")}
        </p>

        {/* Headliners */}
        <div className="text-3xl sm:text-4xl font-bold tracking-tight text-lime-300 mt-10">
          {data.headliners.join(" · ")}
        </div>

        {/* Alphabetically sorted artists */}
        <div className="text-sm sm:text-base text-white/80 max-w-4xl mx-auto leading-relaxed mt-6 space-y-2">
          {data.artists.map((artist) => (
            <div key={artist}>{artist}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
