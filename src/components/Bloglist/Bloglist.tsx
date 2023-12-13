import { useState, useEffect, useRef } from "react";
import useFetch from "../../utilities/useFetch";
import BlogpostCard from "../BlogpostCard/BlogpostCard";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Pagination from "../Pagination/Pagination";
import {
  FetchPropsInterface,
  BlogpostInterface,
  BloglistPropsInterface,
} from "../../utilities/interfaces";

const Bloglist = ({
  postsPerPage,
  showLoadMoreButton,
}: BloglistPropsInterface) => {
  const fetchOptions: FetchPropsInterface = {
    endPoint: `/posts?perPage=${postsPerPage}`,
    postsPerPage: postsPerPage,
    requestConfig: {
      method: "GET",
    },
  };
  const { data, isLoading, error, updateFetchOptions, lastPage } =
    useFetch(fetchOptions);
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
    // Checks that this function only runs in the Homepage, so that the scrolling only happens there
    if (
      blogposts.length > 4 &&
      blogpostsContainer.current !== null &&
      showLoadMoreButton === true
    ) {
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
          {showLoadMoreButton && (
            <Button text="Load more" onClick={fetchMoreBlogposts} />
          )}
          {lastPage !== null && (
            <Pagination currentPage={currentPage} lastPage={lastPage} />
          )}
        </>
      )}
    </>
  );
};

export default Bloglist;
