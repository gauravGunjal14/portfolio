export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm transition-shadow hover:shadow-md">

      <div className="relative w-full h-60 overflow-hidden rounded-xl">
        <img
          src={project.imageUrl}
          alt={project.imageName}
          className="w-full h-full object-cover scale-[1.08]"
          style={{ objectPosition: "center 20%" }}
        />
      </div>

      <h3 className="mt-3 text-xl font-semibold text-black">
        {project.title}
      </h3>

      <p className="mt-3 max-w-md text-gray-600 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex justify-between items-center mt-3">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 rounded-md bg-gray-100 text-gray-600 border border-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          <a
            href={project.live}
            target="_blank"
            className="button-main flex justify-center items-center w-20 px-4 py-2 rounded-lg text-sm"
          >
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            className="button-secondary flex justify-center items-center w-20 px-4 py-2 rounded-lg text-sm"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}