import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Poster from "./posters/Poster";
import { themes } from "../lib/themes/themes";
import sampleArtists from "../lib/data/sample";

export default function PosterCarousel() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const { userName, status, topArtists } = useAppContext();

  // Function to handle the next/previous theme
  const handleNext = () => {
    setCurrentThemeIndex((prev) => (prev + 1) % themes.length);
  };

  const handlePrevious = () => {
    setCurrentThemeIndex((prev) => (prev - 1 + themes.length) % themes.length);
  };

  // Get the current theme data
  const currentTheme = themes[currentThemeIndex];

  return (
    <div
      className={`w-full h-screen ${currentTheme.bgGradient} ${currentTheme.fontFamily}`}
    >
      <div className="flex justify-center items-center h-full relative">
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center ${currentTheme.fontColor} p-4`}
        >
          <Poster
            artists={
              status == "authenticated" ? topArtists.data : sampleArtists
            }
            theme={currentTheme}
            userName={userName ? userName : false}
          />
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {themes.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentThemeIndex(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                index === currentThemeIndex
                  ? currentTheme.dotColor
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={handlePrevious}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${currentTheme.fontColor} text-3xl`}
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${currentTheme.fontColor} text-3xl`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
