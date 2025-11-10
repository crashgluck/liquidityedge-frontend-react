import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex text-gray-500 text-sm " aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 bg-blue-200/50 px-3 py-2 rounded-md">
        <li>
          <Link to="/" className="hover:text-gray-700 bg-amber-200 p-1 rounded-md">Home</Link>
          {pathnames.length > 0 && <span className="mx-2"></span>}
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className="inline-flex items-center">
              {isLast ? (
                <span className="text-gray-400">{name}</span>
              ) : (
                <>
                  <Link to={routeTo} className="hover:text-gray-700">{name}</Link>
                  <span className="mx-2">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
