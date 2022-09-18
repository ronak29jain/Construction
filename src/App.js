import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom'
import {connect} from 'react-redux';
import { getProjects } from './redux/ModalActions';

function App(props) {
  
  useEffect(() => {
    props.getProjects();
  }, [])

  return (
      <div className="App">
        <div className='navigation-bar'>
          <Navbar />
        </div>
        <div className='working-space'>
          <Outlet className='app-outlet'/>
        </div>
      </div>
  );
}

const mapDispatchToProps = dispatch => {
  return{
    getProjects: () => dispatch(getProjects())
  }
}

export default connect(null, mapDispatchToProps)(App);
