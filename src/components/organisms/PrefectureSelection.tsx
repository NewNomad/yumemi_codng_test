import React from 'react';
import { CheckBox } from '../molecules/CheckBox';
import { Prefecture } from 'src/types/api/prefectures';
import { Headline } from '../atoms/Headline';
import { Section } from '../atoms/Section';
import { CheckBoxContainer } from '../atoms/CheckBoxContainer';

type Props = {
  prefectures: Prefecture[];
  onChange: (value: Prefecture) => void;
};

export const PrefectureSelection = React.memo((props: Props) => {
  const { prefectures, onChange } = props;

  return (
    <Section>
      <Headline title="都道府県" />
      <CheckBoxContainer>
        {prefectures.map((prefecture) => (
          <CheckBox
            key={prefecture.prefCode}
            name={prefecture.prefName}
            checked={prefecture.checked!}
            onChange={() => onChange(prefecture)}
          />
        ))}
      </CheckBoxContainer>
    </Section>
  );
});

PrefectureSelection.displayName = 'PrefectureSelection';
