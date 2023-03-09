import React from 'react';
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { chartComposition } from 'src/types/chartComposition';

type Props = {
  chartComposition: chartComposition[];
};

export const PrefectureChart = (props: Props) => {
  const { chartComposition } = props;

  // console.log(chartComposition);

  if (!chartComposition[0]) return <></>;

  return (
    <section>
      <LineChart
        width={700}
        height={300}
        margin={{ top: 50, left: 30, right: 30, bottom: 50 }}
      >
        <CartesianGrid strokeDasharray={3} />
        <XAxis
          dataKey="year"
          tickLine={false}
          axisLine={true}
          allowDuplicatedCategory={false}
        >
          <Label value="年度" position="insideBottomRight" />
        </XAxis>
        <YAxis>
          <Label value="人口数" position="insideTopLeft" />
        </YAxis>
        {chartComposition.map((comp, i) => (
          <Line
            name={comp.prefectureName}
            data={comp.data.data}
            dataKey="value"
            key={i}
          />
        ))}
        <Legend verticalAlign="top" />
        <Tooltip />
      </LineChart>
    </section>
  );
};
