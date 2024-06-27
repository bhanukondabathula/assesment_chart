
// src/App.jsx
import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';
import data from './data/data.json';

const App = () => {
  const [timeframe, setTimeframe] = useState('daily');
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Simulate data fetching and timeframe filtering
    const filteredData = data.filter(item => {
      const date = new Date(item.timestamp);
      if (timeframe === 'daily') return date;
      if (timeframe === 'weekly') return date.getDay() === 0;
      if (timeframe === 'monthly') return date.getDate() === 1;
      return item;
    });
    setChartData(filteredData);
  }, [timeframe]);

  return (
    <div>
      <TimeframeSelector onSelect={setTimeframe} />
      <Chart data={chartData} />
    </div>
  );
};

export default App;