import { useEffect, useState } from "react";
import Parser from "rss-parser";

const parser = new Parser();

/**
 * @description Why We Need React Query
 * @ref https://tkdodo.eu/blog/why-you-want-react-query
 * @param url string
 * @returns { data: T ; isLoading: boolean; error: unknown; }
 */
function useRssParser<T>(url: string): {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
} {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let ignore = false;
    parser
      .parseURL(url)
      .then((res: T | unknown) => {
        if (!ignore) {
          setData(res as T);
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

export default useRssParser;
