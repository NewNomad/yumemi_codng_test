import React from 'react';
import { CheckBox } from '../molecules/CheckBox';
import { Prefecture } from 'src/types/prefectures';

type Props = {
  prefectures: Prefecture[];
};

export const PrefectureSelection = (props: Props) => {
  const { prefectures } = props;

  return (
    <>
      {prefectures.map((prefecture) => (
        <CheckBox
          key={prefecture.prefCode}
          name={prefecture.prefName}
          checked
          onChange={() => {}}
        />
      ))}
    </>
  );
};
