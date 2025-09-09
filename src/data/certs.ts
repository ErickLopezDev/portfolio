import { type ICertificate } from "../types/portfolio";

export const certs: ICertificate[] = [
  {
    id: 1,
    titulo: "CompTIA Security+",
    institucion: "CompTIA",
    fecha: "2023",
    imagen: "https://images.credly.com/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob", 
    obtenido: true
  },
  {
    id: 2,
    titulo: "AWS Certified Cloud Practitioner",
    institucion: "Amazon Web Services",
    fecha: "2023",
    imagen: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    obtenido: false

  },
  {
    id: 3,
    titulo: "AWS Certified DevOps Engineer – Professional",
    institucion: "Amazon Web Services",
    fecha: "2024",
    imagen: "https://images.credly.com/images/bd31ef42-d460-493e-8503-39592aaf0458/twitter_thumb_201604_image.png",
    obtenido: true

  },
  {
    id: 4,
    titulo: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    institucion: "Microsoft",
    fecha: "2023",
    imagen: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
    obtenido: false

  },
  {
    id: 5,
    titulo: "Microsoft Certified: DevOps Engineer Expert",
    institucion: "Microsoft",
    fecha: "2024",
    imagen: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
    obtenido: false

  },
];
