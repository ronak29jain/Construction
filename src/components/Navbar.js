import React from 'react'
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ShowChartIcon from '@mui/icons-material/ShowChart';

function Navbar() {
  return (
    <div className='navbar'>
      <Link to={'./dashboard'} className='link'><HomeIcon className='nav-icon' /> </Link>
      <Link to={'./report/pdfreport'} className='link'> <AnalyticsIcon className='nav-icon' /> </Link>
      <Link to={'./report/allprojectbudgetplot'} className='link'> <ShowChartIcon className='nav-icon' /></Link>
    </div>
  )
}

export default Navbar