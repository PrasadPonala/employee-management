// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponents from './components/HeaderComponents';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';

import SessionTimeout from './components/SessionTimeout';
function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'akhil' && password === 'king') {
      setAuthenticated(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    
    setAuthenticated(false);
  };

  return (
    <div>
      <Router>
        <HeaderComponents authenticated={authenticated} onLogout={handleLogout} />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                authenticated ? (
                  <ListEmployeeComponent />
                ) : (
                  <LoginComponent onLogin={handleLogin} />
                )
              }
            />
            <Route
              path='/login'
              element={
                authenticated ? (
                  <ListEmployeeComponent />
                ) : (
                  <LoginComponent onLogin={handleLogin} />
                )
              }
            />
            <Route
              path='/employees'
              element={
                authenticated ? (
                  <ListEmployeeComponent />
                ) : (
                  <LoginComponent onLogin={handleLogin} />
                )
              }
            />

{/* <Route
              path='/analytics'
              element={
                authenticated ? (
                  <AnalyticsComponent />
                ) : (
                  <LoginComponent onLogin={handleLogin} />
                )
              }
            /> */}
            <Route
              path='/update-employee/:id'
              element={
                authenticated ? (
                  <UpdateEmployeeComponent />
                ) : (
                  <LoginComponent onLogin={handleLogin} />
                )
              }
            />



            <Route
              path='/add-employee'
              element={
                authenticated ? (
                  <AddEmployeeComponent />
                ) : (
                  <LoginComponent onLogin={handleLogin} />
                )
              }
            />
          </Routes>
          <SessionTimeout onTimeout={handleLogout} />
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
