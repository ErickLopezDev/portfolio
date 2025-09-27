import Header from "./Header";
import Carrousel from "./Carrousel";
import Hero from "./Hero";
import { Outlet } from "react-router-dom";
import TabsNavigation from "./Portfoliotabs";

export default function Portfolio() {
  return (
    <main className="text-black dark:bg-black dark:text-white font-sans min-h-screen transition-colors duration-500 overflow-hidden">
      {/* Fondo fijo con grid y gradiente radial en dark mode */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-neutral-50 dark:bg-[#020202]" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:18px_24px]" />
      </div>
      <Header />
      <Hero />
      <Carrousel />
      <TabsNavigation />
      <Outlet />
    </main>
  );
}
