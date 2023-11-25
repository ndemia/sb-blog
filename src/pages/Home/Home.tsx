import Form from "../../components/Form/Form";
import Bloglist from "../../components/Bloglist/Bloglist";

const Home = () => {
  return (
    <main className="flex justify-center gap-x-6 bg-sb-grey-100 p-10">
      <section className="w-96 bg-sb-white p-8">
        <Form />
      </section>
      <section className="w-96 bg-sb-white p-8">
        <Bloglist />
      </section>
    </main>
  );
};

export default Home;
