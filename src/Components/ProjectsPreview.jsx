import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";
import BlueBackground from "./BlueBackground.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPreview() {
  const featuredProjects = projects.filter(p => p.featured);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const paraRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      rowsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      }
    );
  }, []);

  return (
    <div className="relative w-full bg-[#fefcff]">
      <BlueBackground />

      <section
        id="projects"
        ref={sectionRef}
        className="py-28 px-6"
      >
        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl mb-24">
            <h2
              ref={headerRef}
              className="text-4xl md:text-5xl font-semibold text-black"
            >
              Projects
            </h2>

            <p
              ref={paraRef}
              className="mt-4 text-lg text-gray-500"
            >
              A curated selection of projects focused on usability,
              performance, and real-world problem solving.
            </p>
          </div>

          <div className="flex flex-col gap-32">
            {featuredProjects.map((project, index) => {
              const reverse = index % 2 !== 0;

              return (
                <div
                  key={project.id}
                  ref={el => (rowsRef.current[index] = el)}
                  className={`flex flex-col ${
                    reverse ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-16 items-center`}
                >

                  <div className="w-full md:w-1/2">
                    <div className="rounded-3xl overflow-hidden bg-black/5">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="text-sm text-gray-400 mb-3">
                      {project.role} • {project.year}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold text-black">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-gray-500 max-w-md">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="px-4 py-1.5 rounded-lg text-sm bg-black/5 text-gray-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 mt-8 font-medium text-gray-600 bg-black/5 px-4 py-2 rounded-lg group"
                    >
                      View Case Study
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-32 w-full flex justify-center">
            <Link
              to="/projects"
              className="button-main inline-flex items-center gap-3 text-lg font-medium px-4 py-2 rounded-lg"
            >
              View all projects
              <span>
                →
              </span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}