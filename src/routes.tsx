import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Portfolio = lazy(() => import("./components/Portfolio"));
const Certs = lazy(() => import("./modules/certifications/Certs"));
const Experiences = lazy(() => import("./modules/home/Experiences"));
const Projects = lazy(() => import("./modules/projects/Projects"));
const ProjectView = lazy(() => import("./modules/projects/ProjectView"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Portfolio />,
    children: [
      {
        index: true,
        element: <Navigate to="/experience" replace />,
      },
      {
        path: "certifications",
        element: <Certs />,
      },
      {
        path: "experience",
        element: <Experiences />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "/projects/:id",
    element: <ProjectView />,
  },
];
