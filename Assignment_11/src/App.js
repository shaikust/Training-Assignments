// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './components/login/login';
// import Dashboard from './components/dashbord';
import { UserProvider } from './components/usercontext';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <UserProvider >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login />} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
