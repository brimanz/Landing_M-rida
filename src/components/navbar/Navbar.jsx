import React from 'react';
import {BsFillGrid3X3GapFill, BsFillXCircleFill} from 'react-icons/bs';
import './Navbar.css';
import Logo from '../../assets/logo.jpg'


const Navbar = () =>{
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
          fontSize={25}
          onClick={() => {}}
        />

        <div>
          <BsFillXCircleFill
            color="#c31432" 
            fontSize={25}
            onClick={() => {}}
          />

          <ul className="app__navbar-smallscreen-links">
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
      </div>

    </nav>
  );
}


export default Navbar;