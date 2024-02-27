import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/profile' element={<Profile/>}/>
 
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
