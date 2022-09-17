import React from 'react'
import Container from '../components/Container';
import { useParams } from "react-router-dom";
// import { projectsdata } from '../components/Data';
import { connect } from 'react-redux'
import { closeModal } from '../redux/ModalActions';

function Project(props) {

  let params = useParams();

  // const Pdata = projectsdata.filter(projectdata => {
  //   return (parseInt(params.projectID) === projectdata.id)
  // })
  
  const Projdata = props.allprojects.filter(projectdata => {
    return (parseInt(params.projectID) === projectdata.id)
  })

  // console.log('Projdata', Projdata[0])

  const property1 = {
    head1: 'Project ID',
    head2: 'Project Name',
    head3: 'Manager',
    head4: 'Start Date',
  }
  const value1 = {
    v1: Projdata[0]?.id,
    v2: Projdata[0]?.name,
    v3: Projdata[0]?.manager,
    v4: Projdata[0]?.start_date,
  }
  
  const property2 = {
    head1: 'Site Address',
    head2: 'Railway Station',
    head3: 'Budget',
    head4: 'End Date',
  }

  const value2 = {
    v1: Projdata[0]?.site_address,
    v2: Projdata[0]?.railway_station,
    v3: Projdata[0]?.budget,
    v4: Projdata[0]?.end_date,
  }

  return (
    <div className='project'>
      {/* <div>
        <h3>Project ID: {params.projectID}</h3>
        <h3>Project Name: {Pdata[0].name}</h3>
        <h3>Project Manager: {Pdata[0].manager}</h3>
        <h3>Start_date: {Pdata[0].start_date}</h3>
        <h3>End_date: {Pdata[0].end_date}</h3>
        <h3>Budget: {Pdata[0].budget}</h3>
        <h3>Railway Station: {Pdata[0].railway_station}</h3>
        <h3>Site Address: {Pdata[0].site_address}</h3>
      </div> */}
      <Container property={property1} value={value1} />
      <Container property={property2} value={value2} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    allprojects: state.allprojects
  }
}

const mapDispatchToProps = dispatch => {
  return{
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);