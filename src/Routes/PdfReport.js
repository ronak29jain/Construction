import React from 'react'
import '../Style/PdfReport.css'
import {connect} from 'react-redux';
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
        <h1 style={{ textAlign: 'center', textDecoration: "underline" }} >Project Details</h1>
        <table style={{ borderBottom: '2px solid blue', textAlign: 'left' }}>
          <thead>
            <tr>
              {/* <div> */}
                <th style={{ padding: "1rem", paddingRight: "2rem", borderBottom: '2px solid blue'}}>Project ID</th>
                <th style={{ padding: "1rem", paddingRight: "2em", borderBottom: '2px solid blue'}}>Project Name</th>
                <th style={{ borderBottom: '2px solid blue'}}>Budget <span>&#8377;</span> (corer)</th>
              {/* </div> */}
            </tr>
          </thead>
          {
            props.projects?.map((projectdata) => {
              // {console.log('projectdata: ', projectdata)}
              return (
                <tbody>
                  <tr>
                    {console.log('projectdata.id: ', projectdata.id)}
                    <td style={{ padding: "1rem", paddingRight: "2rem"}}> {projectdata.id} </td>
                    <td style={{ padding: "1rem", paddingRight: "2rem"}}> {projectdata.name} </td>
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
    // allprojects: state.allprojects
    projects: state.projects
  }
}

export default connect(mapStateToProps)(PdfReport)