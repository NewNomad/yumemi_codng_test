import { NextPage } from 'next';
import { useState } from 'react';
import { Layout } from 'src/components/organisms/Layout';
import { PrefectureSelection } from 'src/components/organisms/PrefectureSelection';
import { useFetchPref } from 'src/hooks/useFetchPref';
import { Prefectures } from 'src/types/prefectures';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { prefectures, setPrefectures, error, isLoading } = useFetchPref();

  if (error) return <div>RESASの情報取得に失敗しました</div>;
  if (isLoading) return <div>ロード中</div>;

  const handlePrefectureSelection = async () => {
    try {
      const response = await fetch('api/composition?prefCode=3');
      const json = await response.json();
      setPrefectures({ ...prefectures });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Layout title="Title" />
      <PrefectureSelection
        prefectures={prefectures}
        onChange={handlePrefectureSelection}
      />
    </>
  );
};

export default Home;
