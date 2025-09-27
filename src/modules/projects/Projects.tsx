import React, { useState } from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { type IProject } from "../../types/portfolio";

const Projects: React.FC = () => {
  const [modalProject, setModalProject] = useState<IProject | null>(null);
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setModalProject} />
        ))}
      </div>
      <ProjectModal
        proyecto={modalProject}
        onClose={() => setModalProject(null)}
      />
    </div>
  );
};

export default Projects;
