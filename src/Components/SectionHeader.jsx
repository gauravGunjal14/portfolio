export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <h1 className="text-3xl md:text-5xl font-semibold text-black">
        {title}
      </h1>
      <p className="mt-4 text-gray-600 text-lg">
        {subtitle}
      </p>
    </div>
  );
}
