import React, { useCallback, useState } from 'react';
import { Compositions } from 'src/types/compositions';
import { Prefecture, Prefectures } from 'src/types/prefectures';

// 人口推移用フック
export const useCompositions = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [compositions, setCompositions] = useState<any[]>([]);

  // 都道府県別の人口一覧を取ってくる
  const getCompositions = useCallback(async () => {
    setIsLoading(true);
    try {
      const result: Compositions = await // 念の為エスケープ処理入れる
      (
        await fetch(`/api/composition?prefCode=${encodeURIComponent(3)}`)
      ).json();
      // 総人口のみをとる
      const composition = result.result[0];
      // ischeckedにfalseを入れてsetする
      console.log(result);

      // setCompositions(
      //   prefectures.map((prefecture) => ({ ...prefecture, checked: false })),
      // );
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, compositions, getCompositions };
};
