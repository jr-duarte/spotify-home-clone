import React from 'react';


import logo from "../Menu/logo.png" 

import './styles.css'


function Menu() {


  return (
    <div className="vertical-menu">
      <img src={logo} alt="Logo" />
      <div className="menu-item">
      <a href="#" class="active">Home</a>
      <a href="#">Search</a>
      <a href="#">Your Library</a>
      </div>
    </div>
  );
}


export default Menu;