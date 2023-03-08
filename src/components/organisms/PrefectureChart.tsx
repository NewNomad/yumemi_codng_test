import React from 'react';
import {
  CartesianGrid,
  Label,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export const PrefectureChart = () => {
  return (
    <section>
      <LineChart
        width={700}
        height={300}
        // data={}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="年度" label={{ value: "aaa", offset: -5, position: "insideBottomRight" }} xlinkShow='' /> */}
        <XAxis>
          {/* <Label value="年度" position="insideBottomRight" /> */}
        </XAxis>
        <YAxis>
          <Label value="人口数" position="insideTopLeft" />
        </YAxis>
        <Tooltip />
      </LineChart>
      ;
    </section>
  );
};
