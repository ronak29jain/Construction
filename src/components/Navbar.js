import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to={'./dashboard'} className='link'> Dashboard</Link>
      <Link to={'./report/pdfreport'} className='link'>Pdf Report</Link>
      <Link to={'./report/allprojectbudgetplot'} className='link'>Chart</Link>
    </div>
  )
}

export default Navbar