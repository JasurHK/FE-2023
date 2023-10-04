import React, { useState } from 'react';
import '../css/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFaceSadCry } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-solid-svg-icons'; 

function Navbar() {
  const [sideBarActive, setSideBarActive] = useState(false);

  const toggleSideBar = () => {
    setSideBarActive(!sideBarActive);
  };

  return (
    <div className="navbar-container">
      <nav>
        <div className="nav-logo">
          <h1>SpinCruise</h1>
        </div>
        <div className="hamburger">
          <FontAwesomeIcon icon={faBars} id='click' onClick={toggleSideBar} />
        </div>
        <div className={`side-bar ${sideBarActive ? 'active' : ''}`}>
          <div className="bar_nav">
            <FontAwesomeIcon icon={faXmark} id='click' onClick={toggleSideBar} />
          </div>
          <div className="bar_top">
            <ul>
              <li><a href="#">All bikes </a><FontAwesomeIcon icon={faArrowRight}/></li>
              <li><a href="#">E-bikes</a><FontAwesomeIcon icon={faArrowRight}/></li>
              <li><a href="#">Stores</a><FontAwesomeIcon icon={faArrowRight}/></li>
              <li><a href="#">Help</a><FontAwesomeIcon icon={faArrowRight}/></li>
              <li><a href="#">Account</a><FontAwesomeIcon icon={faArrowRight}/></li>
            </ul>
          </div>
          <div className="bar_bottom">
            <div>
              <h1>We are here to help</h1>
              <p>Call us: +48 884 739 922</p>
              <p>WhatsApp: +48 884 739 922</p>
              <p>Conttack us <a href="£">here</a></p>
            </div>
            <div class="select-bar">
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div class="select-bar">
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
