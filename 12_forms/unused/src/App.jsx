import React from 'react';
import PieChart from './components/PieChart';

const App = () => {
  const pieChartData = [
    { title: 'Part 1', percentage: 10 },
    { title: 'Part 2', percentage: 20 },
    { title: 'Part 3', percentage: 5 },
    // Add more data as needed
  ];

  return (
    <div>
      <h1>Pie Chart</h1>
      <PieChart data={pieChartData} />
    </div>
  );
};

export default App;
