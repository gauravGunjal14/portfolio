import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">

      <h3 className="text-xl font-semibold text-black">
        {project.title}
      </h3>

      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-6">
        <a
          href={project.live}
          target="_blank"
          className="button-main px-4 py-2 rounded-xl text-sm"
        >
          Live
        </a>
        <a
          href={project.github}
          target="_blank"
          className="button-secondary px-4 py-2 rounded-xl text-sm"
        >
          Code
        </a>
      </div>
    </div>
  );
}
