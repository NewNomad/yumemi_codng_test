import { useState } from 'react';
import { Prefecture, Prefectures } from 'src/types/prefectures';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetchPref = () => {
  const { data, error, isLoading } = useSWR<Prefectures, Error>(
    '/api/prefectures',
    fetcher,
  );
  const result = data?.result;
  const [prefectures, setPrefectures] = useState<Prefecture[]>(result || []);

  return { prefectures, setPrefectures, error, isLoading };
};
