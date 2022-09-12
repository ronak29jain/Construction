import React from 'react';
import {Outlet} from 'react-router-dom';

function Report() {
  return (
    <div>
      Report
      <Outlet className='report-outlet'/>
    </div>
  )
}

export default Report;