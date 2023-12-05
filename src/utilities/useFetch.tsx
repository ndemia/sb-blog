import { useEffect, useState } from "react";

interface fetchProps {
  endPoint: string;
  fetchConfig: {
    method: string;
    body?: string;
  };
}

const useFetch = ({ endPoint, fetchConfig }: fetchProps) => {
  const baseURL: string = import.meta.env.VITE_API_BASE_URL;
  const APIValue: string = import.meta.env.VITE_API_KEY;
  const [URLEndPoint, setURLEndPoint] = useState(endPoint);
  const [data, setData] = useState<{}[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const options = {
    ...fetchConfig,
    headers: {
      token: APIValue,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}${URLEndPoint}`, options);
        const data = await response.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setIsPending(false);
        }
      }
    };
    fetchData();
  }, []);

  return { data, isPending, error };
};

export default useFetch;
