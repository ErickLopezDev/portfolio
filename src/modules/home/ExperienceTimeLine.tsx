import React from "react";
import { experiences } from "../../data/experiences";

export const ExperienceTimeline: React.FC = () => {
  return (
    <ol className="relative border-s dark:border-gray-100 border-gray-700 max-w-[700px]">
      {experiences.map((exp) => (
        <li key={exp.id} className="mb-10 ms-4">
          {/* Punto del timeline */}
          <div className="absolute w-3 h-3 dark:bg-gray-200 rounded-full mt-1.5 -start-1.5 border dark:border-b-neutral-300 border-gray-900 bg-gray-700"></div>

          {/* Fecha */}
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {exp.periodo}
          </time>

          {/* Título */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {exp.puesto} - {exp.empresa}
          </h3>

          {/* Descripción */}
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ">
            {exp.descripcion}
          </p>

          {/* Lista de highlights opcional */}
          {exp.highlights && (
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {exp.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
};
