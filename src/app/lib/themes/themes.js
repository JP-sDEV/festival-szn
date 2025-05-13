// themes.js
import Theme from "../models/Theme";

export const themes = [
  // Daytime
  new Theme({
    bgGradient: "bg-gradient-to-b from-sky-300 via-yellow-100 to-white",
    borderColor: "border-yellow-400",
    fontColor: "text-gray-900",
    dotColor: "text-yellow-500",
    fontFamily: "font-sans",
    titleColor: "text-blue-700",
    subtitleColor: "text-zinc-400",
    headlinerColor: "text-amber-700",
    artistColor: "text-gray-700",
    buttonColor: "bg-yellow-400",
    hoverButtonColor: "bg-yellow-500",
  }),

  // Nighttime
  new Theme({
    bgGradient: "bg-gradient-to-b from-blue-900 via-gray-900 to-black",
    borderColor: "border-blue-700",
    fontColor: "text-white",
    dotColor: "text-blue-300",
    fontFamily: "font-serif",
    titleColor: "text-indigo-400",
    subtitleColor: "text-gray-300",
    headlinerColor: "text-white",
    artistColor: "text-white/80",
    buttonColor: "bg-indigo-600",
    hoverButtonColor: "bg-indigo-700",
  }),

  // Neon
  new Theme({
    bgGradient: "bg-gradient-to-b from-pink-700 via-black to-purple-900",
    borderColor: "border-pink-500",
    fontColor: "text-white",
    dotColor: "text-green-400",
    fontFamily: "font-mono",
    titleColor: "text-fuchsia-400",
    subtitleColor: "text-lime-300",
    headlinerColor: "text-cyan-300",
    artistColor: "text-white/90",
    buttonColor: "bg-pink-600",
    hoverButtonColor: "bg-pink-700",
  }),

  // Desert
  new Theme({
    bgGradient: "bg-gradient-to-b from-yellow-200 via-orange-200 to-red-300",
    borderColor: "border-orange-400",
    fontColor: "text-gray-800",
    dotColor: "text-red-400",
    fontFamily: "font-serif",
    titleColor: "text-red-600",
    subtitleColor: "text-orange-400",
    headlinerColor: "text-yellow-800",
    artistColor: "text-gray-700",
    buttonColor: "bg-orange-500",
    hoverButtonColor: "bg-orange-600",
  }),
];
