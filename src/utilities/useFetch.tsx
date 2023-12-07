import { useEffect, useState } from "react";
import {
  FetchPropsInterface,
  BlogpostsResponseInterface,
  CategoryInterface,
  FetchReturnInterface,
} from "./interfaces";

const useFetch = ({
  endPoint,
  fetchConfig,
}: FetchPropsInterface): FetchReturnInterface => {
  const baseURL: string = import.meta.env.VITE_API_BASE_URL;
  const APIValue: string = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState<
    BlogpostsResponseInterface[] | CategoryInterface[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchOptions = {
    ...fetchConfig,
    headers: {
      token: APIValue,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}${endPoint}`, fetchOptions);
        if (!response.ok) {
          throw new Error(
            "We could not get some of the data we need from the API",
          );
        }
        const data = await response.json();

        if ("data" in data) {
          setData(data as BlogpostsResponseInterface[]);
        } else {
          setData(data as CategoryInterface[]);
        }

        setIsLoading(false);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
