import Hero from "@/components/Hero";
import bannerSvgWave from "../assets/wave.svg";
export default function Home() {
  return (
    <div className="relative ">
      <Hero />
      <div>
        <img className="absolute bottom-0 w-full" src={bannerSvgWave} alt="" />
      </div>
    </div>
  );
}
