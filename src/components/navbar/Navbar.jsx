import React, {useState} from 'react';
import {BsFillGrid3X3GapFill, BsFillXCircleFill} from 'react-icons/bs';
import './Navbar.css';
import Logo from '../../assets/logo.png'


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);


  return(
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <img src={Logo} alt="logo"/>
      </div>

      <ul className="app__navbar-links">
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#about">Sobre Mérida</a>
        </li>
        <li>
          <a href="#places">Lugares</a>
        </li>
        <li>
          <a href="#activity">Actividades</a>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <BsFillGrid3X3GapFill
          color="#c31432" 
          fontSize={24}
          onClick={() => setToggleMenu(true)}
          cursor="pointer"
        />

        {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay">
              <BsFillXCircleFill
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />

              <ul className="app__navbar-smallscreen_links">
                <li>
                  <a href="#home">Inicio</a>
                </li>
                <li>
                  <a href="#about">Sobre Mérida</a>
                </li>
                <li>
                  <a href="#places">Lugares</a>
                </li>
                <li>
                  <a href="#activity">Actividades</a>
                </li>
              </ul>
          </div>
        )}
      </div>
    </nav>
  );
}


export default Navbar;