import Form from "../../components/Form/Form";
import Bloglist from "../../components/Bloglist/Bloglist";

const Home = () => {
  return (
    <main className="grid grid-cols-1 grid-rows-2 justify-center justify-items-stretch gap-y-6 bg-sb-grey-100 p-10 md:grid-cols-[minmax(min-content,_500px)_minmax(350px,_550px)] md:gap-x-6">
      <section className="row-start-2 bg-sb-white p-8 md:row-start-1">
        <Form />
      </section>
      <section className="row-start-1 bg-sb-white p-8 md:row-start-2">
        <Bloglist />
      </section>
    </main>
  );
};

export default Home;
