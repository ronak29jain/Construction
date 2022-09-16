import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

function LineChart({ chartdata }) {
  return <div style={{width: 700}}>
    <Line data={chartdata}/>
  </div>
}

export default LineChart