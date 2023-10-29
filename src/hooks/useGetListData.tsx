import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';

import getListData from '../utils/testing/getListData';
import { USE_LOCAL_DATA } from '../utils/config';

const useGetListData = ({ url, queryParams }: { url: string; queryParams?: string }) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      if (USE_LOCAL_DATA) {
        setData(getListData);
      } else {
        const response: AxiosResponse = await axios.get(
          `${queryParams ? url + '?' + queryParams : url}`
        );

        setData(response?.data?.data ?? []);
      }
    } catch (error) {
      setError('Error fetching data from the API');
    } finally {
      setLoading(false);
    }
  }, [url, queryParams]);

  useEffect(() => {
    if (url && queryParams) fetchData();
  }, []);

  const reload = () => {
    fetchData();
  };

  return { data, loading, error, reload };
};

export default useGetListData;
