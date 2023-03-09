import React from 'react';
import {
  CartesianGrid,
  Label,
  Legend,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { chartComposition } from 'src/types/chartComposition';

type Props = {
  chartComposition: chartComposition[];
};

export const PrefectureChart: React.FC<Props> = (props: Props) => {
  const { chartComposition } = props;

  return (
    <section>
      <LineChart
        width={700}
        height={300}
        // data={}
      >
        <CartesianGrid strokeDasharray={3} />
        <XAxis>
          <Label value="年度" position="bottom" />
        </XAxis>
        <YAxis>
          <Label value="人口数" position="insideTopLeft" />
        </YAxis>
        <Legend verticalAlign="top" />
        <Tooltip />
      </LineChart>
    </section>
  );
};
