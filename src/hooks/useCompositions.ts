import React, { useCallback, useState } from 'react';
import { Prefecture, Prefectures } from 'src/types/prefectures';

// 人口推移用フック
export const useCompositions = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [compositions, setCompositions] = useState<any[]>([]);

  // 都道府県別の人口一覧を取ってくる
  const getCompositions = useCallback(async () => {
    setIsLoading(true);
    try {
      const result: Prefectures = await (
        await fetch('/api/composition')
      ).json();
      // これにischeckedは含まれていない
      const compositions = result.result;
      // ischeckedにfalseを入れてsetする
      console.log(compositions);

      // setCompositions(
      //   prefectures.map((prefecture) => ({ ...prefecture, checked: false })),
      // );
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, []);

  // return { isLoading, prefectures, setPrefCheckBox, getPrefectures };
};
