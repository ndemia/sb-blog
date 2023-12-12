import Navigation from "../Navigation/Navigation";
import Heading from "../Heading/Heading";

const Header = () => {
  let page = "Home";
  return (
    <header className="flex flex-col items-center bg-[url('/assets/images/banner.jpg')] bg-cover bg-center bg-no-repeat py-8">
      <Navigation />
      <Heading title={page}></Heading>
    </header>
  );
};

export default Header;
