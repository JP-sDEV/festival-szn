"use client";

import React, { useRef } from "react";
import LoginButton from "../LoginButton";

export default function Poster({ artists, theme, userName }) {
  const {
    bgGradient,
    borderColor,
    fontColor,
    dotColor,
    fontFamily,
    titleColor,
    subtitleColor,
    headlinerColor,
    artistColor,
    buttonColor,
    hoverButtonColor,
  } = theme || {};

  const posterRef = useRef();

  if (!Array.isArray(artists) || artists.length === 0) {
    return (
      <div className="flex items-center justify-center h-[75vh] text-white">
        Loading artists...
      </div>
    );
  }

  return (
    <div
      ref={posterRef}
      className="flex flex-col items-center w-full max-w-md"
      style={{ height: "75vh" }}
    >
      {/* Poster Container */}
      <div
        className={`w-full ${bgGradient} px-2 via-black to-black rounded-xl border-2 ${borderColor} overflow-hidden flex flex-col max-w-full`}
      >
        {/* Header */}
        <div className="p-3 text-center flex-shrink-0">
          <h1 className={`text-5xl font-bold ${fontColor} tracking-tighter`}>
            LOOPED IN
          </h1>
          <p className={`text-sm ${fontColor} uppercase tracking-[0.3em] mt-1`}>
            MUSIC FESTIVAL 2025
          </p>
          <p className={`text-[0.6rem] ${fontColor} uppercase tracking-wider`}>
            18+
          </p>
        </div>

        {/* Date/Location */}
        <div className="px-3 pb-2 text-center flex-shrink-0">
          <p className={`text-xs ${subtitleColor} font-medium`}>
            FRI | SAT | SUN
          </p>
        </div>

        {/* Artists */}
        <div className="flex flex-col items-center px-2 pb-4 text-center">
          <div className="inline-flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-y-1 [&>*:last-child>span:last-child]:hidden">
              {artists.map((artist, index) => (
                <div key={index} className="flex items-center">
                  <span
                    className={`${fontColor} font-medium text-xs sm:text-sm uppercase`}
                  >
                    {artist.name}
                  </span>
                  <span className={`mx-1 text-xs ${dotColor}`}>&bull;</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`p-4 text-center border-t ${borderColor} flex-shrink-0 relative`}
        >
          <LoginButton theme={theme} posterRef={posterRef} />
          <p
            className={`${fontColor} mt-1.5 text-[0.6rem] sm:text-xs lowercase`}
          >
            @{userName ? userName : "YOU"}
          </p>
          <p
            className={`absolute bottom-2 right-3 text-[0.5rem] sm:text-xs ${fontColor} lowercase`}
          >
            Created by JP
          </p>
        </div>
      </div>
    </div>
  );
}
