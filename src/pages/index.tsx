import { NextPage } from 'next';
import { useState } from 'react';
import { Header } from 'src/components/organisms/Header';
import { PrefectureSelection } from 'src/components/organisms/PrefectureSelection';
import { Prefectures } from 'src/types/prefectures';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  // 結果がほとんど変わらないので、swrでキャッシュと、エラーやロードのハンドリング
  const { data, error, isLoading } = useSWR<Prefectures, Error>(
    '/api/prefectures',
    fetcher,
  );
  if (error) return <div>RESASの情報取得に失敗しました</div>;
  if (isLoading) return <div>ロード中</div>;

  const [composition, setComposition] = useState();

  const handlePrefectureSelection = async () => {
    try {
      const response = await fetch('api/composition?prefCode=3');
      const data = await response.json();
      setComposition(data);
    } catch (error) {
      console.error(error);
    }
  };

  const prefectures = data!.result;

  return (
    <>
      <Header title="Title" />
      <PrefectureSelection prefectures={prefectures} />
    </>
  );
};

export default Home;
