import Headder from "../Components/Hedder";
import usePageTitle from "../hooks/usePageTitle.js";

export default function About() {
    usePageTitle("About | Gaurav Gunjal");
    return (
        <div>
            <Headder />
            <div className="h-screen flex flex-col justify-center items-center gap-6">
                <h1 className="text-5xl font-bold text-center text-primary">Welcome to About Page</h1>
            </div>
        </div>
    );
}