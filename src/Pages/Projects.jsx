import SectionHeader from "../Components/SectionHeader.jsx";
import ProjectCard from "../Components/ProjectCard.jsx";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#FBFBF9] px-6 py-24">

      <SectionHeader
        title="Projects"
        subtitle="Some of the projects I’ve built to sharpen my frontend skills and solve real problems."
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}
