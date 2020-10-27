import React from 'react';
import myClasses from './Navbar.module.css';

const Navbar = () => {
    return ( 
        <nav className = {myClasses['nav-grid']}>
        <div className = {myClasses.item}>
          <a>Profile</a>
        </div>     
        <div className = {myClasses.item}>
          <a>Messages</a>
        </div>     
        <div className = {myClasses.item}>
          <a>News</a>
        </div>     
        <div className = {myClasses.item}>
          <a>Music</a>
        </div>     
        <div className = {myClasses.item}>
          <a>Settings</a>
        </div>     
      </nav>
    );
}

export default Navbar;