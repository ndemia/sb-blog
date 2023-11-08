import Heading from "../Heading/Heading";

const Header = () => {
  let page = "Home";
  return (
    <header className="flex h-12 flex-col items-center bg-[url('/assets/images/banner.jpg')] bg-cover bg-no-repeat py-20">
      <Heading title={page}></Heading>
    </header>
  );
};

export default Header;
