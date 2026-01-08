import HeroImg from "../assets/hero.jpg";
import wallpaper from "../assets/wallpaper.jpg";
function Hero() {
  return (
    <>
      <div
        className="relative w-full min-h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <h1 className="text-5xl absolute bottom-[400px] font-extrabold md:text-8xl text-green-800">
          WALTER WHITE
        </h1>
      </div>
    </>
  );
}
export default Hero;
