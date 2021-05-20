import React, { useState, useEffect } from 'react';

//import data from './data.json';
import { listOption } from './list'

export const AddUnit = () => {
    const [valueInputOne, setValueInputOne] = useState('');
    const [valueInputTwo, setValueInputTwo] = useState('');
    const [valueInputConvert, setValueInputConvert] = useState('');
    const [isDisabled, setDisabled] = useState(false);
    const nameLable = 'Выберите значение';

    //const newData = Object.entries(data)

    useEffect(() =>{
       if (valueInputOne && valueInputTwo) setDisabled(true)
    }, [valueInputOne, valueInputTwo] )

    const handleClick = () => {
        
    }


    return (
        <div>
            <h3>Добавить единицу растояния</h3>
            <div className="textAdd">Добавьте название (mm, yd, km) и имя единицы (Миллиметр, Ярд, Киллометр) или выберите добавленное значение</div>
            <form className='formWrap'>
            <label>
                Название
                <input
                value={valueInputOne}
                onChange={e => setValueInputOne(e.target.value.replace(/[^A-Za-z]/ig, ''))}
                />
            </label>
            <label>
                Имя
                <input
                value={valueInputTwo}
                onChange={e => setValueInputTwo(e.target.value.replace(/[^А-яЁё]/g, ''))}
                />
            </label>
            <label>
                Выберите
                <select
                    id="listOptionSelect"
                    className="form-convector"
                    defaultValue="selectOne"
                    disabled={isDisabled}
                    >
                    <option>{nameLable}</option>
                    {listOption}
                </select>
            </label>
            <label>
                C единицей
                <select
                    id="listAddSelect"
                    className="form-convector"
                    defaultValue="selectOne"
                    >
                    <option>{nameLable}</option>
                    {listOption}
                </select>
            </label>
            <label>
                Значение
                <input
                value={valueInputConvert}
                onChange={e => setValueInputConvert(e.target.value.replace(',', '.').replace(/[^\d.]/g, "").replace(/\./, "x").replace(/\./g, "").replace(/x/, "."))}
                />
            </label>
            <input 
                type="submit" 
                value="Добавить" 
                onClick={(e) => handleClick(e)}
            />
            </form>
        </div>
    )
}