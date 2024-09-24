// HeaderComponents.js
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponents = ({ authenticated, onLogout }) => {
  return (
    <div>
      <header className='header'>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div>
            <a href="https://www.thopstech.com" className='navbar-brand'>
              Thopstech
            </a>
          </div>
          {authenticated && (
            <div className='navbar-nav ml-auto'>
              <button className='btn btn-danger' onClick={onLogout}>
                Logout
              </button>
              <Link to='/analytics' className='btn btn-info btn-lg'>
              Analytics
            </Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponents;
