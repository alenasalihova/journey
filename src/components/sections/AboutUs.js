import React, { useEffect } from 'react';
import '../../css/style.css';

export const AboutUs = () => {

  return (
    <div id="aboutus">
      <div classNameName="block1">
      <div className="block1">
                <h1>О нас</h1>
                <p>Уважаемые любители путешествовать, Мы рады Вас приветствовать 
                    в нашем новом офисе Сети Туристических Агентств «Level travel»,  
                    который расположен в историческом центре города Чернигова!</p>
                <p>Что такое путешествие? Для Нас, это то, что способно дарить 
                    людям новые незабываемые впечатления и позитивные эмоции. 
                    Находясь в другой стране, мы попадаем в иной, не привычный 
                    для нас мир, в другие условия природы, быта, общества. 
                    Мы впитываем в себя все особенности мест, где путешествуем, 
                    и это то, что с нами остается на всю жизнь.</p>
                <p>Наши положительные воспоминания - это 
                    уникальная возможность проживать некоторые моменты нашей жизни 
                    вновь, испытывая те же чувства и эмоции. И не важно, какое 
                    направление в этот раз Вы выберете, каждый миг Вашего 
                    путешествия будет иной и не забываемый. Будь-то морской 
                    курорт, на котором вы наслаждаетесь морем, пляжем и воздухом; 
                    будь-то страна, обогащающая наш культурный уровень; будь то 
                    горнолыжный курорт, где Вы проведете активный отдых и получите 
                    дозу адреналин. Абсолютно любая поездка подарит Вам 
                    незабываемые ощущения и это ощущения счастья, которое будет 
                    еще долго «заряжать» Вас в серых рабочих буднях! Мы любим и 
                    ценим своих клиентов, каждый турист для нас особенный и к 
                    каждому туристу мы подберем индивидуальный подход! Опытные 
                    менеджеры подберут для Вас именно Ваш незабываемый тур, а 
                    также помогут в составлении индивидуальных маршрутов, 
                    посоветуют где весело отдохнуть с друзьями, провести медовый 
                    месяц, увидеть экзотические странны и мировые святыни, или 
                    погреться на теплом морском берегу под ласковыми лучами 
                    солнца.</p>
                <p>Мы предоставляем Вам качественный сервис обслуживания!
                </p>
            </div>
      </div>
      <div classNameName="weather">
      <h2 id="city" className="city" contenteditable="true"></h2>
                <div className="box">
                    <div className="imge">
                        <img src="" alt="Weather Icon" id="weather-icon" />
                    </div>
                    <div className="info">
                        <div id="temperature" className="temperature"></div>
                        <div id="weather-description" className="weather-description"></div>
                        <div id="wind-speed" className="wind-speed"></div>
                        <div id="precipitation" className="precipitation"></div>
                    </div>
                </div>
      </div>
    </div>
  );
}

//export default AboutUs;