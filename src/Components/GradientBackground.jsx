import { useEffect, useRef } from "react";

export default function GradientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    let blobs = [];

    const COLORS = [
      "rgba(9, 160, 236, 0.5)",
      "rgba(219, 45, 205, 0.5)",
    ];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function createBlobs() {
      blobs = Array.from({ length: 4 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 200 + Math.random() * 200,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      blobs.forEach(blob => {
        const grad = ctx.createRadialGradient(
          blob.x,
          blob.y,
          blob.r * 0.2,
          blob.x,
          blob.y,
          blob.r
        );

        grad.addColorStop(0, blob.color);
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();

        blob.x += blob.dx;
        blob.y += blob.dy;

        if (blob.x < -blob.r || blob.x > width + blob.r) blob.dx *= -1;
        if (blob.y < -blob.r || blob.y > height + blob.r) blob.dy *= -1;
      });

      requestAnimationFrame(draw);
    }

    resize();
    createBlobs();
    draw();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute z-10 inset-0 w-full h-full opacity-[0.25] pointer-events-none"
    />
  );
}
