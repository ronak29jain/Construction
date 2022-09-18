import React, { useEffect } from 'react'
import '../Style/Dashboard.css'
import { Link } from 'react-router-dom';
// import { projectsdata } from '../components/Data';
import Container from '../components/Container';
import CreateNewProjectModal from '../components/CreateNewProjectModal';
import {connect} from 'react-redux';
import { getProjects, openModal } from '../redux/ModalActions'


function Dashboard(props) {

  useEffect(() => {
    props.getProjects();
  }, [])

  return (
    <div className='dashboard'>
      <div className='create-new-project'>
        <button onClick={props.openModal} >Create New Project</button>
      </div>
      <div className='projects'>
        {
          props.projects?.map((projectdata) => {
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
        {/* {
          props.allprojects?.map((projectdata) => {
            
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
        } */}
      </div>
      {props.displayModal && <CreateNewProjectModal /> }
    </div>
  )
}

const mapStateToProps = state => {
  return{
    displayModal: state.displayModal,
    allprojects: state.allprojects,
    projects: state.projects
  }
}

const mapDispatchToProps = dispatch => {
  return{
    openModal: () => dispatch(openModal()),
    getProjects: () => dispatch(getProjects())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)