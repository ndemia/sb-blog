import { useState, useEffect } from "react";
import useFetch from "../../utilities/useFetch";
import BlogpostCard from "../BlogpostCard/BlogpostCard";
import Loader from "../Loader/Loader";
import {
  FetchPropsInterface,
  BlogpostInterface,
} from "../../utilities/interfaces";

const options: FetchPropsInterface = {
  endPoint: "/posts?perPage=4",
  fetchConfig: {
    method: "GET",
  },
};

const Bloglist = () => {
  const { data, isLoading, error } = useFetch(options);
  const [blogposts, setBlogposts] = useState<BlogpostInterface[]>([]);
  const errorMessage = `The latest blogposts should appear here but instead you see this error. ${error} to accomplish this. Reload the page to fix it.`;

  useEffect(() => {
    if (data && "data" in data) {
      setBlogposts(data.data as BlogpostInterface[]);
    }
  }, [data]);

  return (
    <>
      {error ? (
        <p>{errorMessage}</p>
      ) : isLoading ? (
        <Loader />
      ) : (
        <ul className="flex flex-row flex-wrap justify-evenly gap-6">
          {blogposts.map((blogpost, index) => (
            <li key={index} className="grow basis-[200px]">
              <BlogpostCard blogpostData={blogpost} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Bloglist;
