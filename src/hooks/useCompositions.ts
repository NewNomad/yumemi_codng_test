import React, { useCallback, useState } from 'react';
import { Compositions } from 'src/types/api/compositions';
import { Prefecture } from 'src/types/api/prefectures';
import { chartComposition } from 'src/types/chartComposition';

// 人口推移用フック
export const useCompositions = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chartComposition, setChartComposition] = useState<chartComposition[]>(
    [],
  );

  // 都道府県別の人口情報を追加
  const addChartCompositions = useCallback(
    async (prefectureName: string) => {
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
    },
    [chartComposition],
  );

  // 都道府県別の人口情報を削除
  const removeChartCompositions = useCallback(
    (prefectureName: string) => {
      setChartComposition((prev) => [
        ...prev.filter((pref) => pref.prefectureName !== prefectureName),
      ]);
      const a = 1;
    },
    [chartComposition],
  );

  // checkboxのon/offで切り替える
  const toggleChartComposition = useCallback(
    (prefecture: Prefecture) => {
      // checkedがtrueならば削除、falseならば追加を行う
      prefecture.checked === true
        ? removeChartCompositions(prefecture.prefName)
        : addChartCompositions(prefecture.prefName);
    },
    [chartComposition],
  );
  return { isLoading, chartComposition, toggleChartComposition };
};
