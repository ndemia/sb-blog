import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex w-full flex-row items-center justify-between px-8">
      <NavLink to="/">
        <img src="assets/logos/logo192.png" alt="" width="50px" />
      </NavLink>
      <div>
        <NavLink
          to="/"
          className="mx-4 text-lg font-bold text-white no-underline transition-colors hover:text-sb-primary-200 focus:text-sb-primary-200"
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid hsl(240, 60%, 60%)" : "",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className="mx-4 text-lg font-bold text-white no-underline transition-colors hover:text-sb-primary-200 focus:text-sb-primary-200"
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid hsl(240, 60%, 60%)" : "",
          })}
        >
          Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
