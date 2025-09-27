import React from "react";
import { Code2 } from "lucide-react";

interface ProjectTechProps {
  tecnologias: string[];
}

export const ProjectTech: React.FC<ProjectTechProps> = ({ tecnologias }) => (
  <div>
    <h4 className="flex items-center gap-2 font-semibold mb-2 text-gray-900 dark:text-white">
      <Code2 className="h-4 w-4" /> Technologies
    </h4>
    <div className="flex flex-wrap gap-2">
      {tecnologias.map((tech, i) => (
        <span
          key={i}
          className="px-3 py-1 rounded-full text-xs bg-neutral-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 shadow-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);
