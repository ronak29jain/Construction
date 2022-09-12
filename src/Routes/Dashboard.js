import React from 'react'
import { Link } from 'react-router-dom';
import { projectsdata } from '../components/Data';


function Dashboard() {
  return (
    <div>
      <Link to='/project/920011'>Pro = 920011</Link>
      {
        projectsdata.map((projectdata) => {
          return (
            <Link 
              to={`/project/${projectdata.id}`} 
              key={projectdata.id}
            >
              <h3>Project ID: {projectdata.id}</h3>
            </Link>
          ) 
        })
      }
    </div>
  )
}

export default Dashboard