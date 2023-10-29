import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';

import getDetailsData from '../utils/testing/getDetailsData';
import { USE_LOCAL_DATA } from '../utils/config';

const useGetDetailsData = ({ url, id }: { url: string; id: string }) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      if (id) {
        setLoading(true);

        if (USE_LOCAL_DATA) {
          setData(getDetailsData?.data ?? {});
        } else {
          const response: AxiosResponse = await axios.get(`${url}/${id}`);
          setData(response?.data?.data ?? {});
        }
      }
    } catch (error) {
      setError('Error fetching data from the API');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const reload = () => {
    fetchData();
  };

  return { data, loading, error, reload };
};

export default useGetDetailsData;
