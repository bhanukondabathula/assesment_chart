// src/components/Chart.jsx
import React, {useState, useEffect} from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

const Chart = ({data}) => {
  const [selectedData, setSelectedData] = useState([])

  useEffect(() => {
    setSelectedData(data)
  }, [data])

  const handleClick = data => {
    alert(`Value: ${data.value}, Date: ${data.timestamp}`)
  }

  return (
    <ResponsiveContainer width='100%' height={400}>
      <LineChart
        data={selectedData}
        onClick={e => handleClick(e.activePayload[0].payload)}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='timestamp' />
        <YAxis />
        <Tooltip />
        <Line
          type='monotone'
          dataKey='value'
          stroke='#8884d8'
          activeDot={{r: 8}}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart
