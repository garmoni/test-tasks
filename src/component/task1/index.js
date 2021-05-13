import React, { useState, useEffect } from 'react';

import data from './data.json';
import './styles.css';

export const Task1 = () => {
    const [valueInput, setValueInput] = useState('');
    const [selectOne, setSelectOne] = useState('');
    const [selectSecond, setSelectSecond] = useState('');
    const [result, setResult] = useState('');
    let numOne
    let numSecond

    useEffect(() =>{
        if(selectOne && selectSecond && valueInput) {
            setResult(parseFloat((valueInput * data[numOne].convert_to[numSecond]).toFixed(2)))
        }
    }, [valueInput, selectOne, selectSecond, numOne, numSecond] )

    const handleSelectChangeOne = (event) =>{
        setSelectOne(event.target.value);
    }

    const handleSelectChangeSecond = (event) =>{
        setSelectSecond(event.target.value);
    }
    const keyData = Object.keys(data)
    const newData = Object.entries(data)

    const listOption = newData.map(([key,value]) => 
        <option
            key={key}
            value={value.unit}
        >
            {value.name}
        </option>
    ) 
    keyData.forEach(function(item) {
        if(item === selectOne) {
            numOne = item
            return numOne
        } 
      
      })
      keyData.forEach(function(item) {
      if(item === selectSecond) {
        numSecond = item
        return numSecond
        } 
    })

    return (
        <div className='container'>
            <h3>Конвертор единиц измерения расстояния</h3>
            <div className='formWrap'>
                <label>
                    1 единица
                    <select
                        id="listOneSelect"
                        className="form-convector"
                        name="listOne"
                        defaultValue="selectOne"
                        onChange={handleSelectChangeOne}
                        >
                        <option>Выберите значение</option>
                        {listOption}
                    </select>
                </label>
                <label>
                    2 единица
                    <select
                        id="listSecondSelect"
                        className="form-convector"
                        name="listSecond"
                        defaultValue="selectSecond"
                        onChange={handleSelectChangeSecond}
                        >
                            <option>Выберите значение</option>
                        {listOption}
                    </select>
                </label>
                <label>
                    Введите значение
                    <input
                    value={valueInput}
                    onChange={e => setValueInput(e.target.value.replace(',', '.').replace(/[^\d.]/g, "").replace(/\./, "x").replace(/\./g, "").replace(/x/, "."))}
                    />
                </label>
                <label>
                    Получаем
                    <input
                    defaultValue={result}
                    />
                </label>
            </div>
        </div>
    )
}