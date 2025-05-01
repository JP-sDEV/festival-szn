// AlphabeticalPoster.js
import BasePoster from "./BasePoster";

class AlphabeticalPoster extends BasePoster {
  constructor() {
    super();
    this.type = "alphabetical";
    this.headliners = ["Lady Gaga", "Green Day"];
    this.artists = [
      "4batz",
      "Alesso",
      "Becky Hill",
      "ZHU",
      "Duke Dumont",
      "Fred again..",
    ];
  }

  getFormattedData() {
    const headlinerSet = new Set(this.headliners);
    const filteredArtists = this.artists
      .filter((artist) => !headlinerSet.has(artist))
      .sort((a, b) => a.localeCompare(b));

    return {
      type: this.type,
      title: this.title,
      location: this.location,
      dates: this.dates,
      headliners: this.headliners,
      artists: filteredArtists,
    };
  }
}

export default AlphabeticalPoster;
