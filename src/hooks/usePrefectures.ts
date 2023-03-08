import React, { useCallback, useState } from 'react';
import { Prefecture, Prefectures } from 'src/types/prefectures';

export const usePrefectures = async () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [prefectures, setPrefectures] = useState<Prefecture[]>();

  const getPrefectures = useCallback(async () => {
    setIsLoading(true);
    try {
      const result: Prefectures = await (
        await fetch('/api/prefectures')
      ).json();
      const prefectures = result.result;
      setPrefectures(prefectures);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, prefectures, setPrefectures };
};
