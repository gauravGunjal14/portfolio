import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Headder() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (menuOpen && menuRef.current) {
            const tl = gsap.timeline();
            tl.fromTo(menuRef.current,
                {
                    opacity: 0,
                    y: 20,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power4.out",
                }
            );

            tl.from(
                menuRef.current.querySelectorAll(".menu-items"),
                {
                    opacity: 0,
                    y: 10,
                    duration: 0.25,
                    ease: "power2.out",
                    stagger: 0.1
                }
            );
        }

        function handleClickOutside(e) {
            if (
                menuOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !buttonRef.current.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen])

    return (
        <header className="glass-bg z-100 h-16 flex justify-between items-center px-10 fixed top-0 w-full">

            {/* profile section */}
            <Link to="/" className="flex items-center gap-4 ">
                <img className="h-10 border-2 border-white rounded-md shadow-lg " src="/gaurav.png" alt="Gaurav Gunjal" />
                <div className="flex flex-col">
                    <h1 className="text-primary text-md font-medium">Gaurav Gunjal</h1>
                    {/* online indicator */}
                    <div className="flex align-center gap-1">
                        <svg width="12" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#4CAF50" strokeWidth="6" opacity="0.4">
                                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
                                <animate attributeName="r" values="42;48;42" dur="1.8s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="50" cy="50" r="20" fill="#4CAF50">
                                <animate attributeName="r" values="18;22;18" dur="1.8s" repeatCount="indefinite" />
                            </circle>
                        </svg>
                        <p className="text-green-500 text-[12px] h-5">Online</p>
                    </div>
                </div>
            </Link>

            {/* Menu section */}
            <div className="flex items-center gap-6 font-medium">
                <a className="button-secondary p-3 hidden md:flex items-center justify-center rounded-xl">My Resume</a>

                {/* Menu button */}
                <button
                    ref={buttonRef}
                    className="button-main p-2 md:w-30 md:py-3 md:px-4 flex items-center justify-between rounded-xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label="Toggle menu"
                >
                    <span className="hidden md:inline">Menu</span>
                    {!menuOpen && (
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0,0,256,256">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(10.66667,10.66667)"><path d="M2,5v2h20v-2zM2,11v2h20v-2zM2,17v2h20v-2z"></path></g></g>
                        </svg>
                    )}

                    {menuOpen && (
                        <svg className="close-btn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0,0,256,256">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(6.4,6.4)"><path d="M21,24.15l-12.143,12.143l-4.15,-4.15l12.143,-12.143l-12.143,-12.143l4.15,-4.15l12.143,12.143l12.143,-12.143l4.15,4.15l-12.143,12.143l12.143,12.143l-4.15,4.15z"></path><path d="M33.143,4.414l3.443,3.443l-11.436,11.436l-0.707,0.707l0.707,0.707l11.436,11.436l-3.443,3.443l-11.436,-11.436l-0.707,-0.707l-0.707,0.707l-11.436,11.436l-3.443,-3.443l11.436,-11.436l0.707,-0.707l-0.707,-0.707l-11.436,-11.436l3.443,-3.443l11.436,11.436l0.707,0.707l0.707,-0.707l11.436,-11.436M33.143,3l-12.143,12.143l-12.143,-12.143l-4.857,4.857l12.143,12.143l-12.143,12.143l4.857,4.857l12.143,-12.143l12.143,12.143l4.857,-4.857l-12.143,-12.143l12.143,-12.143l-4.857,-4.857z"></path></g></g>
                        </svg>
                    )}
                </button>
            </div>

            {/* Dropdown menu */}
            {menuOpen && (
                <nav
                    ref={menuRef}
                    className="absolute glass-bg glass-bg--menu top-[72px] right-4 md:right-10 w-50 md:w-65 rounded-xl shadow-lg flex flex-col p-2">
                    <Link to={"/"} className="menu-items hover:bg-[#e0e0e08c] rounded-lg p-2 flex items-center gap-4">
                        <div className="button-bg-accent rounded-lg p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                                <g fill="#4B5563" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.33333,5.33333)"><path d="M23.95117,4c-0.31984,0.01092 -0.62781,0.12384 -0.87891,0.32227l-14.21289,11.19727c-1.8039,1.42163 -2.85937,3.59398 -2.85937,5.89063v19.08984c0,1.36359 1.13641,2.5 2.5,2.5h10c1.36359,0 2.5,-1.13641 2.5,-2.5v-10c0,-0.29504 0.20496,-0.5 0.5,-0.5h5c0.29504,0 0.5,0.20496 0.5,0.5v10c0,1.36359 1.13641,2.5 2.5,2.5h10c1.36359,0 2.5,-1.13641 2.5,-2.5v-19.08984c0,-2.29665 -1.05548,-4.46899 -2.85937,-5.89062l-14.21289,-11.19727c-0.27738,-0.21912 -0.62324,-0.33326 -0.97656,-0.32227zM24,7.41016l13.28516,10.4668c1.0841,0.85437 1.71484,2.15385 1.71484,3.5332v18.58984h-9v-9.5c0,-1.91495 -1.58505,-3.5 -3.5,-3.5h-5c-1.91495,0 -3.5,1.58505 -3.5,3.5v9.5h-9v-18.58984c0,-1.37935 0.63074,-2.67883 1.71484,-3.5332z"></path></g></g>
                            </svg>
                        </div>
                        Home
                    </Link>
                    <Link to={"/projects"} className="menu-items hover:bg-[#e0e0e08c] rounded-lg p-2 flex items-center gap-4">
                        <div className="button-bg-accent rounded-lg p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4B5563" className="bi bi-code-slash" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                            </svg>
                        </div>
                        Projects
                    </Link>
                    <Link to={"/about"} className="menu-items hover:bg-[#e0e0e08c] rounded-lg p-2 flex items-center gap-4">
                        <div className="button-bg-accent rounded-lg p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4B5563" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                        </div>
                        About
                    </Link>
                </nav>
            )}
        </header>
    );
}