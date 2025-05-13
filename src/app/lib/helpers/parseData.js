import { Artist } from "../models/Artist";

export function parseData(rawData) {
  return (
    rawData.items
      .map((artist) => new Artist(artist.name, artist.popularity))
      //   // First sort by popularity (descending)
      //   .sort((a, b) => b.popularity - a.popularity)
      // Then sort alphabetically (for same popularity)
      .sort((a, b) => {
        if (a.popularity === b.popularity) {
          return a.name.localeCompare(b.name);
        }
        return 0; // Keep original order if popularity differs
      })
  );
}
