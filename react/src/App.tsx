import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './views/login/Index';
import Areas from './views/areas/Index';
import Homepage from './views/homepage/Index';
import Patients from './views/patients/Index';
import Users from './views/users/Index';
import Visualisation from './views/visualisation/Index';
import Calls from './views/calls/Index';

function App() {
  const [admin, setAdmin] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Homepage admin={admin} />} />
          <Route path="/areas" element={<Areas admin={admin} />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/users" element={<Users admin={admin} />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/vis" element={<Visualisation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
