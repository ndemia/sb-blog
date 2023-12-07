import Form from "../../components/Form/Form";
import Bloglist from "../../components/Bloglist/Bloglist";
import Button from "../../components/Button/Button";

function chichi() {
  console.log("hey");
}

const Home = () => {
  return (
    <main className="grid-rows-[min-content, min-content] sb-md:grid-cols-[minmax(min-content,_500px)_minmax(350px,_550px)] sb-md:gap-x-6 grid grid-cols-1 justify-center justify-items-stretch gap-y-6 bg-sb-grey-100 p-10">
      <section className="sb-md:col-start-1 sb-md:row-auto col-auto row-start-2 bg-sb-white p-8">
        <Form />
      </section>
      <section className="sb-md:col-start-2 sb-md:row-auto col-auto row-start-1 bg-sb-white p-8">
        <Bloglist />
        <Button text="Load more" onClick={chichi}></Button>
      </section>
    </main>
  );
};

export default Home;
