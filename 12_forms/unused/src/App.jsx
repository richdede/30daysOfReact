import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Rewards', value: 400, percentage: '30%' },
  { name: 'Public', value: 300, percentage: '5%' },
  { name: 'Seed', value: 300, percentage: '10%' },
  { name: 'Public', value: 200, percentage: '5%' },
  { name: 'Treasury Reserve', value: 200, percentage: '10%' },
  { name: 'Team and Advisors/Partners', value: 200, percentage: '20%' },
  { name: 'Marketing', value: 200, percentage: '5%' },
  { name: 'Preseed', value: 200, percentage: '5%' },
  { name: 'Liquidity', value: 200, percentage: '5%' },
  { name: 'Private', value: 200, percentage: '10%' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, percentage }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="middle">
      {`${name}: ${percentage}`}
    </text>
  );
};

const App = () => {
  return (
    <ResponsiveContainer width="100%" height={400} >
      <PieChart width={400} height={400} >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default App;
