import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Headder from "../Components/Hedder";
import { projects } from "../data/projects";
import ProjectCard from "../Components/ProjectCard";
import BlueBackground from "../components/BlueBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const paraRef = useRef(null);

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
  }, []);

  return (
    <div className="relative w-full bg-[#fefcff] min-h-screen">
      <BlueBackground />

      <Headder />

      <section
        ref={sectionRef}
        className="max-w-6xl mx-auto px-6 py-28"
      >
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <h1
            ref={headerRef}
            className="text-4xl md:text-5xl font-semibold text-black"
          >
            Projects
          </h1>

          <p
            ref={paraRef}
            className="mt-4 text-lg text-gray-500"
          >
            A detailed look at the projects I’ve built to learn, experiment,
            and solve real-world problems through thoughtful UI and frontend
            engineering.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
