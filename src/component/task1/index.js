import React, { useState } from 'react';

import data from './data.json';
import './styles.css';

export const Task1 = () => {
    const [valueInput, setValueInput] = useState('');
    const [selectOne, setSelectOne] = useState('');
    const [selectSecond, setSelectSecond] = useState('');
    const [result, setResult] = useState('')

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
    let numOne = 'm'
    let numSecond = 'm' 
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
    console.log(data[numOne].convert_to.numSecond)
    console.log(numSecond)
    const chahgeInput = () => {
        setResult(valueInput * data[numOne].convert_to.numSecond)
       //console.log(data[numOne].convert_to.numSecond)
    }
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
                        {console.log(selectOne)}
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
                            {console.log(selectSecond)}
                        {listOption}
                    </select>
                </label>
                <label>
                    Введите значение
                    <input
                    value={valueInput}
                    onChange={e => setValueInput(e.target.value.replace(/\D/, ''))}
                    />
                </label>
                <label>
                    Получаем
                    <input
                    value={result}
                    onChange={chahgeInput}
                    />
                </label>
            </div>
        </div>
    )
}