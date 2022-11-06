import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppRouter from './routes';
import './index.css';
import './App.css';
import { AuthContext } from './pages/AuthContext';
import { Login } from './pages/Login';
import { Child } from './pages/Child';


const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    textDecoration: 'underline',
    color: 'red',
    transition: 'all 4s',
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: 'none' }
      }
      to={to}
      end
      {...props}
    />
  );
};

function Layout() {
  return (
    <nav>
      <CustomNavLink to="/">Home</CustomNavLink>|{' '}
      <CustomNavLink to="/about">About</CustomNavLink>|{' '}
      <CustomNavLink to="/courses">Courses</CustomNavLink>|{' '}
      <CustomNavLink to="/items/new">New Item</CustomNavLink>
    </nav>
  );
}


function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  

  return (
    <div className="App">
      {/* layout */}
      <Layout />

      {/* routes in our App */}
      <AppRouter />
    </div>
  );
  
}


export default App;
