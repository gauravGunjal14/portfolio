import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "../data/projects";
import ProjectPreviewCard from "./ProjectPreviewCard.jsx";
import BlueBackground from "./BlueBackground.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPreview() {
  const featuredProjects = projects.filter(p => p.featured);

  const sectionRef = useRef(null);
  const hedderRef = useRef(null);
  const paraRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {

    gsap.fromTo(hedderRef.current,
      {
        opacity: 0,
        y: 20,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 0.6,
        }
      }
    )

    gsap.fromTo(paraRef.current,
      {
        opacity: 0,
        y: 20,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 55%",
          scrub: 0.6,
        }
      }
    );
    if (!sectionRef.current || cardsRef.current.length === 0) return;

    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 32,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 30%",
          scrub: 0.6,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#fefcff] relative">
      <BlueBackground />
      <section id="projects" ref={sectionRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2
            ref={hedderRef}
            className="text-3xl md:text-4xl font-semibold text-center text-black">
            Projects
          </h2>

          <p
            ref={paraRef}
            className="mt-4 text-center text-gray-500 max-w-2xl mx-auto">
            A selection of projects where i focused on clean UI, performance, and real-world usability.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[index] = el)}
                style={{ willChange: "transform, opacity" }}
              >
                <ProjectPreviewCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="button-secondary inline-flex px-6 py-3 rounded-xl">
              View All Projects
            </Link>
          </div>

        </div>
      </section>
    </div >

  );
}
