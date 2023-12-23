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
  const [wasPostSuccessful, setWasPostSuccessful] = useState<boolean>(false);
  const [consolidatedFetchOptions, setConsolidatedFetchOptions] =
    useState<FetchPropsInterface>({
      ...fetchOptions,
      requestConfig: {
        headers: {
          token: APIValue,
        },
        ...fetchOptions.requestConfig,
      },
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `${baseURL}${consolidatedFetchOptions.endPoint}`,
          consolidatedFetchOptions.requestConfig,
        );

        if (!response.ok && response.status === 404) {
          throw new Error(
            "404. Bron niet gevonden. Probeer het later opnieuw.",
          );
        } else if (!response.ok) {
          throw new Error(
            "Er is een fout opgetreden. Probeer het later opnieuw.",
          );
        }

        const data = await response.json();

        // Handle different scenarios based on the type of request
        if ("data" in data) {
          // Handle successful GET for data
          setData(data as BlogpostsResponseInterface[]);
          setLastPage(data.last_page);
        } else if (data.length > 0) {
          // Handle successful GET for categories
          setData(data as CategoryInterface[]);
        } else {
          // Handle successful POST
          setWasPostSuccessful(true);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [consolidatedFetchOptions]);

  const updateFetchOptions = (newOptions: FetchPropsInterface) => {
    const newConsolidatedFetchOptions = {
      ...newOptions,
      requestConfig: {
        headers: {
          token: APIValue,
        },
        ...newOptions.requestConfig,
      },
    };

    setConsolidatedFetchOptions(newConsolidatedFetchOptions);
  };

  return {
    data,
    isLoading,
    error,
    updateFetchOptions,
    lastPage,
    wasPostSuccessful,
  };
};

export default useFetch;
