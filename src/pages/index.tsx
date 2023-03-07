import { NextPage } from 'next';
import { Header } from 'src/components/organisms/Header';
import { PrefectureSelection } from 'src/components/organisms/PrefectureSelection';

const Home: NextPage = () => {
  return (
    <>
      <Header title="Title" />
      <PrefectureSelection />
    </>
  );
};

export default Home;
