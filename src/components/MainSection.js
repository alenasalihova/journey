import React, { useEffect } from 'react';
import { PackageTours, AboutUs, HotTours, Contacts } from './sections';
//import AboutUs from './sections/AboutUs';
//import HotTours from './sections/HotTours';
//import Contacts from './sections/Contacts';
import $ from 'jquery';
import'../css/style.css'; 

const MainSection = () => {
    useEffect(() => {
        // Ваш JavaScript-код, например, код для скролла
        $(window).scroll(function () {
          if ($(window).scrollTop() > $(window).height() / 3) {
            $('.scrollToTop').toggleClass('showScrollTop', true);
          } else {
            $('.scrollToTop').removeClass('showScrollTop');
          }
        });
        return () => {
            // Очистка ресурсов или удаление обработчиков при размонтировании компонента
            // Этот блок выполнится при размонтировании компонента
            // Важно для предотвращения утечек памяти и нежелательного поведения
          };
        }, []);  // Пустой массив зависимостей означает, что эффект выполнится только при монтировании и размонтировании компонента
  return (
    <main>
        <PackageTours />
        <AboutUs />
        <HotTours />
        <Contacts />
        {<a class="scrollToTop" onclick="jQuery('html,body').animate({scrollTop:0}, 'slow');"><span class="fa fa-chevron-up">&#8593;</span></a>}
    </main>
  );
}

export default MainSection;