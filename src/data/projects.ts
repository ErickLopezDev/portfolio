import { type IProject } from "../types/portfolio";

import project1Img from "../assets/crellow.png";
import project2Img from "../assets/csrs.png";
import project3Img from "../assets/fitfat.png";

export const projects: IProject[] = [
  {
    id: 1,
    titulo: "Project 1",
    descripcion: "An amazing project to showcase skills.",
    imagen: project1Img,
    tecnologias: ["React", "Node.js", "Tailwind"],
    rol: "Lead Developer",
    link: "#",
    longDescription:
      "Detailed description of the project, explaining features, challenges, and key learnings.",
    fechaInicio: "2025-01-01",
    fechaFin: "2025-03-01",
  },
  {
    id: 2,
    titulo: "Project 2",
    descripcion: "Another cool project with modern stack.",
    imagen: project2Img,
    tecnologias: ["Next.js", "TypeScript", "Supabase"],
    rol: "Backend Developer",
    link: "#",
    longDescription:
      "This project focused on backend integrations, authentication, and API development.",
    fechaInicio: "2025-02-10",
    fechaFin: "2025-04-20",
  },
  {
    id: 3,
    titulo: "Project 3",
    descripcion: "Experimenting with backend and microservices.",
    imagen: project3Img,
    tecnologias: ["Go", "Docker", "Kubernetes"],
    rol: "DevOps Engineer",
    link: "#",
    longDescription:
      "In this project, the challenge was setting up scalable infrastructure with containers and orchestration.",
    fechaInicio: "2025-03-15",
    fechaFin: "2025-05-30",
  },
];
