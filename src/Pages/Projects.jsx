import { projects } from "../data/projects";
import Headder from "../Components/Hedder.jsx";
import ProjectCard from "../Components/ProjectCard.jsx";
import usePageTitle from "../hooks/usePageTitle.js";

export default function Projects() {
  usePageTitle("Projects | Gaurav Gunjal");

  return (
    <div>
      <Headder />

      <section className="min-h-screen bg-[#FBFBF9] px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}