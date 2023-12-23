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

  // Posts per page is defined according to the page in which Bloglist is placed
  const fetchMoreBlogposts = (pageNumber: number) => {
    const newOptions = {
      ...fetchOptions,
      endPoint: `/posts?perPage=${postsPerPage}&page=${pageNumber}`,
    };

    updateFetchOptions(newOptions);
    setCurrentPage(pageNumber);
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
    // Type narrowing by checking the existence of the data property, which is an array with the blogposts themselves
    if (data && "data" in data) {
      const blogposts = data.data as BlogpostInterface[];
      // If lenght is less than 8, it means it's for the Home page, so we append. Otherwise, it's for the Blog page so we replace
      blogposts.length < 8
        ? setBlogposts((prevData) => [...prevData, ...blogposts])
        : setBlogposts(blogposts);
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
          {showLoadMoreButton ? (
            <Button
              text="Meer laden"
              onClick={() => fetchMoreBlogposts(currentPage + 1)}
            />
          ) : (
            <Pagination
              currentPage={currentPage}
              lastPage={lastPage as number}
              fetchMoreBlogposts={fetchMoreBlogposts}
            />
          )}
        </>
      )}
    </>
  );
};

export default Bloglist;
