import { X } from "lucide-react";
import { ProjectImage } from "./components/ProjectImage";
import { ProjectTech } from "./components/ProjectTech";
import { ProjectRole } from "./components/ProjectRole";
import { ProjectDates } from "./components/ProjectDates";
import { ProjectDescription } from "./components/ProjectDescription";
import { ProjectFooter } from "./components/ProjectFooter";
import { type IProject } from "../../types";

interface ProjectModalProps {
  proyecto: IProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  proyecto,
  onClose,
}) => {
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
        {/* Body tipo blog */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna izquierda */}
          <div className="space-y-6">
            <ProjectImage src={proyecto.imagen} alt={proyecto.titulo} />
            <ProjectTech tecnologias={proyecto.tecnologias} />
            <ProjectRole rol={proyecto.rol} />
          </div>
          {/* Columna derecha */}
          <div className="space-y-6">
            <ProjectDates
              inicio={proyecto.fechaInicio}
              fin={proyecto.fechaFin}
            />
            <ProjectDescription description={proyecto.longDescription} />
            {/* Aquí puedes agregar futuras secciones tipo blog, como pasos, links, imágenes extra, etc. */}
          </div>
        </div>
        <ProjectFooter link={proyecto.link} onClose={onClose} />
      </div>
    </div>
  );
};
