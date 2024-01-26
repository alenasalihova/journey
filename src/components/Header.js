import React, { useEffect } from 'react';
import '../css/style.css'; 

const Header = () => {
    useEffect ( () => { const menuItems = document.querySelectorAll('ul#menu li');
    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            menuItems.forEach((menuItem) => {
                menuItem.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
    return () => {

    };
}, [] );
  return (
    <div>
    <div className="first">
      <a href="#"><img src="./img/homa.png" alt="logo" className="logo" /></a>
      <div className="logotext">LEVEL TRAVEL</div>
      <div className="spaсe"></div>
      <nav>
        <ul id="menu">
          <li><a href="#aboutus" className="aboutus" id="menu-item-1">ПРО НАС</a></li>
          <li><a href="#box4" className="hottours" id="menu-item-2">ГОРЯЧИЕ ТУРЫ</a></li>
          <li><a href="#contacts_all" className="contacts" id="menu-item-3">КОНТАКТЫ</a></li>
        </ul>
      </nav>
      </div>
      <div className='header'>
      <div className="level"><h1>LEVEL TRAVEL</h1></div>
        <div id="dateAndClock">
            <div id="clock"></div>
            <div id="date"></div>
        </div>
        <div className="buttons">
            <button className="inst" type="button"></button>
            <button className="face" type="button"></button>
            <button className="pics" type="button"></button>
            <button className="vib" type="button"></button>
        </div>
        </div>
    
    </div>
  );
}

export default Header;