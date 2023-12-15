import Navigation from "../Navigation/Navigation";
import Heading from "../Heading/Heading";

const Header = () => {
  let page = "Home";
  return (
    <header className="flex flex-col items-center bg-[url('/assets/images/banner.jpg')] bg-cover bg-center bg-no-repeat py-8">
      <div className="w-full max-w-[1024px]">
        <Navigation />
        <Heading title={page}></Heading>
      </div>
    </header>
  );
};

export default Header;
