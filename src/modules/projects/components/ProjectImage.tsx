import React from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => (
  <div className="w-full h-56 overflow-hidden rounded-xl shadow">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);
