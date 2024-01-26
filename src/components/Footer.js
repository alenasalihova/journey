import React, { useEffect } from 'react';
import '../css/style.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="clear">
        <div id="box1">
          <ul>
            <li>ГЛАВНАЯ</li>
            <li>ГОРЯЧИЕ ТУРЫ</li>          
            <li>КОНТАКТЫ</li>
          </ul>
        </div>
        <hr />
        <div id="box2">Copyright &copy; Company 2018-2019</div>
      </div>
    </footer>
  );
}

export default Footer;