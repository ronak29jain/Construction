import React from 'react'
import { useParams } from "react-router-dom";
import { projectsdata } from '../components/Data';

function Project() {

  let params = useParams();

  const Pdata = projectsdata.filter(projectdata => {
    return (parseInt(params.projectID) === projectdata.id)
  })

  return (
    <div className='project'>
      <h3> Project ID: {params.projectID}</h3>
      <h3>Project Name: {Pdata[0].name}</h3>
      <h3>Project Manager: {Pdata[0].manager}</h3>
      <h3>Start_date: {Pdata[0].start_date}</h3>
      <h3>End_date: {Pdata[0].end_date}</h3>
      <h3>Budget: {Pdata[0].budget}</h3>
      <h3>Railway Station: {Pdata[0].railway_station}</h3>
      <h3>Site Address: {Pdata[0].site_address}</h3>
    </div>
  )
}

export default Project