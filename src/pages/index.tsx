import { NextPage } from 'next';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Layout } from 'src/components/organisms/Layout';
import { PrefectureSelection } from 'src/components/organisms/PrefectureSelection';
import { Prefecture, Prefectures } from 'src/types/api/prefectures';
import { usePrefectures } from 'src/hooks/usePrefectures';
import { useCompositions } from 'src/hooks/useCompositions';
import { PrefectureChart } from 'src/components/organisms/PrefectureChart';
const PrefectureChartWrapper = dynamic(
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

  const { chartComposition, toggleChartComposition } = useCompositions();

  useEffect(() => {
    (async () => getPrefectures())();
  }, []);

  // チェックボックスクリック時の処理
  const handleCheckBox = async (prefecture: Prefecture) => {
    toggleChartComposition(prefecture);
    setPrefCheckBox(prefecture);
  };
  console.log(chartComposition);

  if (isLoading) return <div>ロード中</div>;

  return (
    <>
      <Layout title="Title" />

      <PrefectureSelection
        prefectures={prefectures}
        onChange={handleCheckBox}
      />
      <PrefectureChartWrapper chartComposition={chartComposition} />
    </>
  );
};

export default Home;
