import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartRef = useRef();
  const chartInstance = useRef();

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      
      const ctx = chartRef.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.map(item => item.title),
          datasets: [{
            data: data.map(item => item.percentage),
            backgroundColor: data.map((_, index) => `hsl(${(index * 360) / data.length}, 70%, 50%)`),
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 0, // Adjust as needed
              bottom: 100,
              left: 50,
              right: 50,
            }
          },
          legend: {
            position: 'right',
            labels: {
              fontSize: 14, // Adjust font size as needed
            }
          },
        }
      });
    }
    
    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} style={{ height: '100vh', width: '100%' }} />;
};

export default PieChart;
