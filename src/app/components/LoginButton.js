"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import domtoimage from "dom-to-image-more";
import { useState } from "react";

export default function LoginButton({ theme, posterRef }) {
  const { data: session, status } = useSession();
  const { borderColor, fontColor, fontFamily, buttonColor, hoverButtonColor } =
    theme || {};

  const [showModal, setShowModal] = useState(false);

  const downloadPoster = async () => {
    if (!posterRef?.current) return;

    const cloneWithInlineStyles = (node) => {
      const clone = node.cloneNode(true);
      const elements = [node, ...node.querySelectorAll("*")];
      const cloneElements = [clone, ...clone.querySelectorAll("*")];

      elements.forEach((el, i) => {
        const computed = getComputedStyle(el);
        const cloneEl = cloneElements[i];
        if (!cloneEl || !computed) return;

        for (const key of computed) {
          try {
            cloneEl.style.setProperty(key, computed.getPropertyValue(key));
          } catch {}
        }
      });

      return clone;
    };

    try {
      const styledClone = cloneWithInlineStyles(posterRef.current);

      const container = document.createElement("div");
      container.style.position = "fixed";
      container.style.top = "-10000px";
      container.style.left = "-10000px";
      container.style.zIndex = "-1";
      container.appendChild(styledClone);
      document.body.appendChild(container);

      const blob = await domtoimage.toBlob(styledClone);
      document.body.removeChild(container);

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "looppedin_poster.png";
      link.click();
      URL.revokeObjectURL(url);

      setShowModal(true);
    } catch (error) {
      console.error("Failed to export poster:", error);
    }
  };

  const instagramCaption = `🎶 My LooppedIn Music Festival lineup is here! Who's coming? #LooppedIn #FestivalLineup #MySpotifyFestival`;

  const copyCaption = () => {
    navigator.clipboard.writeText(instagramCaption);
  };

  if (status !== "authenticated") {
    return (
      <button
        onClick={() => signIn("spotify")}
        className={`px-6 py-2 ${buttonColor} ${fontColor} border ${borderColor} rounded hover:${buttonColor} rounded-full`}
      >
        Get Yours
      </button>
    );
  }

  return (
    <>
      <button
        onClick={downloadPoster}
        className={`px-6 py-2 ${buttonColor} ${fontColor} border ${borderColor} rounded hover:${buttonColor} rounded-full`}
      >
        Download Poster
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-white/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center shadow-lg animate-fade-in">
            <h2 className="text-xl font-bold text-black mb-2">
              🎉 Poster Saved!
            </h2>
            <p className="text-sm text-gray-800 mb-4">
              Share it on Instagram to show your lineup!
            </p>
            <button
              onClick={copyCaption}
              className="bg-black text-white text-sm px-4 py-2 rounded-full mb-3 hover:bg-gray-800"
            >
              📋 Copy Instagram Caption
            </button>
            <p className="text-xs text-gray-600 mb-4">
              Then upload your poster to your Story or Feed manually.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="text-sm text-blue-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
