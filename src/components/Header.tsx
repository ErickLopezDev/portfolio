import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky p-6 top-0 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1
          className="text-2xl font-extrabold tracking-tight text-center md:text-left"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Erick López
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/ErickLopezDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 text-black dark:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/erick-valentino-lópez-campos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 text-black dark:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:ericklopez.dev@gmail.com"
              className="hover:text-neutral-400 text-black dark:text-white"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
