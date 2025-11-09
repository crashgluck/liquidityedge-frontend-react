
// Card.jsx
export default function Card({ children, className = "", title }) {
  return (
    <div
      className={`rounded-2xl shadow-md p-6 w-full max-w-md ${className} backdrop-blur-md bg-[#001449]/70  text-white p-8 mx-3 border border-white/30 rounded-xl shadow-lg lg:min-w-xl`}
    >
      {title && <h2 className="text-lg font-semibold mb-4 py-3">{title}</h2>}
      {children}
    </div>
  );
}
