import React from 'react';
//import { ReactDOM } from 'react-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import './css/style.css';

function App() {
  return (
    <div className="App">
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
       <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
