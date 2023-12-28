import Form from "../../components/Form/Form";
import Bloglist from "../../components/Bloglist/Bloglist";

const Home = () => {
  const postsPerPage = 4;
  const showLoadMoreButton = true;

  return (
    <main className="grid-rows-[min-content, min-content] mx-auto grid min-h-[40.625em] max-w-[1024px] grid-cols-1 justify-center justify-items-stretch gap-y-6 p-10 sb-md:grid-cols-[minmax(min-content,_400px)_minmax(350px,_550px)] sb-md:gap-x-6">
      <section className="col-auto row-start-2 flex flex-col justify-center rounded-lg bg-sb-white p-8 shadow-md sb-md:col-start-1 sb-md:row-auto">
        <Form />
      </section>
      <section className="col-auto row-start-1 flex flex-col justify-between rounded-lg bg-sb-white px-6 py-8 shadow-md sb-md:col-start-2 sb-md:row-auto">
        <Bloglist
          postsPerPage={postsPerPage}
          showLoadMoreButton={showLoadMoreButton}
        />
      </section>
    </main>
  );
};

export default Home;
