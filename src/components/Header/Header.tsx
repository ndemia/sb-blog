import Heading from "../Heading/Heading";

const Header = () => {
  let page = "Home";
  return (
    <header className="flex h-12 flex-col bg-slate-700 bg-[url('/assets/images/banner.jpg')]">
      <Heading title={page}></Heading>
    </header>
  );
};

export default Header;
