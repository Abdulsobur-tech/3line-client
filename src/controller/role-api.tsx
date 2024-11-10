import { useEffect, useState } from "react";

interface ApiDataType {
  id: number;
  name: string;
}

export default function UseRoleApi() {
  const [data, setData] = useState<ApiDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchData = async <T,>(endpoint: string): Promise<T> => {
    try {
      const response = await fetch(`${apiUrl}/${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = (await response.json()) as T;
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData<ApiDataType>("/roles/users");
        setData(result);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, loading, error };
}
