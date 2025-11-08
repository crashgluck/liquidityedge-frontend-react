
// Card.jsx
export default function Card({ children, className = "", title }) {
  return (
    <div
      className={`rounded-2xl shadow-md p-6 w-full max-w-md ${className}`}
    >
      {title && <h2 className="text-lg font-semibold mb-4 py-3">{title}</h2>}
      {children}
    </div>
  );
}
