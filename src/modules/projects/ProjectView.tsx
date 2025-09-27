import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import { ProjectTech } from "./components/ProjectTech";
import { ProjectRole } from "./components/ProjectRole";
import { ProjectDates } from "./components/ProjectDates";
import { BlogRenderer } from "./BlogRenderer";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [blog, setBlog] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      import(`../../data/projects/blogs/${id}.json`)
        .then((mod) => setBlog(mod.default))
        .catch(() => setBlog([]));
    }
  }, [id]);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#0e0e0e] text-black dark:text-white font-sans transition-colors duration-500 overflow-x-hidden relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:18px_24px] pointer-events-none z-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        {/* Navegación superior con íconos Lucide ordenados */}
        <div className="flex flex-wrap gap-3 items-center justify-between mb-8">
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 px-4 py-2 bg-black  text-white rounded-lg hover:bg-gray-700 transition font-semibold"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 px-4 py-2 dark:bg-white bg-black dark:text-black text-white rounded-lg hover:bg-neutral-200 transition font-semibold"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          </div>
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Volver</span>
          </button>
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {project.titulo}
        </h1>
        {/* Imagen principal del proyecto */}
        <div className="mb-8">
          <img
            src={project.imagen}
            alt={project.titulo + " main"}
            loading="lazy"
            className="rounded-xl w-full object-cover shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3">
          {/* Aside delgado con info técnica */}
          <aside className="space-y-6 md:pr-2">
            <ProjectTech tecnologias={project.tecnologias} />
            <ProjectRole rol={project.rol} />
            <ProjectDates inicio={project.fechaInicio} fin={project.fechaFin} />
          </aside>
          {/* Blog principal */}
          <section className="space-y-6">
            <BlogRenderer content={blog} />
          </section>
        </div>
      </div>
    </div>
  );
}
