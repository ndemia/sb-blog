import { useLocation } from "react-router-dom";

const Heading = () => {
  let location = useLocation();

  return (
    <h1 className="py-8 text-center text-5xl font-bold text-sb-white">
      {location.pathname === "/" ? "Home" : "Blog"}
    </h1>
  );
};

export default Heading;
