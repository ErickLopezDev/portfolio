import { type IProject } from "../types";

import project1Img from "../assets/crellow.png";
import project2Img from "../assets/csrs.png";
import project3Img from "../assets/fitfat.png";

export const projects: IProject[] = [
  {
    id: "crellow",
    titulo: "Crellow",
    descripcion: "Clone de Trello",
    imagen: project1Img,
    tecnologias: [
      "Angular",
      "Express",
      "Typescript",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
      "Vercel",
      "Railway",
    ],
    rol: "Lead Developer",
    link: "#",
    github: "https://github.com/usuario/crellow",
    splash: "https://via.placeholder.com/900x300.png?text=Crellow+Splash",
    longDescription: `Crellow es un clon de Trello diseñado como una aplicación de gestión de proyectos colaborativos. Implementé la posibilidad de crear tableros, listas y tarjetas, incluyendo la funcionalidad de invitación de usuarios a proyectos específicos. El objetivo fue practicar principios de arquitectura modular y el diseño de un backend escalable con Express y Prisma. Las rutas RESTful se construyeron siguiendo buenas prácticas de seguridad (validación de inputs, protección de endpoints) y el frontend en Angular + Tailwind priorizó la experiencia de usuario con un diseño responsivo.\n\n**Implementación en la nube (AWS):**\n- Frontend desplegado en AWS Amplify\n- Backend y base de datos PostgreSQL en AWS RDS y ECS\n- CI/CD con GitHub Actions\n- Variables de entorno seguras\n\n**Blog técnico:**\n1. Arquitectura modular con Angular y Express\n2. Despliegue automatizado con AWS Amplify y ECS\n3. Gestión de usuarios y tableros\n4. Seguridad y validación de datos\n5. Experiencia de usuario y diseño responsivo\n\n*Próximamente: tutorial sobre cómo escalar el backend en AWS y mejores prácticas de resiliencia.*`,
    fechaInicio: "Abril de 2025",
    fechaFin: "Mayo de 2025",
  },
  {
    id: "csrs-store",
    titulo: "Cajamarca Sobre Ruedas Store",
    descripcion: "Aplicación web de gestión de inventario para el negocio.",
    imagen: project2Img,
    tecnologias: [".NET 8", "HTML", "CSS", "Bootstrap", "SqlServer"],
    rol: "Backend Developer",
    link: "#",
    github: "https://github.com/usuario/csrs-store",
    splash: "https://via.placeholder.com/900x300.png?text=CSRS+Splash",
    longDescription: `Este proyecto consistió en el desarrollo de un sistema de gestión de inventario para el negocio 'Cajamarca Sobre Ruedas'. Como backend developer, trabajé principalmente en la lógica de negocio y la integración con SQL Server. Implementé la autenticación y autorización de usuarios, creación de endpoints API seguros en .NET 8, y validaciones de datos para garantizar la integridad de la información de productos, ventas y reportes.\n\n**Implementación en la nube (AWS):**\n- Backend desplegado en AWS Elastic Beanstalk\n- Base de datos SQL Server en AWS RDS\n- Frontend estático en AWS S3 + CloudFront\n\n**Blog técnico:**\n1. Integración de .NET con AWS\n2. Seguridad y autenticación\n3. Reportes en tiempo real\n4. Migración de datos y backups automáticos\n\n*Próximamente: guía para escalar el sistema y agregar microservicios en AWS.*`,
    fechaInicio: "Diciembre de 2024",
    fechaFin: "Enero de 2025",
  },
  {
    id: "fit-fat",
    titulo: "FitFat - Cafetería",
    descripcion:
      "Dashboard interactivo con estadísticas de la viabilidad del negocio.",
    imagen: project3Img,
    tecnologias: [
      "React",
      "Express",
      "Typescript",
      "Tailwind",
      "MongoDB",
      "Mongoose",
      "Vercel",
      "Railway",
    ],
    rol: "DevOps Engineer",
    link: "#",
    github: "https://github.com/usuario/fitfat",
    splash: "https://via.placeholder.com/900x300.png?text=FitFat+Splash",
    longDescription: `FitFat es una aplicación orientada a la gestión de cafeterías, con un dashboard interactivo que muestra estadísticas clave sobre la viabilidad del negocio. El backend fue construido con Express y MongoDB (a través de Mongoose) para un manejo ágil de datos no estructurados. El frontend, desarrollado en React y Tailwind, permite visualizar métricas como ventas, clientes frecuentes y productos más rentables.\n\n**Implementación en la nube (AWS):**\n- Frontend en AWS Amplify\n- Backend y base de datos en AWS ECS + RDS\n- Docker para contenedorización\n- Monitoreo con AWS CloudWatch\n\n**Blog técnico:**\n1. Orquestación de servicios con Docker\n2. Despliegue continuo y pipelines CI/CD en AWS\n3. Monitoreo y logging avanzado con CloudWatch\n4. Escalabilidad y alta disponibilidad\n\n*Próximamente: integración con servicios de IA para predicción de ventas en AWS.*`,
    fechaInicio: "Febrero de 2025",
    fechaFin: "Abril de 2025",
  },
];
