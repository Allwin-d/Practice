import { useEffect, useState } from "react";

type TotalType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const UseFetch = (url: string) => {
  const [data, setData] = useState<TotalType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");

        const response: TotalType[] = await res.json();
        if (isMounted) {
          setData(response);
          setLoading(false);
        }
      } catch (e) {
        if (isMounted) {
          setError("Failed to Fetch Data");
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return [data, loading, error] as const;
};

export default UseFetch;
