import React, { useCallback, useState } from 'react';
import { Compositions } from 'src/types/api/compositions';
import { Prefecture } from 'src/types/api/prefectures';
import { chartComposition } from 'src/types/chartComposition';

export const useCompositions = () => {
  const [chartComposition, setChartComposition] = useState<chartComposition[]>(
    [],
  );

  // 都道府県別の人口情報を追加
  const addChartCompositions = useCallback(
    async (prefecture: Prefecture) => {
      try {
        const result: Compositions = await // 念の為エスケープ処理入れる
        (
          await fetch(
            `/api/composition?prefCode=${encodeURIComponent(
              prefecture.prefCode,
            )}`,
          )
        ).json();
        // データ内の総人口のみをとる
        const composition = result.result.data[0];

        const createdComposition: chartComposition = {
          prefectureName: prefecture.prefName,
          data: composition,
        };
        setChartComposition((prev) => [...prev, createdComposition]);
      } catch (error) {
        console.error(error);
      }
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
      prefecture.checked === true
        ? removeChartCompositions(prefecture.prefName)
        : addChartCompositions(prefecture);
    },
    [chartComposition],
  );
  return { chartComposition, toggleChartComposition };
};
