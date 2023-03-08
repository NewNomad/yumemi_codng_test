import React, { useCallback, useState } from 'react';
import { Prefecture, Prefectures } from 'src/types/prefectures';

export const usePrefectures = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  const getPrefectures = useCallback(async () => {
    setIsLoading(true);
    try {
      const result: Prefectures = await (
        await fetch('/api/prefectures')
      ).json();
      // これにischeckedは含まれていない
      const prefectures = result.result;
      // ischeckedにfalseを入れてsetする
      setPrefectures(
        prefectures.map((prefecture) => ({ ...prefecture, checked: false })),
      );
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, prefectures, setPrefectures, getPrefectures };
};
