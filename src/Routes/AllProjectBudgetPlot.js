import React from 'react';
import { useState } from 'react';
import LineChart from '../components/LineChart';
// import { projectsdata } from '../components/Data';
import { connect } from 'react-redux'

function AllProjectBudgetPlot(props) {

  // const [data, setData] = useState({
  //   labels: projectsdata?.map((projdata) => projdata.id),
  //   datasets: [{
  //     label: 'Project Budget',
  //     data: projectsdata?.map((projtdata) => projtdata.budget),
  //     // backgroundColor: ['red'],
  //     borderColor: 'red',
  //   }]
  // })
  
  const [data0, setData0] = useState({
    labels: props.allprojects?.map((projdata) => projdata.id),
    datasets: [{
      label: 'Project Budget',
      data: props.allprojects?.map((projtdata) => projtdata.budget),
      // backgroundColor: ['red'],
      borderColor: 'red',
    }]
  })

  return (
    <div>
      AllProjectBudgetPlot
      {/* <LineChart chartdata={data} /> */}
      <LineChart chartdata={data0} />
    </div>
  )
}

const mapStateToProps = state => {
  return{
    allprojects: state.allprojects
  }
}

export default connect(mapStateToProps)(AllProjectBudgetPlot)