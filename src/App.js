import './App.css';
import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom'

function App() {
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

export default App;
