import React from 'react';
import myClasses from './Navbar.module.css';

// let myClassCss = {
  
//   'nav': 'Navbar_109',
//   'item': 'Navbar09098'
// };

let class1 = {
  str1: 'str  1',
  str11:'str 11'
};

console.log(myClasses);

let str1 = 'str1!';
let str2 = 'str2!';

let strNew = `${str1} ${str2}`;
let cssStyleActive = `${myClasses.item} ${myClasses.active}`;

const Navbar = () => {
    return ( 
        <nav className = {myClasses['navGrid']}>
        <div className = {myClasses.item}>
          <a>Profile</a>
        </div>     
        <div className = {cssStyleActive}>
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
        <div className = {myClasses.item}>
          <a>{cssStyleActive}</a>
        </div>     
      </nav>
    );
}

export default Navbar;