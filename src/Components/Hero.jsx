import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import GradientBackground from "./GradientBackground.jsx"

export default function Hero() {

    const avatarRef = useRef(null);
    const emojiRef = useRef(null);
    const headingRef = useRef(null);
    const subTextRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.set(
                [avatarRef.current, subTextRef.current, ctaRef.current],
                { autoAlpha: 0 }
            );
            gsap.set(headingRef.current.children, { autoAlpha: 0 });

            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                    duration: 0.6,
                },
            });
            tl
                .fromTo(
                    avatarRef.current,
                    { y: 28, scale: 0.94, autoAlpha: 0 },
                    { y: 0, scale: 1, autoAlpha: 1 }
                )

                .fromTo(
                    headingRef.current.children,
                    { y: 36, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        stagger: 0.14,
                    },
                    "-=0.35"
                )

                .fromTo(
                    subTextRef.current,
                    { y: 22, autoAlpha: 0 },
                    { y: 0, autoAlpha: 1 },
                    "-=0.35"
                )

                .fromTo(
                    ctaRef.current,
                    { y: 18, autoAlpha: 0 },
                    { y: 0, autoAlpha: 1 },
                    "-=0.35"
                )

                .fromTo(
                    emojiRef.current,
                    { rotate: -10 },
                    {
                        rotate: 12,
                        yoyo: true,
                        repeat: 3,
                        duration: 0.45,
                        ease: "sine.inOut",
                    },
                    "-=0.6"
                );
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative z-0 min-h-screen overflow-hidden bg-[#F4F3EE]">
            <GradientBackground />

            <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-6 isolate">

                <div
                    ref={avatarRef}
                    className="relative mb-10 flex flex-col items-center"
                >
                    {/* soft ring */}
                    {/* <div className="absolute inset-0 rounded-full blur-xl bg-black/5 scale-125" /> */}

                    <img
                        src="./gaurav.png"
                        alt="Gaurav Gunjal"
                        className="relative h-24 w-24 rounded-full object-cover border border-white shadow-lg"
                    />

                    <div className="absolute w-40 -bottom-4 inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white shadow-lg">
                        <span ref={emojiRef}>👋</span>
                        <span>Hi, I’m Gaurav</span>
                    </div>
                </div>

                <div ref={headingRef} className="max-w-4xl">
                    <p className="text-lg md:text-xl font-medium text-gray-500 mb-2">
                        Frontend Developer
                    </p>

                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-800">
                        Designing and building
                        <br />
                        <span className="text-gray-900">
                            thoughtful web interfaces.
                        </span>
                    </h1>
                </div>

                <p
                    ref={subTextRef}
                    className="mt-6 max-w-xl text-gray-500 text-base md:text-lg"
                >
                    I focus on building clear, performant, and maintainable user interfaces
                    using modern frontend technologies.
                </p>

                <div
                    ref={ctaRef}
                    className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=gauravgunjal45@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-main flex items-center justify-center gap-2 w-44 px-6 py-3 rounded-xl"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M4 6l8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Contact Me
                    </a>

                    <a
                        href="#projects"
                        className="button-secondary flex items-center justify-center w-44 px-6 py-3 rounded-xl"
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </section>
    );
}
