import Image from "next/image";
import { anton } from "./fonts";
import PosterRenderer from "./components/PosterRenderer";

export default function Home() {
  return (
    <div>
      <PosterRenderer type={"alphabetical"} />
    </div>
  );
}
