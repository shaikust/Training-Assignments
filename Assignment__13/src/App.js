import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Create/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/update' element={<Update/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
