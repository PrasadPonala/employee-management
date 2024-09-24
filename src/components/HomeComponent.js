import React from 'react';
import LoginComponent from './LoginComponent';

const HomeComponent = ({ authenticated }) => {
  return (
    <div>
      {authenticated ? (
        window.location.replace('/employees')
      ) : (
        <LoginComponent />
      )}
    </div>
  );
};

export default HomeComponent;