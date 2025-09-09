import { type IProject } from "../types/portfolio";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

interface Props {
  project: IProject;
  onOpen: (p : IProject)=> void;
}

export function ProjectCard({ project }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative rounded-xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700 group hover:scale-[1.01] transition-transform z-10 cursor-pointer"
      >
        <img
          src={project.imagen}
          alt={project.titulo}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent" />

        <div className="absolute bottom-0 text-white p-5 z-10">
          <h4 className="text-xl font-bold mb-1">{project.titulo}</h4>
          <p className="text-sm text-neutral-300 mb-2">
            {project.fechaInicio} - {project.fechaFin}
          </p>
          <p className="text-sm text-neutral-200 mb-3 max-w-md">
            {project.descripcion}
          </p>

          <div className="flex flex-wrap gap-2 mb-2">
            {project.tecnologias.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-full text-xs bg-white/20 border border-white/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <ProjectModal proyecto={project} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
