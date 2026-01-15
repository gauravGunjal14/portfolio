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
        const ctx = gsap.context(() => {

            // ✅ Force correct initial state
            gsap.set(
                [avatarRef.current, subTextRef.current, ctaRef.current],
                { autoAlpha: 1 }
            );
            gsap.set(headingRef.current.children, { autoAlpha: 1 });

            const tl = gsap.timeline({
                defaults: { ease: "power2.out" },
            });

            tl.fromTo(
                avatarRef.current,
                { y: 20, scale: 0.95, autoAlpha: 0 },
                { y: 0, scale: 1, autoAlpha: 1, duration: 0.6, clearProps: "opacity" }
            )
                .fromTo(
                    headingRef.current.children,
                    { y: 30, autoAlpha: 0 },
                    { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.12, clearProps: "opacity" },
                    "-=0.2"
                )
                .fromTo(
                    subTextRef.current,
                    { y: 20, autoAlpha: 0 },
                    { y: 0, autoAlpha: 1, duration: 0.4, clearProps: "opacity" },
                    "-=0.2"
                )
                .fromTo(
                    ctaRef.current,
                    { y: 20, autoAlpha: 0 },
                    { y: 0, autoAlpha: 1, duration: 0.4, clearProps: "opacity" },
                    "-=0.2"
                );

        });

        return () => ctx.revert();
    }, []);


    return (
        <section className="relative min-h-screen overflow-hidden bg-[#F4F3EE]">

            {/* Background */}
            <GradientBackground />

            {/* Content */}
            <div className="relative z-20 h-screen flex flex-col items-center justify-center text-center px-6 isolate">

                <div
                    ref={avatarRef}
                    className="flex flex-col items-center relative mb-10">
                    <img className="h-25 w-25 rounded-full" src="./gaurav.png" alt="Gaurav Gunjal" />
                    <div className="mb-6 inline-flex w-40 items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white absolute -bottom-10 shadow-lg">
                        <span>👋</span>
                        <span>Hi, I’m Gaurav</span>
                    </div>
                </div>

                <div
                    ref={headingRef}
                    className="max-w-4xl hero-hidden">
                    <p className="text-2xl md:text-4xl font-medium bg-linear-to-r from-black to-gray-50 bg-clip-text text-transparent mb-2">
                        I’m a Frontend Developer,
                    </p>

                    <h1 className="text-4xl md:text-6xl font-semibold text-black leading-tight">
                        designing and building thoughtful web interfaces.
                    </h1>
                </div>

                <p
                    ref={subTextRef}
                    className="mt-6 max-w-xl text-gray-700 text-lg">
                    I focus on building clear, performant, and maintainable user interfaces
                    using modern frontend technologies.
                </p>

                <div
                    ref={ctaRef}
                    className="mt-8 flex gap-4">
                    <Link to="/projects" className="button-main w-36 px-6 py-3 rounded-xl">
                        View Projects
                    </Link>
                    <Link to="/contact" className="button-secondary w-36 px-6 py-3 rounded-xl">
                        Contact
                    </Link>
                </div>

            </div>
        </section>

    );
}
