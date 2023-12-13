import { useEffect, useState } from "react";
import {
  FetchPropsInterface,
  BlogpostsResponseInterface,
  CategoryInterface,
  FetchReturnInterface,
} from "./interfaces";

const useFetch = (fetchOptions: FetchPropsInterface): FetchReturnInterface => {
  const baseURL: string = import.meta.env.VITE_API_BASE_URL;
  const APIValue: string = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState<
    BlogpostsResponseInterface[] | CategoryInterface[]
  >([]);
  const [lastPage, setLastPage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [consolidatedFetchOptions, setConsolidatedFetchOptions] =
    useState<FetchPropsInterface>({
      ...fetchOptions,
      requestConfig: {
        ...fetchOptions.requestConfig,
        headers: {
          token: APIValue,
        },
      },
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${baseURL}${consolidatedFetchOptions.endPoint}`,
          consolidatedFetchOptions.requestConfig,
        );
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

        setLastPage(data.last_page);
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
  }, [consolidatedFetchOptions]);

  const updateFetchOptions = (newOptions: FetchPropsInterface) => {
    const newConsolidatedFetchOptions = {
      ...newOptions,
      requestConfig: {
        ...newOptions.requestConfig,
        headers: {
          token: APIValue,
        },
      },
    };
    setConsolidatedFetchOptions(newConsolidatedFetchOptions);
  };

  return { data, isLoading, error, updateFetchOptions, lastPage };
};

export default useFetch;
