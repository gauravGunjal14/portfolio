import ProjectCard from "../Components/ProjectCard.jsx";
import { projects } from "../data/projects";
import Headder from "../Components/Hedder.jsx";

export default function Projects() {
  return (
    <div>
      <Headder />
      <section className="min-h-screen bg-[#FBFBF9] px-6 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </section>
    </div>
  );
}
