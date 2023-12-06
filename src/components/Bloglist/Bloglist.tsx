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

  useEffect(() => {
    if (data && "data" in data) {
      setBlogposts(data.data as BlogpostInterface[]);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className="flex flex-row flex-wrap justify-evenly gap-6">
          {blogposts.map((blogpost, index) => (
            <li key={index}>
              <BlogpostCard blogpostData={blogpost} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Bloglist;
