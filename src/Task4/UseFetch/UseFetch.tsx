import { useEffect, useState } from "react";
import axios from "axios";
import type { AxiosResponse } from "axios";

type UseFetchReturn<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

function useFetch<T = unknown>(url: string): UseFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse<T> = await axios.get(url);
        setData(response.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.message); // err is now typed as AxiosError
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
