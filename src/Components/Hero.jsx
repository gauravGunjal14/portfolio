import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
    const bgRef = useRef(null);

    useEffect(() => {
        gsap.to(bgRef.current, {
            x: 60,
            y: -45,
            rotation: 0.5,
            duration: 14,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
        });
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#F4F3EE]">

            {/* Ambient gradient layer */}
            <div
                ref={bgRef}
                className="absolute inset-0"
                style={{
                    backgroundImage: `
  radial-gradient(
    90% 90% at 18% 78%,
    rgba(110, 139, 122, 0.18),
    transparent 80%
  ),
  radial-gradient(
    80% 80% at 82% 22%,
    rgba(170, 200, 215, 0.18),
    transparent 80%
  )
`
                    ,
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6 gap-6">
                <h1 className="text-5xl font-bold text-primary">
                    Building thoughtful digital experiences.
                </h1>

                <p className="max-w-xl text-secondary text-lg">
                    I design and develop clean, purposeful interfaces with a focus on
                    clarity, performance, and long-term value.
                </p>

                <div className="flex gap-4">
                    <a className="button-bg-accent px-6 py-3 rounded-xl">
                        View Projects
                    </a>
                    <a className="px-6 py-3 rounded-xl border border-primary/20">
                        Contact
                    </a>
                </div>
            </div>
        </section>
    );
}
