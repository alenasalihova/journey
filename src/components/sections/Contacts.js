import React, { useEffect } from 'react';
import '../../css/style.css'; 

export const Contacts = () => {
    //вывод сообщения при нажатии на номер телефона
    useEffect(() => { let phoneLink = document.getElementById("phoneLink");
phoneLink.addEventListener("click", function(event) {
    event.preventDefault();            
    alert("Свяжитесь с нами по нормеру +38 093 573 97 46!");
});
}, []); 
//переход на страницу для отправки письма
useEffect(() => { let emailLink = document.getElementById("emailLink");
emailLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./mailForm.html";
});
return () => {
    // Опционально: выполнить что-то при размонтировании компонента
    // ...
  };
}, []);
  return (
    <div id="contacts_all">
       <h1>Контакты турагенции LEVEL TRAVEL</h1>
            <div className="contacts_numbers">
                <a href="tel" id="phoneLink">+38 093 573 97 46</a>
                <a href="maito" id="emailLink">agency@leveltravel.com.ua</a>   
                </div>
            <h3>График работы</h3>
            <div className="contacts_schedule">
                <span>Пн-Пт:10:00-19:00</span>
                <span>Сб: 11:00-17:00</span>
                <span>Bc: выходной</span>
                </div>
            <h3>Адрес</h3>
            <div className="address">
                <address>34067, г. Чернигов ул.Космонавтов 28</address>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4967.536075502118!2d31.285380087295653!3d51.499124064552035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d54913d45a86b5%3A0xd2a02d1d8e0fbf00!2z0KbQo9Cc!5e0!3m2!1sru!2snl!4v1684603170997!5m2!1sru!2snl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
  );
}

//export default Contacts;