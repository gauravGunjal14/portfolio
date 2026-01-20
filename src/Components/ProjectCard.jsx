export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 1;
  return (
    <div
      className={`bg-white flex flex-col md:flex-row gap-10 rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md
        ${isEven ? "md:flex-row-reverse" : ""}
      `}>
      <div className="relative w-full md:w-[480px] aspect-16/10 overflow-hidden rounded-xl">
        <img
          src={project.imageUrl}
          alt={project.imageName}
          className="w-full h-full object-cover scale-[1.05]"
          style={{ objectPosition: "center 20%" }}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-black">
          {project.title}
        </h3>

        <p className="mt-3 text-gray-600 text-sm text-justify leading-relaxed max-w-xl">
          {project.details}
        </p>

        <div className="flex flex-col gap-4 mt-3">
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

          <div className="flex gap-3 mt-2">
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
    </div>
  );
}