import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Layout } from 'src/components/organisms/Layout';
import { PrefectureSelection } from 'src/components/organisms/PrefectureSelection';
import { Prefectures } from 'src/types/prefectures';
import { usePrefectures } from 'src/hooks/usePrefectures';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { isLoading, prefectures, setPrefectures, getPrefectures } =
    usePrefectures();

  // useEffect(() => getPregectures)

  const handlePrefectureSelection = async () => {
    try {
      const response = await fetch('api/composition?prefCode=3');
      const json = await response.json();
      // setPrefectures({ ...prefectures });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Layout title="Title" />
      {/* <PrefectureSelection
        prefectures={prefectures}
        onChange={handlePrefectureSelection}
      /> */}
    </>
  );
};

export default Home;
