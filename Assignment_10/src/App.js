import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/login/login';
// import Registration from './components/register/register';
import Dashboard from './components/dashbord/dashboard';
import { Provider } from 'react-redux';
import Profile from './components/profile';
import EducationDetails from './components/educationdetails';
import Store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path='/register' element={<Registration/>}/> */}
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/education' element={<EducationDetails/>}/>


          </Routes>
      </BrowserRouter>
      </Provider>

     
    </div>
  );
}

export default App;
