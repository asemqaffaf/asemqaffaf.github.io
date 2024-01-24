import { useEffect, useState } from "react";

/**
 * @description Why We Need React Query
 * @ref https://tkdodo.eu/blog/why-you-want-react-query
 * @param url string
 * @returns { data: T ; isLoading: boolean; error: unknown; }
 */
function useFetch<T>(url: string): {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
} {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((res: T) => {
        if (!ignore) {
          setData(res);
          setError(undefined);
        }
      })
      .catch((err) => {
        if (!ignore) {
          setError(err.message);
          setData(undefined);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
