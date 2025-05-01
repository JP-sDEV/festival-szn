// DaySplitPoster.js
import BasePoster from "./BasePoster";

class DaySplitPoster extends BasePoster {
  constructor() {
    super();
    this.type = "daySplit";
    this.dates = [
      {
        date: "Friday April 11 & 18",
        headliner: "Lady Gaga",
        tier1: ["Missy Elliott", "LISA"],
        tier2: ["GloRilla", "Marina", "The Go-Go's"],
        tier3: ["Erez", "Moon Boots"],
      },
      {
        date: "Saturday April 12 & 19",
        headliner: "Green Day",
        tier1: ["Bleachers", "Wet Leg"],
        tier2: ["Chromeo", "070 Shake"],
        tier3: ["Tommy Genesis"],
      },
      {
        date: "Sunday April 13 & 20",
        headliner: "Post Malone",
        tier1: ["ODESZA", "Joji"],
        tier2: ["PinkPantheress", "Sofi Tukker"],
        tier3: ["Logic1000"],
      },
    ];
  }

  getFormattedData() {
    return {
      type: this.type,
      dates: this.dates,
    };
  }
}

export default DaySplitPoster;
