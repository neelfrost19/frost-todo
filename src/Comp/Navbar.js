import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [menuButton, setMenuButton] = useState(false);
  const [buttonVis, setButtonVis] = useState(true);
  const photo = '/images/propic1.png';



  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButtonVis(false);
    } else {
      setButtonVis(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div
          className='navbar-logo'>
            FROST
            <img
                className="frost-pic"
                src={photo}
            />
          </div>
          <ul className= 'nav-menu'>
            <li className='nav-item'>
              <a
                href="#backvideo"
                className='nav-links'
                >
               TO-DO

              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
