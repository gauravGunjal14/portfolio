import Headder from "../Components/Hedder";

export default function About() {
    return (
        <div>
            <Headder />
            <div className="h-screen flex flex-col justify-center items-center gap-6">
                <h1 className="text-5xl font-bold text-center text-primary">Welcome to About Page</h1>
            </div>
        </div>
    );
}