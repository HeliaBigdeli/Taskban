import { useEffect, useState } from "react";
import { AXIOS } from "../../config/axios.config";

const useAxios = () => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetcher = async (method, url, body = null) => {
    try {
      const res = await AXIOS[method.toLowerCase()](url, body);
      setResponse(res?.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('rerender')
  }, [response, error, loading]);

  return [response, error, loading, fetcher];
};

export default useAxios;
