import React, { useCallback, useState } from 'react';
import { Compositions } from 'src/types/api/compositions';
import { Prefecture, Prefectures } from 'src/types/api/prefectures';
import { chartComposition } from 'src/types/chartComposition';

// 人口推移用フック
export const useCompositions = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chartComposition, setChartComposition] = useState<chartComposition[]>(
    [],
  );

  // 都道府県別の人口情報を追加
  const addChartCompositions = async (prefectureName: string) => {
    setIsLoading(true);
    try {
      const result: Compositions = await // 念の為エスケープ処理入れる
      (
        await fetch(`/api/composition?prefCode=${encodeURIComponent(3)}`)
      ).json();
      // データ内の総人口のみをとる
      const composition = result.result.data[0];
      // setする用のデータを作る
      const createdComposition: chartComposition = {
        prefectureName: prefectureName,
        data: composition,
      };
      setChartComposition((prev) => [...prev, createdComposition]);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  // 都道府県別の人口情報を削除
  const removeChartCompositions = async (prefectureName: string) => {
    setIsLoading(true);
    try {
      const result: Compositions = await // 念の為エスケープ処理入れる
      (
        await fetch(`/api/composition?prefCode=${encodeURIComponent(3)}`)
      ).json();
      // データ内の総人口のみをとる
      const composition = result.result.data[0];
      // setする用のデータを作る
      const createdComposition: chartComposition = {
        prefectureName: prefectureName,
        data: composition,
      };
      setChartComposition((prev) => [...prev, createdComposition]);
      console.log(chartComposition);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return { isLoading, chartComposition, addChartCompositions };
};
