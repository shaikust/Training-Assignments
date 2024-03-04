import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './components/main';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Main/>}/>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
