import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import  { Register1 } from './componenets/class-comp/register1';
import Register2 from './componenets/function-comp/register2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register1" element={<Register1/>}/>
          <Route path="/" element={<Register2/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
