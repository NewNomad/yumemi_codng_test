import React, { useCallback, useState } from 'react';
import { Prefecture, Prefectures } from 'src/types/prefectures';

// 人口推移用フック
export const usePrefectures = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [compositions, setCompositions] = useState<any[]>([]);

  // 都道府県別の人口一覧を取ってくる
  const getPrefectures = useCallback(async () => {
    setIsLoading(true);
    try {
      const result: Prefectures = await (
        await fetch('/api/prefectures')
      ).json();
      // これにischeckedは含まれていない
      const prefectures = result.result;
      // ischeckedにfalseを入れてsetする
      setCompositions(
        prefectures.map((prefecture) => ({ ...prefecture, checked: false })),
      );
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, []);

  // return { isLoading, prefectures, setPrefCheckBox, getPrefectures };
};
