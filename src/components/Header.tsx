import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header(){
      const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


    return(
    <header className="sticky p-6 top-0 z-50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-center md:text-left" style={{ fontFamily: "Merriweather, serif" }}>
            Erick López
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Toggle estilo iPhone */}
            <label className="relative inline-flex items-center cursor-pointer" aria-label="Toggle dark mode">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-200 dark:bg-gray-600 peer-focus:ring-2dark:peer-focus:ring-green-00 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
            </label>
            <div className="flex gap-4 text-xl">
              <a href="https://github.com/ErickLopezDev" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/erick-valentino-lópez-campos" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">
                <FaLinkedin />
              </a>
              <a href="mailto:ericklopez.dev@gmail.com" className="hover:text-neutral-400">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
}