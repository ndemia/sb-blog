import Form from "../../components/Form/Form";
import Bloglist from "../../components/Bloglist/Bloglist";

const Home = () => {
  return (
    <main className="grid-rows-[min-content, min-content] grid grid-cols-1 justify-center justify-items-stretch gap-y-6 bg-sb-grey-100 p-10 sb-md:grid-cols-[minmax(min-content,_500px)_minmax(350px,_550px)] sb-md:gap-x-6">
      <section className="col-auto row-start-2 flex flex-col bg-sb-white p-8 sb-md:col-start-1 sb-md:row-auto">
        <Form />
      </section>
      <section className="col-auto row-start-1 flex flex-col justify-between bg-sb-white px-6 py-8 sb-md:col-start-2 sb-md:row-auto">
        <Bloglist />
      </section>
    </main>
  );
};

export default Home;
