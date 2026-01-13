import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import GradientBackground from "./GradientBackground.jsx"
import { Link } from "react-router-dom";

export default function Hero() {

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#F4F3EE]">
            {/* canvas layer */}
            <GradientBackground />

            {/* Content */}
            <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">

                <div className="flex flex-col items-center relative mb-10">
                    <img className="h-25 w-25 rounded-full" src="./gaurav.jpg" alt="Gaurav Gunjal" />
                    <div className="mb-6 inline-flex w-40 items-center gap-2 rounded-xl bg-black/90 px-4 py-2 text-sm font-semibold text-white absolute -bottom-10 shadow-lg">
                        <span>👋</span>
                        <span>Hi, I’m Gaurav</span>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <p className="text-2xl md:text-4xl font-medium bg-linear-to-r from-black to-gray-100 bg-clip-text text-transparent mb-2">
                        I’m a Frontend Developer,
                    </p>

                    <h1 className="text-4xl md:text-6xl font-semibold bg-linear-to-r from-black to-green-950 bg-clip-text text-transparent leading-tight">
                        designing and building thoughtful web interfaces.
                    </h1>
                </div>

                <p className="mt-6 max-w-xl text-secondary text-lg">
                    I focus on building clear, performant, and maintainable user interfaces
                    using modern frontend technologies.
                </p>

                <div className="mt-8 flex gap-4">
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
