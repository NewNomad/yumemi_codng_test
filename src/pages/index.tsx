import { NextPage } from 'next';
import { Header } from 'src/components/organisms/Header';
import { PrefectureSelection } from 'src/components/organisms/PrefectureSelection';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error, isLoading } = useSWR('/api/prefectures', fetcher);

  console.log(data);

  return (
    <>
      <Header title="Title" />
      <PrefectureSelection />
    </>
  );
};

export default Home;
