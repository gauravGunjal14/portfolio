import Headder from "../Components/Hedder.jsx";
import Hero from "../Components/Hero.jsx";
import ProjectsPreview from "../Components/ProjectsPreview.jsx";
import usePageTitle from "../hooks/usePageTitle.js";

export default function Home() {
    usePageTitle("Gaurav Gunjal | Frontend Developer");
    return (
        <div>
            <Headder />
            <Hero />
            <ProjectsPreview />
        </div>
    );
}