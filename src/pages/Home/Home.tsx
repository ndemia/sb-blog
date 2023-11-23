import Form from "../../components/Form/Form";
import Bloglist from "../../components/Bloglist/Bloglist";

const Home = () => {
  return (
    <main className="flex justify-center gap-x-6 bg-sb-grey-100 p-10">
      <section className="bg-sb-white p-10">
        <Form />
      </section>
      <section className="bg-sb-white p-10">
        <Bloglist />
      </section>
    </main>
  );
};

export default Home;
