import AlphabeticalPoster from "../lib/models/AlphabeticalPoster";
import DaySplitPoster from "../lib/models/DaySplitPoster";
import AlphabetSplit from "../posters/AlphabetSplit";
import DaySplit from "../posters/DaySplit";

export default function PosterRenderer({ type }) {
  const poster =
    type === "alphabetical" ? new AlphabeticalPoster() : new DaySplitPoster();
  const data = poster.getFormattedData();

  if (data.type === "alphabetical") {
    return <AlphabetSplit data={data} />;
  }

  if (data.type === "daySplit") {
    return <DaySplit data={data} />;
  }

  return null;
}
