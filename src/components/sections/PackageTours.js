import React, { useEffect } from 'react';
import style from '../../css/style.css'; 

export const PackageTours = () => {
   
  return (
    <div classNameName="wrap">
      <div classNameName="card">
      <div className="details">
                    <strong>ПАКЕТНЫЕ ТУРЫ</strong>
                </div>
                <form className="packageTours">
                    <label className="one">
                        <strong>КУДА</strong>
                        <select id="arrivalcity" name="arrivalcity">
                            <option>Анталия</option>
                            <option>Стамбул</option>
                            <option>Анкара</option>
                          </select>
                    </label>
                    <label className="one">
                        <strong>ОТКУДА</strong>
                        <select id="departcity" name="departcity">
                            <option>Киев</option>
                            <option>Одесса</option>
                            <option>Львов</option>
                          </select>
                    </label>
                    <label className="one">
                        <strong>ДАТА ВЫЛЕТА</strong>
                        <input type="date" id="date" name="date" />
                    </label>
                    <button type="submit" id="button">В ПУТЬ</button>
                </form>
      </div>
    </div>
  );
}

//export default PackageTours;