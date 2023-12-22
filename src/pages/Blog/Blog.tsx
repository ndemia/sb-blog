import Bloglist from "../../components/Bloglist/Bloglist";
import { useEffect } from "react";

const Blog = () => {
  const postPerPage = 8;
  const showLoadMoreButton = false;

  useEffect(() => {
    document.title = "Blog";

    return () => {
      document.title = "Home";
    };
  }, []);

  return (
    <main className="bg-sb-grey-100 p-10">
      <section className="mx-auto flex max-w-[1024px] flex-col bg-sb-white px-6 py-8">
        <Bloglist
          postsPerPage={postPerPage}
          showLoadMoreButton={showLoadMoreButton}
        />
      </section>
    </main>
  );
};

export default Blog;
