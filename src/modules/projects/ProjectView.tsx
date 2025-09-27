import { useParams, Navigate, useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";
import { ProjectImage } from "./components/ProjectImage";
import { ProjectTech } from "./components/ProjectTech";
import { ProjectRole } from "./components/ProjectRole";
import { ProjectDates } from "./components/ProjectDates";
import { ProjectDescription } from "./components/ProjectDescription";
import { ProjectFooter } from "./components/ProjectFooter";

export default function ProjectView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className=" z-300 min-h-screen bg-neutral-50 dark:bg-black text-black dark:text-white font-sans transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button
          onClick={() => navigate("/projects")}
          className="mb-8 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          ← Volver a proyectos
        </button>
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {project.titulo}
        </h1>
        <ProjectImage src={project.imagen} alt={project.titulo} />
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ProjectTech tecnologias={project.tecnologias} />
            <ProjectRole rol={project.rol} />
            <ProjectDates inicio={project.fechaInicio} fin={project.fechaFin} />
          </div>
          <div className="space-y-6">
            <ProjectDescription description={project.longDescription} />
            {/* Aquí puedes agregar más secciones tipo blog, como tutoriales, imágenes, pasos, etc. */}
          </div>
        </div>
        <ProjectFooter link={project.link} onClose={() => {}} />
      </div>
    </div>
  );
}
