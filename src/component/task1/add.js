import React, { useState, useEffect } from 'react';

import { listOption } from './list'

export const AddUnit = ({handleClick, valueInputOne, valueInputTwo, valueInputConvert, regInputLat, regInputCirilic, changeSelect, regInputNumber}) => {
    const nameLable = 'Выберите значение';
    const [isDisabled, setDisabled] = useState(true);

    //const newData = Object.entries(data)
    // console.log(data)

    useEffect(() =>{
       if (valueInputOne && valueInputTwo && valueInputConvert > 1) setDisabled(false)
    }, [valueInputOne, valueInputTwo, valueInputConvert] )

    // const handleClick = (e) => {
    //     e.preventDefault();
        
    //     //var data = require('./data.json');
    //       const request = {
    //         [valueInputOne]: {
    //             unit: valueInputOne,
    //             name: valueInputTwo,
    //             convert_to: {
    //             [selectOne]: valueInputConvert,
    //           },
    //         },
    //     }
    //     Object.assign(request, data);
    //     console.log(request)
    //     //console.log(data)
    //     setValueInputOne('');
    //     setValueInputTwo('');
    //     setValueInputConvert('')
    // }


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
                    {listOption}
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