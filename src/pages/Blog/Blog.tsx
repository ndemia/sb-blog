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
    <main className="p-10">
      <section className="mx-auto flex min-h-[40.625em] max-w-[1024px] flex-col rounded-lg bg-sb-white px-6 py-8 shadow-md">
        <Bloglist
          postsPerPage={postPerPage}
          showLoadMoreButton={showLoadMoreButton}
        />
      </section>
    </main>
  );
};

export default Blog;
