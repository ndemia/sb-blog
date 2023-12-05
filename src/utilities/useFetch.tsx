import { useEffect, useState } from "react";

interface fetchProps {
  endPoint: string;
}

const useFetch = (props: string) => {
  const baseURL: string = import.meta.env.VITE_API_BASE_URL;
  const APIValue: string = import.meta.env.VITE_API_KEY;
  // const [endPoint, setEndpoint] = useState("");
  const [data, setData] = useState<{}[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}${props}`, {
          method: "GET",
          headers: {
            token: APIValue,
          },
        });
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
  }, [props]);

  return { data, isPending, error };
};

export default useFetch;
