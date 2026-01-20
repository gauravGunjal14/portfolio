export default function BlueBackground() {
    return (
        <div
            className="absolute inset-0 z-0"
            style={{
                backgroundImage: `
        radial-gradient(circle at 10% 50%, rgba(173, 216, 230, 0.35), transparent 30%),
        radial-gradient(circle at 100% 90%, rgba(173, 216, 230, 0.35), transparent 20%)`,
            }}
        />
    );
}