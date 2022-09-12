import './App.css';
import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet className='app-outlet'/>
    </div>
  );
}

export default App;
