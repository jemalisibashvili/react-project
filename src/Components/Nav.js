import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav(){
  return(
      <nav>
          <ul className="nav-links">
          <Link to='/Home'><li>Home  </li></Link>
      <Link to='/ajax'><li>result  </li></Link>
      <Link to='/ajax2'><li>ajax  </li></Link>
     <Link to='/registration'> <li>Registration</li> </Link>
     <Link to='/slideshow'> <li>slideshow</li> </Link>
     <Link to='/myinfo'> <li>Description</li> </Link>
      </ul>
    </nav>
  );
}
export  default Nav;
