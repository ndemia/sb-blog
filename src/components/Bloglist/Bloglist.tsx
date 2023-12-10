import { useState, useEffect, useRef } from "react";
import useFetch from "../../utilities/useFetch";
import BlogpostCard from "../BlogpostCard/BlogpostCard";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import {
  FetchPropsInterface,
  BlogpostInterface,
} from "../../utilities/interfaces";

const Bloglist = () => {
  const fetchOptions: FetchPropsInterface = {
    endPoint: "/posts?perPage=4&page=1",
    requestConfig: {
      method: "GET",
    },
  };
  const { data, isLoading, error, updateFetchOptions } = useFetch(fetchOptions);
  const [blogposts, setBlogposts] = useState<BlogpostInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogpostsContainer = useRef<HTMLUListElement | null>(null);
  const errorMessage = `The latest blogposts should appear here but instead you see this error. ${error} to accomplish this. Reload the page to fix it.`;

  const fetchMoreBlogposts = () => {
    const newOptions = {
      ...fetchOptions,
      endPoint: `/posts?perPage=4&page=${currentPage + 1}`,
    };
    updateFetchOptions(newOptions);
    setCurrentPage(currentPage + 1);
  };

  const scrollIntoView = () => {
    if (blogposts.length > 4 && blogpostsContainer.current !== null) {
      blogpostsContainer.current.lastElementChild?.scrollIntoView({
        inline: "end",
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (data && "data" in data) {
      setBlogposts((prevData) => [
        ...prevData,
        ...(data.data as BlogpostInterface[]),
      ]);
    }
  }, [data]);

  useEffect(() => {
    scrollIntoView();
  }, [blogposts]);

  return (
    <>
      {error ? (
        <p>{errorMessage}</p>
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex max-h-[490px] flex-col overflow-y-auto">
            <ul
              ref={blogpostsContainer}
              className="flex flex-row flex-wrap justify-evenly gap-6 p-2"
            >
              {blogposts.map((blogpost, index) => (
                <li key={index} className="grow basis-[200px]">
                  <BlogpostCard blogpostData={blogpost} />
                </li>
              ))}
            </ul>
          </div>
          <Button text="Load more" onClick={fetchMoreBlogposts}></Button>
        </>
      )}
    </>
  );
};

export default Bloglist;
