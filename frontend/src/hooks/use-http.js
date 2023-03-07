import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const sendRequest = useCallback(async (url, method, body, cb) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer {token}`
        },
        body: method !== 'GET' ? JSON.stringify(body) : {}
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data);
      }
      cb(data);
    } catch (err) {
      setIsError(err.message);
    } finally {
      setIsLoading(true);
    }
  }, []);
  return {
    isLoading,
    isError,
    sendRequest
  };
};
export default useHttp