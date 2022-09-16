import React from 'react';
import { useState } from 'react';
import LineChart from '../components/LineChart';
import { projectsdata } from '../components/Data';

function AllProjectBudgetPlot() {

  const [data, setData] = useState({
    labels: projectsdata?.map((projdata) => projdata.id),
    datasets: [{
      label: 'Project Budget',
      data: projectsdata?.map((projtdata) => projtdata.budget),
      // backgroundColor: ['red'],
      borderColor: 'red',
    }]
  })

  return (
    <div>
      AllProjectBudgetPlot
      <LineChart chartdata={data} />
    </div>
  )
}

export default AllProjectBudgetPlot