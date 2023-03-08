import React from 'react';
import { CheckBox } from '../molecules/CheckBox';
import { Prefecture } from 'src/types/prefectures';

type Props = {
  prefectures: Prefecture[];
  onChange: (value: Prefecture) => void;
};

export const PrefectureSelection = (props: Props) => {
  const { prefectures, onChange } = props;

  return (
    <section>
      {prefectures.map((prefecture) => (
        <CheckBox
          key={prefecture.prefCode}
          name={prefecture.prefName}
          checked={prefecture.checked!}
          onChange={() => onChange(prefecture)}
        />
      ))}
    </section>
  );
};
