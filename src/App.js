import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import Navbar from './components/Navbar';
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='navigation-bar'>
          <Navbar />
        </div>
        <div className='working-space'>
          <Outlet className='app-outlet'/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
