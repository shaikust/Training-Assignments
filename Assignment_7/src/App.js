import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
