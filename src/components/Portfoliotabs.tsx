import { Link, useLocation } from "react-router-dom";

const tabs = [
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
];

export default function TabsNavigation() {
  const location = useLocation();
  const tab = location.pathname;

  return (
    <div className="relative z-10 max-w-5xl mx-auto p-6">
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 dark:bg-neutral-800 p-2 rounded-full inline-flex gap-2 shadow-lg">
          {tabs.map(({ to, label }) => {
            const isActive = tab === to;
            return (
              <Link
                key={to}
                to={to}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-black text-white shadow-md scale-105"
                      : "text-gray-700 dark:text-gray-300 hover:bg-neutral-900 hover:text-white hover:scale-105"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
                {/* Indicador animado debajo del tab activo */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
