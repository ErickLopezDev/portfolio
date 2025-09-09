import { useState } from "react";
import { CertificateCard } from "./CertificateCard";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../data/projects";
import { certs } from "../data/certs";
import { type IProject } from "../types/portfolio";
import { ExperienceTimeline } from "./ExperienceTimeLine";

export default function PortfolioTabs() {
  const [tab, setTab] = useState<"experience" | "projects" | "certs">("experience");
  const [modalProject, setModalProject] = useState<IProject | null>(null);

  return (
    <div className="relative z-10 max-w-5xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 dark:bg-neutral-800 p-2 rounded-full inline-flex gap-2">
          <button
            onClick={() => setTab("experience")}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-neutral-300 ${
              tab === "experience" ? "bg-black text-white" : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setTab("projects")}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-neutral-300 ${
              tab === "projects" ? "bg-black text-white" : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setTab("certs")}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-neutral-300 ${
              tab === "certs" ? "bg-black text-white" : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Certificates
          </button>
        </div>
      </div>

      {/* Content */}
      {tab === "experience" && (
        <div className="mx-auto w-fit">
          <ExperienceTimeline/>
        </div>
      )}

      {tab === "projects" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setModalProject} />
          ))}
        </div>
      )}

      {tab === "certs" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {certs.map((c) => (
            <CertificateCard key={c.id} certificado={c} />
          ))}
        </div>
      )}

      {/* Modal */}
      <ProjectModal proyecto={modalProject} onClose={() => setModalProject(null)} />
    </div>
  );
}
