import Form from "../../components/Form/Form";
import Bloglist from "../../components/Bloglist/Bloglist";

console.log(import.meta.env.VITE_API_VALUE);

const Home = () => {
  return (
    <main className="flex justify-center gap-x-6 bg-sb-grey-100 p-10">
      <section className="w-2/4 bg-sb-white p-8">
        <Form />
      </section>
      <section className="w-2/4 bg-sb-white p-8">
        <Bloglist />
      </section>
    </main>
  );
};

export default Home;
