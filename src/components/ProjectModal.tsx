import React from "react";
import { type IProject } from "../types/portfolio";
import { X, Calendar, Code2, User, ExternalLink } from "lucide-react";

interface ProjectModalProps {
  proyecto: IProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ proyecto, onClose }) => {
  if (!proyecto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-neutral-900 w-full max-w-5xl mx-6 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-neutral-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {proyecto.titulo}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition cursor-pointer"
          >
            <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna izquierda */}
          <div className="space-y-6">
            {/* Imagen */}
            <div className="w-full h-56 overflow-hidden rounded-xl shadow">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tecnologías */}
            <div>
              <h4 className="flex items-center gap-2 font-semibold mb-2 text-gray-900 dark:text-white">
                <Code2 className="h-4 w-4" /> Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {proyecto.tecnologias.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs bg-neutral-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Rol */}
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-1">
                <User className="h-4 w-4" /> Role
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {proyecto.rol}
              </p>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            {/* Fechas */}
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>
                {proyecto.fechaInicio} – {proyecto.fechaFin}
              </span>
            </div>

            {/* Descripción */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {proyecto.longDescription}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 justify-end px-6 py-4 border-t dark:border-neutral-700">
          <a
            href={proyecto.link}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            Live demo <ExternalLink className="h-4 w-4" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
