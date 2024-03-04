import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Lifecyclemethod from './components/lifecyclemethod';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Lifecyclemethod/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
