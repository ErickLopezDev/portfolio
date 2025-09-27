import React from "react";

interface ProjectDescriptionProps {
  description: string;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
}) => (
  <div className="prose dark:prose-invert max-w-none">
    <p>{description}</p>
  </div>
);
