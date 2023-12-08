import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

function Pie_Employment() {
  const data1 = [
    { name: "Full Time", numbers: 205 },
    { name: "Part Time", numbers: 317 },
    { name: "Daily Wage", numbers: 502 },
  ];
  return (
    <div className="col-5">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="numbers"
          isAnimationActive={true}
          data={data1}
          cx={200}
          cy={200}
          outerRadius={100}
          fill="white"
          nameKey="name"
          stroke="black"
          label
        />
        <Tooltip
          contentStyle={{ backgroundColor: "black" }}
          itemStyle={{ color: "white" }}
        />
      </PieChart>
    </div>
  );
}

export default Pie_Employment;
