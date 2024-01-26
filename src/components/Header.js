import React, { useEffect } from 'react';
import '../css/style.css'; 

const Header = () => {
    useEffect(() => {
        // Обновление часов и даты
        function updateClockAndDate() {
          const clockElement = document.getElementById('clock');
          const dateElement = document.getElementById('date');
          const now = new Date();
          const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
          const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          clockElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
          dateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
        }
    
        // Установка интервала обновления часов и даты
        const intervalId = setInterval(updateClockAndDate, 1000);
        updateClockAndDate();
    
        // Очистка интервала при размонтировании компонента
        return () => {
          clearInterval(intervalId);
        };
      }, []);
    
      useEffect(() => {
        // Обработка кликов по пунктам меню
        const menuItems = document.querySelectorAll('ul#menu li');
        const handleMenuItemClick = (item) => {
          menuItems.forEach((menuItem) => {
            menuItem.classList.remove('active');
          });
          item.classList.add('active');
        };
    
        // Добавление обработчиков для каждого пункта меню
        menuItems.forEach((item) => {
          item.addEventListener('click', () => handleMenuItemClick(item));
        });
    
        // Очистка обработчиков при размонтировании компонента
        return () => {
          menuItems.forEach((item) => {
            item.removeEventListener('click', () => handleMenuItemClick(item));
          });
        };
      }, []);
    
  return (
    <div>

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