import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/login/login';
import Registration from './components/register/register';
import Dashboard from './components/dashbord/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>

          </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
