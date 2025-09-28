import React from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { useNavigate } from "react-router-dom";

const Projects: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 py-6 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onOpen={() => navigate(`/projects/${p.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
