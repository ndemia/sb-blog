import { useEffect, useState } from "react";

interface fetchProps {
  endPoint: string;
}

const useFetch = (props: string) => {
  console.log("props", props);
  const baseURL: string = import.meta.env.VITE_API_BASE_URL;
  const APIValue: string = import.meta.env.VITE_API_KEY;
  // const [endPoint, setEndpoint] = useState("");
  const [data, setData] = useState<{}[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = async () => {
    let response = await fetch(`${baseURL}${props}`, {
      method: "GET",
      headers: {
        token: APIValue,
      },
    });
    let data = await response.json();
    return data;
  };

  useEffect(() => {
    getPosts().then((data) => console.log(data.data));
  }, []);

  return { data, isPending, error };
};

export default useFetch;
