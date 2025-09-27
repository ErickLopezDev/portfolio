import { Link, useLocation } from "react-router-dom";

export default function TabsNavigation() {
  const location = useLocation();
  const tab = location.pathname;
  return (
    <div className="relative z-10 max-w-5xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 dark:bg-neutral-800 p-2 rounded-full inline-flex gap-2">
          <Link
            to="/experience"
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-neutral-300 ${
              tab === "/experiences"
                ? "bg-black text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-neutral-300 ${
              tab === "/projects"
                ? "bg-black text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Projects
          </Link>
          <Link
            to="/certifications"
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-neutral-300 ${
              tab === "/certifications"
                ? "bg-black text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Certifications
          </Link>
        </div>
      </div>
    </div>
  );
}
