import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 40,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ willChange: "transform, opacity" }}
      className="bg-white flex flex-col md:flex-row gap-12 rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow"
    >

      <div className="relative w-full md:w-[480px] aspect-16/10 overflow-hidden rounded-2xl bg-black/5">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-col justify-center max-w-xl">
        <span className="text-sm text-gray-400 mb-2">
          {project.role} • {project.year}
        </span>

        <h3 className="text-2xl md:text-3xl font-semibold text-black">
          {project.title}
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed text-justify">
          {project.details}
        </p>

        {project.highlights && (
          <ul className="mt-4 list-disc list-inside text-gray-500 text-sm space-y-1">
            {project.highlights.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1.5 rounded-lg bg-black/5 text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <a
            href={project.live}
            target="_blank"
            className="button-main px-5 py-2 rounded-lg text-sm"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            className="button-secondary px-5 py-2 rounded-lg text-sm"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}