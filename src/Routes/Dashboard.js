import React from 'react'
import '../Style/Dashboard.css'
import { Link } from 'react-router-dom';
// import { projectsdata } from '../components/Data';
import Container from '../components/Container';
import CreateNewProjectModal from '../components/CreateNewProjectModal';
import {connect} from 'react-redux';
import { openModal } from '../redux/ModalActions'


function Dashboard(props) {
  return (
    <div className='dashboard'>
      <div className='create-new-project'>
        <button onClick={props.openModal} >Create New Project</button>
      </div>
      <div className='projects'>
        {
          // projectsdata.map((projectdata) => {
          props.allprojects.map((projectdata) => {
            
            const property = {
              head1: 'Project ID',
              head2: 'Project Name',
              head3: 'Budget',
              head4: 'End Date',
            }
            const value = {
              v1: projectdata.id,
              v2: projectdata.name,
              v3: projectdata.budget,
              v4: projectdata.end_date,
            }

            return (
              <Link 
                to={`/project/${projectdata.id}`} 
                key={projectdata.id}
                className='link'
              >
                <Container property={property} value={value} />
              </Link>
            ) 
          })
        }
      </div>
      {props.displayModal && <CreateNewProjectModal /> }
    </div>
  )
}

const mapStateToProps = state => {
  return{
    displayModal: state.displayModal,
    allprojects: state.allprojects
  }
}

const mapDispatchToProps = dispatch => {
  return{
    openModal: () => dispatch(openModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)