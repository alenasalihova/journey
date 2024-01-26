import React, { useEffect } from 'react';
import style from '../css/style.css'; 

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
    <div className="first">
      <a href="#"><img src="img/homa.png" alt="logo" className="logo" /></a>
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
  );
}

export default Header;