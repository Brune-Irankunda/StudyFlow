
import { NavLink } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Tasks", path: "/tasks" },
    { name: "Focus", path: "/focus" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <nav className="flex flex-wrap items-center gap-2">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === "/"}
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-teal-600 text-white"
                : "text-gray-600 hover:bg-teal-50 hover:text-teal-700"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
