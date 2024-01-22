import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((res: T) => {
        setIsLoading(false);
        setData(res);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
