import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Layout } from 'src/components/organisms/Layout';
import { PrefectureSelection } from 'src/components/organisms/PrefectureSelection';
import { Prefecture, Prefectures } from 'src/types/prefectures';
import { usePrefectures } from 'src/hooks/usePrefectures';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { isLoading, prefectures, setPrefCheckBox, getPrefectures } =
    usePrefectures();

  useEffect(() => {
    (async () => getPrefectures())();
  }, []);
  console.log(prefectures);

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
    </>
  );
};

export default Home;
