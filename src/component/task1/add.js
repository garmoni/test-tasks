import React, { useState, useEffect } from 'react';

export const AddUnit = ({handleClick, valueInputOne, valueInputTwo, valueInputConvert, regInputLat, regInputCirilic, changeSelect, regInputNumber, list}) => {
    const nameLable = 'Выберите значение';
    const [isDisabled, setDisabled] = useState(true);

    useEffect(() =>{
       if (valueInputOne && valueInputTwo && valueInputConvert > 0) setDisabled(false)
    }, [valueInputOne, valueInputTwo, valueInputConvert] )

    return (
        <div>
            <h3>Добавить единицу растояния</h3>
            <div className="textAdd">Добавьте название (mm, yd, km) и имя единицы (Миллиметр, Ярд, Киллометр) или выберите добавленное значение</div>
            <form className='formWrap' onSubmit={handleClick}>
            <label>
                Название
                <input
                value={valueInputOne}
                onChange={regInputLat}
                />
            </label>
            <label>
                Имя
                <input
                value={valueInputTwo}
                onChange={regInputCirilic}
                />
            </label>
            <label>
                C единицей
                <select
                    id="listAddSelect"
                    className="form-convector"
                    defaultValue="selectOne"
                    onChange={changeSelect}
                    >
                    <option>{nameLable}</option>
                    {list}
                </select>
            </label>
            <label>
                Значение
                <input
                value={valueInputConvert}
                onChange={regInputNumber}
                />
            </label>
            <button 
                disabled={isDisabled}
                type="submit" 
                value="Добавить" 
            >Добавить</button>
            </form>
        </div>
    )
}