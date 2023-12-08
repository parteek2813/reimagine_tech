import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

function Pie_Gender() {
  const data = [
    { name: "Male", numbers: 768 },
    { name: "Female", numbers: 256 },
  ];
  return (
    <div className="col-5">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="numbers"
          isAnimationActive={true}
          data={data}
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

export default Pie_Gender;
