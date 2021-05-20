import React, { useState, useEffect } from 'react';

import data from './data.json';
import { listOption } from './list'
import  { AddUnit } from './add';
import './styles.css';

export const Task1 = () => {
    const nameLable = 'Выберите значение';
    const [valueInput, setValueInput] = useState('');
    const [selectOne, setSelectOne] = useState(nameLable);
    const [selectSecond, setSelectSecond] = useState(nameLable);
    const [result, setResult] = useState('');
    let numOne
    let numSecond

    useEffect(() =>{
        if (selectOne === 'Выберите значение' || selectSecond === 'Выберите значение') return
        else if(selectOne && selectSecond && valueInput ) {
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
                        <option>{nameLable}</option>
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
                            <option>{nameLable}</option>
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
                    Расчет
                    <input
                    defaultValue={result}
                    />
                </label>
            </div>
            <AddUnit />
        </div>
    )
}