import React from 'react';
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { chartComposition } from 'src/types/chartComposition';
import { Section } from '../atoms/Section';

type Props = {
  chartComposition: chartComposition[];
};

export const PrefectureChart = (props: Props) => {
  const { chartComposition } = props;

  return (
    <Section>
      <ResponsiveContainer width="80%" height={400}>
        <LineChart margin={{ top: 50, left: 30, right: 30, bottom: 50 }}>
          <CartesianGrid strokeDasharray={3} />
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={true}
            allowDuplicatedCategory={false}
          >
            <Label value="年度" position="insideBottomRight" offset={-15} />
          </XAxis>
          <YAxis>
            <Label value="人口数" position="insideTopLeft" offset={-30} />
          </YAxis>
          {chartComposition[0] &&
            chartComposition.map((comp, i) => (
              <Line
                name={comp.prefectureName}
                data={comp.data.data}
                dataKey="value"
                key={i}
              />
            ))}
          <Legend align="right" verticalAlign="top" offset={500} />

          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Section>
  );
};
