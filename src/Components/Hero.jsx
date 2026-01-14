import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import GradientBackground from "./GradientBackground.jsx"
import { Link } from "react-router-dom";

export default function Hero() {

    const avatarRef = useRef(null);
    const headingRef = useRef(null);
    const subTextRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.from(avatarRef.current, {
            opacity: 0,
            y: 20,
            scale: 0.95,
            duration: 0.6,
        })
            .from(
                headingRef.current.children,
                {
                    opacity: 0,
                    y: 30,
                    duration: 0.6,
                    stagger: 0.12,
                },
                "-=0.2"
            )
            .from(
                subTextRef.current,
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.4,
                },
                "-=0.2"
            )
            .from(
                ctaRef.current,
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.4,
                },
                "-=0.2"
            );
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#F4F3EE]">
            {/* canvas layer */}
            <GradientBackground />

            {/* Content */}
            <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">

                <div
                    ref={avatarRef}
                    className="flex flex-col items-center relative mb-10">
                    <img className="h-25 w-25 rounded-full" src="./gaurav.jpg" alt="Gaurav Gunjal" />
                    <div className="mb-6 inline-flex w-40 items-center gap-2 rounded-xl bg-black/90 px-4 py-2 text-sm font-semibold text-white absolute -bottom-10 shadow-lg">
                        <span>👋</span>
                        <span>Hi, I’m Gaurav</span>
                    </div>
                </div>

                <div ref={headingRef} className="max-w-4xl">
                    <p className="text-2xl md:text-4xl font-medium bg-linear-to-r from-black to-gray-100 bg-clip-text text-transparent mb-2">
                        I’m a Frontend Developer,
                    </p>

                    <h1 className="text-4xl md:text-6xl font-semibold bg-linear-to-r from-black to-green-950 bg-clip-text text-transparent leading-tight">
                        designing and building thoughtful web interfaces.
                    </h1>
                </div>

                <p ref={subTextRef} className="mt-6 max-w-xl text-secondary text-lg">
                    I focus on building clear, performant, and maintainable user interfaces
                    using modern frontend technologies.
                </p>


                <div ref={ctaRef} className="mt-8 flex gap-4">
                    <Link to="/projects" className="bg-accent w-36 px-6 py-3 rounded-xl">
                        View Projects
                    </Link>
                    <Link to="/contact" className="button-bg-accent w-36 px-6 py-3 rounded-xl">
                        Contact
                    </Link>
                </div>
            </div>
        </section>
    );
}
