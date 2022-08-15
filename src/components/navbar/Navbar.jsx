import React, {useState} from 'react';
import './Navbar.css'
import {FiAlignJustify, FiX} from "react-icons/fi";


const Navbar = ({navbarLinks}) =>{
  
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () =>{
    setMenuClicked(!menuClicked)
  };


  return(
    <nav className="app__navbar">
      <span>
        Mérida
      </span>

      {menuClicked 
        ? (<FiAlignJustify 
            className="app__navbar_menu" 
            onClick={toggleMenuClick}
          />)

        : ( 
          <FiX
            className="app__navbar_menu"
            onClick={toggleMenuClick}
          />)
      }

      <ul 
        className={menuClicked ? "app__navbar_list" : "app__navbar_list app__navbar_list--active"}
      >
        {navbarLinks.map(item => {
        return(
          <li className="app__navbar_item" key={item.title}>
            <a className="app__navbar_link" href={item.url}>
              {item.title}
            </a>
          </li>
        )
      })}</ul>
    </nav>
  );
}


export default Navbar;
