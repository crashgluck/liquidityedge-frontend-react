
// Card.jsx
export default function Card({ children, className = "", title }) {
  return (
    <div
      className={`rounded-2xl shadow-md p-6 min-w-xl max-w-screen ${className}`}
    >
      {title && <h2 className="text-lg font-semibold mb-4 py-3">{title}</h2>}
      {children}
    </div>
  );
}
