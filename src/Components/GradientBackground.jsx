export default function GradientBackground() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: `
        radial-gradient(ellipse 80% 60% at 70% 20%, rgba(175, 109, 255, 0.55), transparent 68%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.263), transparent 68%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 229, 145, 0.68), transparent 88%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.15), transparent 68%),
        linear-gradient(180deg, #ffffff 0%, #ffecf2 100%
      `,
      }}
    />
  );
}
