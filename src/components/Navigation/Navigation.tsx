import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex w-full flex-row items-center justify-between px-8">
      <Link to="/">
        <img src="assets/logos/logo192.png" alt="" width="75px" />
      </Link>
      <div>
        <Link to="/" className="mx-4 text-lg font-bold text-white no-underline">
          Home
        </Link>
        <Link
          to="/blog"
          className="mx-4 text-lg font-bold text-white no-underline"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
