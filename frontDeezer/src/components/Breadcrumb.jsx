import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const buildBreadcrumbName = (segment) => {
    if (segment === "playlist") return "Playlists";
    if (segment === "search") return "Buscar canciones";
    return isNaN(segment) ? segment : `#${segment}`;
  };

  return (
    <nav className="text-sm breadcrumbs text-pink-400">
      <ul className="flex flex-wrap gap-1 items-center">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:underline">
            <Home size={16} />
            Inicio
          </Link>
        </li>
        {pathnames.map((segment, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          return (
            <li key={index}>
              <Link to={routeTo} className="hover:underline">
                {buildBreadcrumbName(segment)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
