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
    tecnologias: ["Angular", "Express", "Typescript", "Tailwind", "PostgreSQL", "Prisma", "Vercel", "Railway"],
    rol: "Lead Developer",
    link: "#",
    longDescription:
      `Crellow es un clon de Trello diseñado como una aplicación de gestión de proyectos colaborativos. Implementé la posibilidad de crear tableros, listas y tarjetas, incluyendo la funcionalidad de invitación de usuarios a proyectos específicos. El objetivo fue practicar principios de arquitectura modular y el diseño de un backend escalable con Express y Prisma. Las rutas RESTful se construyeron siguiendo buenas prácticas de seguridad (validación de inputs, protección de endpoints) y el frontend en Angular + Tailwind priorizó la experiencia de usuario con un diseño responsivo.\n\n**Implementación en la nube:**\n- Frontend desplegado en Vercel\n- Backend y base de datos PostgreSQL en Railway\n- CI/CD con GitHub Actions\n- Variables de entorno seguras\n\n**Blog técnico:**\n1. Arquitectura modular con Angular y Express\n2. Despliegue automatizado con Vercel y Railway\n3. Gestión de usuarios y tableros\n4. Seguridad y validación de datos\n5. Experiencia de usuario y diseño responsivo\n\n*Próximamente: tutorial sobre cómo migrar el backend a Azure y mejores prácticas de escalabilidad.*`,
    fechaInicio: "2025-01-01",
    fechaFin: "2025-03-01",
  },
  {
    id: "csrs-store",
    titulo: "Cajamarca Sobre Ruedas Store",
    descripcion: "Aplicación web de gestión de inventario para el negocio.",
    imagen: project2Img,
    tecnologias: [".NET 8", "HTML", "CSS", "Bootstrap", "SqlServer"],
    rol: "Backend Developer",
    link: "#",
    longDescription:
      `Este proyecto consistió en el desarrollo de un sistema de gestión de inventario para el negocio 'Cajamarca Sobre Ruedas'. Como backend developer, trabajé principalmente en la lógica de negocio y la integración con SQL Server. Implementé la autenticación y autorización de usuarios, creación de endpoints API seguros en .NET 8, y validaciones de datos para garantizar la integridad de la información de productos, ventas y reportes.\n\n**Implementación en la nube:**\n- Backend desplegado en Azure App Service\n- Base de datos SQL Server en Azure SQL\n- Frontend estático en Azure Storage\n\n**Blog técnico:**\n1. Integración de .NET con Azure\n2. Seguridad y autenticación\n3. Reportes en tiempo real\n4. Migración de datos y backups automáticos\n\n*Próximamente: guía para escalar el sistema y agregar microservicios.*`,
    fechaInicio: "2025-02-10",
    fechaFin: "2025-04-20",
  },
  {
    id: "fit-fat",
    titulo: "FitFat - Cafetería",
    descripcion: "Dashboard interactivo con estadísticas de la viabilidad del negocio.",
    imagen: project3Img,
    tecnologias: ["React", "Express", "Typescript", "Tailwind", "MongoDB", "Mongoose", "Vercel", "Railway"],
    rol: "DevOps Engineer",
    link: "#",
    longDescription:
      `FitFat es una aplicación orientada a la gestión de cafeterías, con un dashboard interactivo que muestra estadísticas clave sobre la viabilidad del negocio. El backend fue construido con Express y MongoDB (a través de Mongoose) para un manejo ágil de datos no estructurados. El frontend, desarrollado en React y Tailwind, permite visualizar métricas como ventas, clientes frecuentes y productos más rentables.\n\n**Implementación en la nube:**\n- Frontend en Vercel\n- Backend y base de datos en Railway\n- Docker para contenedorización\n- Monitoreo con Grafana y Prometheus\n\n**Blog técnico:**\n1. Orquestación de servicios con Docker\n2. Despliegue continuo y pipelines CI/CD\n3. Monitoreo y logging avanzado\n4. Escalabilidad y alta disponibilidad\n\n*Próximamente: integración con servicios de IA para predicción de ventas.*`,
    fechaInicio: "2025-03-15",
    fechaFin: "2025-05-30",
  },
];
