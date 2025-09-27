import { type IExperience } from "../types";

export const experiences: IExperience[] = [
  {
    id: 1,
    empresa: "LicitApp ",
    puesto: "Frontend & Backend",
    periodo: "Septiembre 2025 - Presente",
    descripcion:
      "Encargado de la implementación de funcionalidades que automatizan procesos de licitaciones, así como el desarrollo de un sistema de chat potenciado por IA. El rol incluyó desde el diseño de arquitectura hasta la integración con servicios en la nube para garantizar escalabilidad y confiabilidad.",
    highlights: [
      "Diseño de una arquitectura modular escalable que permite la integración de nuevos módulos sin afectar el núcleo de la aplicación.",
      "Integración con APIs externas de proveedores y organismos públicos para ingesta de datos de licitaciones en tiempo real.",
      "Optimización del frontend mediante migración a React 18, mejorando significativamente la experiencia de usuario y reduciendo tiempos de carga.",
      "Uso de Supabase para autenticación y gestión de datos con PostgreSQL en la nube.",
      "Implementación de servicios en Google Cloud Platform (GCP), incluyendo despliegue de contenedores, balanceo de carga y monitoreo centralizado.",
    ],
  },
  {
    id: 2,
    empresa: "Proyectos Freelance",
    puesto: "Fullstack Developer",
    periodo: "Enero 2025 - Junio 2025",
    descripcion:
      "Desarrollo de aplicaciones web a medida para pequeños negocios, cubriendo el ciclo completo desde el diseño de interfaces hasta la implementación de la lógica de negocio y el despliegue en entornos de producción. La experiencia incluyó trabajo cercano con clientes para definir requerimientos y traducirlos en soluciones prácticas y escalables.",
    highlights: [
      "Diseño y construcción de dashboards personalizados para mostrar métricas de ventas, inventario y clientes en tiempo real.",
      "Desarrollo de interfaces responsivas en React con componentes reutilizables, orientadas a mejorar la experiencia de usuario.",
      "Creación de APIs en Node.js y Express para manejar la lógica de negocio, autenticación y comunicación con la base de datos.",
      "Optimización de consultas complejas en PostgreSQL, logrando reducir los tiempos de respuesta de segundos a milisegundos.",
      "Despliegue de aplicaciones en entornos de hosting cloud y configuración de pipelines básicos de CI/CD.",
      "Implementación de servicios de autenticación, subida de archivos e integración de pasarelas de pago, cubriendo necesidades típicas de aplicaciones fullstack.",
    ],
  },
];
