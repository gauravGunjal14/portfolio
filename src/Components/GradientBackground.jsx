export default function GradientBackground() {
  return (
  <div
        className="absolute inset-0 z-0"
        style={{
          background: `
        radial-gradient(ellipse 70% 55% at 20% 25%, rgba(170, 220, 200, 0.55), transparent 70%),
        radial-gradient(ellipse 65% 50% at 80% 30%, rgba(190, 210, 255, 0.45), transparent 72%),
        radial-gradient(ellipse 60% 50% at 30% 80%, rgba(210, 245, 220, 0.6), transparent 70%),
        radial-gradient(ellipse 55% 45% at 75% 75%, rgba(255, 230, 200, 0.45), transparent 72%),
        linear-gradient(180deg, #fefcff 0%, #f6f9f8 100%)
      `,
        }}
      />
  );
}
