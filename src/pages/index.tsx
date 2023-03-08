import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Layout } from 'src/components/organisms/Layout';
import { PrefectureSelection } from 'src/components/organisms/PrefectureSelection';
import { Prefecture, Prefectures } from 'src/types/prefectures';
import { usePrefectures } from 'src/hooks/usePrefectures';
// Recharts.jsはCSRしないとhydrationエラーが出る
const PrefectureChart = dynamic<Record<string, unknown>>(
  () =>
    import('../components/organisms/PrefectureChart').then(
      (module) => module.PrefectureChart,
    ),
  { ssr: false },
);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { isLoading, prefectures, setPrefCheckBox, getPrefectures } =
    usePrefectures();

  useEffect(() => {
    (async () => getPrefectures())();
  }, []);

  // チェックボックスクリック時の処理
  const handleCheckBox = async (prefecture: Prefecture) => {
    setPrefCheckBox(prefecture);
  };

  if (isLoading) return <div>ロード中</div>;

  return (
    <>
      <Layout title="Title" />

      <PrefectureSelection
        prefectures={prefectures}
        onChange={handleCheckBox}
      />
      <PrefectureChart />
    </>
  );
};

export default Home;
