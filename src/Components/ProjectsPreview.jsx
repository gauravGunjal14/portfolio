import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsPreview() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-24 px-6 bg-[#FBFBF9]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black">
          Featured Projects
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          A selection of projects that highlight my frontend skills and problem-solving approach.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/projects"
            className="button-secondary inline-flex px-6 py-3 rounded-xl">
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}
