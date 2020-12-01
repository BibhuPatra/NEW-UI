import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // console.log(props.is)

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const logoutHandler = (event) => {
    localStorage.setItem("isAuthenticated", false); 
    localStorage.setItem("userName", ""); 
    localStorage.setItem("token", ""); 
  }
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            HouseFounder
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Properties
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {localStorage.getItem("isAuthenticated") ? <span style = {{color:"white"}}>{`Welcome! ${localStorage.getItem("userName")}`}</span>:null}
          {button && localStorage.getItem("isAuthenticated") ? <Button buttonStyle='btn--outline' onClick={logoutHandler}>SIGN IN</Button> : <Button buttonStyle='btn--outline'>SIGN OUT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
