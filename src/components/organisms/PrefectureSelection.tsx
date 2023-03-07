import React from 'react';
import { CheckBox } from '../molecules/CheckBox';
import { Prefecture } from 'src/types/prefectures';

type Props = {
  prefectures: Prefecture[];
  onChange: () => void;
};

export const PrefectureSelection = (props: Props) => {
  const { prefectures, onChange } = props;

  return (
    <>
      {prefectures.map((prefecture) => (
        <CheckBox
          key={prefecture.prefCode}
          name={prefecture.prefName}
          checked={false}
          onChange={onChange}
        />
      ))}
    </>
  );
};
