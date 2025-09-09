import React from "react";
import { type IProject } from "../types/portfolio";

interface ProjectModalProps {
  proyecto: IProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ proyecto, onClose }) => {
  if (!proyecto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white dark:bg-neutral-900 max-w-4xl w-full mx-4 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-neutral-700">
          <h2 className="text-xl font-semibold">{proyecto.titulo}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Imagen */}
          <div className="w-full h-56 overflow-hidden rounded-lg">
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Fechas */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {proyecto.fechaInicio} – {proyecto.fechaFin}
          </p>

          {/* Descripción */}
          <p className="text-gray-700 dark:text-gray-300">
            {proyecto.longDescription}
          </p>

          {/* Tecnologías + Rol */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {proyecto.tecnologias.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-full text-xs bg-neutral-200 dark:bg-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Role</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {proyecto.rol}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-3 justify-end">
            <a
              href={proyecto.link}
              className="px-4 py-2 bg-black text-white rounded-lg"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded-lg dark:border-neutral-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
