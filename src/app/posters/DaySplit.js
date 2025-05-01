export default function DaySplit({ data }) {
  return (
    <div className="min-h-screen text-white bg-gradient-to-t from-[#5e321e] via-[#ce8051] to-[#18113c] relative">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[url('/palms.png')] bg-repeat-x bg-bottom opacity-90 z-0" />
      <div className="relative z-10 px-6 py-12 text-center space-y-10 max-w-5xl mx-auto font-sans">
        <div className="space-y-2">
          <h2 className="text-sm tracking-widest uppercase text-white/70">
            {data.presentedBy}
          </h2>
          <h1 className="text-6xl sm:text-7xl font-bold tracking-wide uppercase">
            {data.title}
          </h1>
          <p className="text-md text-white/70">
            {data.location} · {data.dates.join(" · ")}
          </p>
        </div>

        <div className="space-y-16">
          {data.dates.map((day, i) => (
            <div key={i}>
              <p className="text-sm uppercase font-semibold tracking-wide bg-white/10 inline-block px-3 py-1 rounded-full mb-2">
                {day.date}
              </p>
              <h2 className="text-4xl font-bold">{day.headliner}</h2>
              <p className="text-xl mt-2 font-semibold">
                {day.tier1.join(" · ")}
              </p>
              <p className="text-sm mt-4 text-white/80 leading-6">
                {day.tier2.join(" · ")}
              </p>
            </div>
          ))}
        </div>

        {data.footerNote && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold tracking-wide">
              {data.footerNote}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
