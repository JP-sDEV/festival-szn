import Image from "next/image";
import { anton } from "./fonts";
import PosterRenderer from "./components/PosterRenderer";
import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <div>
      <div>
        <LoginButton />
      </div>
      <PosterRenderer type={"alphabetical"} />
    </div>
  );
}
