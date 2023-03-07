import { NextPage } from 'next';
import { Header } from 'src/components/organisms/Header';
import { PrefectureSelection } from 'src/components/organisms/PrefectureSelection';
import { Prefectures } from 'src/types/prefectures';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error, isLoading } = useSWR<Prefectures, Error>(
    '/api/prefectures',
    fetcher,
  );
  if (error) return <div>RESASの情報取得に失敗しました</div>;
  if (isLoading) return <div>ロード中</div>;

  const prefectures = data!.result;

  return (
    <>
      <Header title="Title" />
      <PrefectureSelection prefectures={prefectures} />
    </>
  );
};

export default Home;
