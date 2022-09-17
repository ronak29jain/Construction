import React from 'react'
import {connect} from 'react-redux';
import { openModal } from '../redux/ModalActions';
import jsPDF from 'jspdf'

function PdfReport(props) {
  
  const download = () => {
    var doc = new jsPDF('p', 'pt', 'a4');
    
    doc.html(
      document.querySelector("#project_details"), {
        callback: function(pdf) {
          pdf.save('Project_Details.pdf')
        }
      }
    )
  }

  return (
    <div className='pdfreport'>

      <div id='project_details' style={{ padding: "2rem" , width: "500px",  }}>
        <h1>Project Details</h1>
        <table>
          <thead>
            <tr>
              <th>Project ID</th>
              <th>Project Name</th>
              <th>Budget (corer)</th>
            </tr>
          </thead>
          {
            props.allprojects?.map((projectdata) => {
              {console.log('projectdata: ', projectdata)}
              return (
                <tbody>
                  <tr>
                    {console.log('projectdata.id: ', projectdata.id)}
                    <td> {projectdata.id} </td>
                    <td> {projectdata.name} </td>
                    <td> {projectdata.budget} </td>
                  </tr>
                </tbody>
              )
            })
          }
        </table>
      </div>

      <button onClick={download}>Genrate PDF</button>

    </div>
  )
}

const mapStateToProps = state => {
  return{
    allprojects: state.allprojects
  }
}

const mapDispatchToProps = dispatch => {
  return{
    openModal: () => dispatch(openModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PdfReport)