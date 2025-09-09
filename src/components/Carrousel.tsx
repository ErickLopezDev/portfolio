import Marquee from "react-fast-marquee";
import {
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiSonarqube,
  SiOwasp,
  SiNodedotjs,
  SiPostgresql,
  SiDotnet,
  SiTypescript,
  SiExpress,
  SiAmazon,
} from "react-icons/si";

export default function Carrousel() {
  const devSecOpsTools = [
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiAmazon />, name: "AWS" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <SiSonarqube />, name: "SonarQube" },
    { icon: <SiOwasp />, name: "OWASP" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiDotnet />, name: ".NET" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiExpress />, name: "Express" },
  ];

  return (
    <section className="md:px-30 lg:px-80">
      <h3 className="text-2xl font-bold text-center mb-4">
        Herramientas
      </h3>

      <Marquee
        gradient={false}
        speed={30}
        className="text-4xl h-20 "
      >
        {devSecOpsTools.map((tool, i) => (
          <div key={i} className="mx-6 relative group h-12">
            <span className="text-neutral-600 dark:text-neutral-300">
              {tool.icon}
            </span>
            <div className="absolute hidden group-hover:block bg-neutral-100 text-black text-xs rounded py-2 px-2 -mt-12 ml-5 w-max group-hover:z-40">
                {tool.name}
              </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
