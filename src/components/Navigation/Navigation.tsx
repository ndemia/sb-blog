import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex w-full flex-row items-center justify-between px-8">
      <NavLink to="/" aria-label="Home">
        <img src="assets/logos/logo192.png" alt="" width="50px" />
      </NavLink>
      <div>
        <NavLink
          to="/"
          className="mx-4 text-lg font-bold text-white no-underline transition-colors hover:text-sb-primary-200  focus:text-sb-primary-100"
          style={({ isActive }) => ({
            borderBottom: isActive ? "3px solid hsl(200, 10%, 49%)" : "",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          aria-label="Blog"
          className="mx-4 text-lg font-bold text-white no-underline transition-colors hover:text-sb-primary-200  focus:text-sb-primary-100"
          style={({ isActive }) => ({
            borderBottom: isActive ? "3px solid hsl(200, 10%, 49%)" : "",
          })}
        >
          Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
