import React, { useState } from 'react';
import '../Style/CreateNewProjectModal.css'
import {connect} from 'react-redux';
import { 
  closeModal, 
  createProject, 
  // projectId, 
  projectName,
  addProject
} from '../redux/ModalActions';

function CreateNewProjectModal(props) {
  
  const [manager, setManager] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');
  const [railwayStation, setRailwayStation ] = useState('');
  const [siteAddress, setSiteAddress] = useState('');
  
  const projectData = {
    id: props.id,
    name: props.name,
    manager: manager,
    start_date: startDate,
    end_date: endDate,
    budget: parseInt(budget),
    railway_station: railwayStation,
    site_address: siteAddress,
  }

  const createNewProject = () => {
    props.createProject(projectData);
    // props.projectName('')
    // props.projectId(props.id + 1)

    props.addProject(projectData);
  }

  return (
    <div onClick={props.closeModal} className='create_new_project_modal'>
      <div onClick={(e) => e.stopPropagation()} className='modal_content'>
        <div className='close_modal'>
          <h3 onClick={props.closeModal} ><span>X</span></h3>
        </div>
        <h1>Create New Project</h1>
        <div className='input-section'>
          <h3>Project Name: </h3>
          <input type="text" placeholder='Project Name' value={props.name} onChange={(e) => props.projectName(e.target.value)} />
        </div>
        <div className='input-section'>
          <h3>Manager: </h3>
          <input type="text" placeholder='Manager' value={manager} onChange={(e) => setManager(e.target.value)} />
        </div>
        <div className='input-section'>
          <h3>Start Date: </h3>
          <input type="date" placeholder='Start Date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className='input-section'>
          <h3>End Date: </h3>
          <input type="date" placeholder='End Date' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div className='input-section'>
          <h3>Budget: </h3>
          <input type="number" placeholder='Budget' value={budget} onChange={(e) => setBudget(e.target.value)} />
        </div>
        <div className='input-section'>
          <h3>Railway Station: </h3>
          <input type="text" placeholder='Railway Station' value={railwayStation} onChange={(e) => setRailwayStation(e.target.value)} />
        </div>
        <div className='input-section'>
          <h3>Site Address: </h3>
          <input type="text" placeholder='Site Address' value={siteAddress} onChange={(e) => setSiteAddress(e.target.value)} />
        </div>
        <button type='submit' className='submit' onClick={createNewProject}>Create Project</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    id: state.id,
    name: state.name,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    closeModal: () => dispatch(closeModal()),
    createProject: projectData => dispatch(createProject(projectData)),
    projectName: name => dispatch(projectName(name)),
    addProject: projectData => dispatch(addProject(projectData))
    // projectId: id => dispatch(projectId(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewProjectModal)