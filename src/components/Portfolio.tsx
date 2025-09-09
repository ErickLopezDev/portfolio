import Header from "./Header";
import Carrousel from "./Carrousel";
import Hero from "./Hero"
import PortfolioTabs from "./Portfoliotabs";

export default function Portfolio() {


  return (
    <>
    <main className="text-black dark:bg-black dark:text-white font-sans min-h-screen transition-colors duration-500 overflow-hidden">
      {/* Fondo fijo con grid y gradiente radial en dark mode */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-neutral-50 dark:bg-black" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:18px_24px]" />
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full dark:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
      </div>
    <Header/>
    <Hero/>
    <Carrousel/>
    <PortfolioTabs/>
    </main>

    </>
  );
}