import React, { useEffect } from 'react';
import $ from 'jquery';
import style from '../../css/style.css'; 

export const HotTours = () => {
    useEffect(() => {
        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                items: 2,
                loop: true
            });
          });
        return () => {
          
        };
      }, []);
  return (
    <div id="box4">
            <h1>Горячие туры</h1>

            <div id="customers-testimonials" className="owl-carousel owl-theme">
                <div className="item">
                    <div className="hotel1">
                        <img src="./img/booking4842_1.png" alt="FUN" className="FUN" />
                        <div className="text"><h3>FUN &amp; SUN FAMILY Club</h3>
                        <span>Кипр, Айя-Напа 4 звезды</span>
                        <ul className="services">
                            <li><img src="./img/календарь.png" alt="Календарь" className="icons" /> с 27.05 по 04.06 (8 ночей)</li>
                            <li><img src="./img/выезд.png" alt="Выезд" className="icons" /> Виезд с Киева</li>
                            <li><img src="./img/еда.png" alt="Еда" className="icons" /> Завтрак + ужин</li>
                        </ul>
                        <hr></hr>
                        <h2>25 785 грн</h2>
                        <span>за 2 человек</span>
                        <button type="submit" id="details">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="hotel2">
                        <img src="./img/200466_1975857182.png" alt="Roma" className="FUN" />
                        <div className="text"><h3>Imperial sunland resort</h3>
                        <span>Италия, Рим</span>
                        <ul className="services">
                            <li><img src="./img/календарь.png" alt="Календарь" className="icons" /> с 24.05 по 01.06 (8 ночей)</li>
                            <li><img src="./img/выезд.png" alt="Выезд" className="icons" /> Виезд с Киева</li>
                            <li><img src="./img/еда.png" alt="Еда" className="icons" /> Завтрак</li>
                        </ul>
                        <hr></hr>
                        <h2>20 368 грн</h2>
                        <span>за 2 человек</span>
                        <button type="submit" id="details">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="hotel3">
                        <img src="./img/192282_699037272.png" alt="Turk" className="FUN" />
                        <div className="text"><h3>Marti Myra 5 звезд</h3>
                        <span>Турцыя, Кемер</span>
                        <ul className="services">
                            <li><img src="./img/календарь.png" alt="Календарь" className="icons" /> с 29.05 по 05.06 (7 ночей)</li>
                            <li><img src="./img/выезд.png" alt="Выезд" className="icons" /> Виезд со Львова</li>
                            <li><img src="./img/еда.png" alt="Еда" className="icons" /> все включено</li>
                        </ul>
                        <hr></hr>
                        <h2>30 642 грн</h2>
                        <span>за 2 человек</span>
                        <button type="submit" id="details">Подробнее</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="hotel4">
                        <img src="./img/image-05-b1.png" alt="Turkiz" className="FUN" />
                        <div className="text"><h3>Sentido Orka Lotus 5 звезд</h3>
                        <span>Турцыя, Мармарис</span>
                        <ul className="services">
                            <li><img src="./img/календарь.png" alt="Календарь" className="icons" /> с 03.06 по 09.06 (7 ночей)</li>
                            <li><img src="./img/выезд.png" alt="Выезд" className="icons" /> Виезд со Львова</li>
                            <li><img src="./img/еда.png" alt="Еда" className="icons" /> все включено</li>
                        </ul>
                        <hr></hr>
                        <h2>33 578 грн</h2>
                        <span>за 2 человек</span>
                        <button type="submit" id="details">Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

//export default HotTours;