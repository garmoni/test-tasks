import React, { useState, useEffect } from 'react';

import data from './data.json';
// import { listOption } from './list'
import  { AddUnit } from './add';
import './styles.css';

export const Task1 = () => {
    const nameLable = 'Выберите значение';
    const [valueInput, setValueInput] = useState('');
    const [selectOne, setSelectOne] = useState(nameLable);
    const [selectSecond, setSelectSecond] = useState(nameLable);
    const [result, setResult] = useState('');
    const [valueInputOne, setValueInputOne] = useState('');
    const [valueInputTwo, setValueInputTwo] = useState('');
    const [valueInputConvert, setValueInputConvert] = useState('');
    const [selectOneAdd, setSelectOneAdd] = useState(nameLable);
    let numOne
    let numSecond
    const newData = Object.entries(data)

    useEffect(() =>{
        if (selectOne === 'Выберите значение' || selectSecond === 'Выберите значение') return
        else if(selectOne && selectSecond && valueInput ) {
            setResult(parseFloat((valueInput * data[numOne].convert_to[numSecond]).toFixed(2)))
        }
    }, [valueInput, selectOne, selectSecond, numOne, numSecond] )

    const listOption = newData.map(([key,value]) =>
        <option
            key={key}
            value={value.unit}
        >
            {value.name}
        </option>
    )

    

    const regInputLat = (e) =>{
        setValueInputOne(e.target.value.replace(/[^A-Za-z]/ig, ''))
    }

    const regInputCirilic = (e) =>{
        setValueInputTwo(e.target.value.replace(/[^А-яЁё]/g, ''))
    }

    const regInputNumber = (e) =>{
        setValueInputConvert(e.target.value.replace(',', '.').replace(/[^\d.]/g, "").replace(/\./, "x").replace(/\./g, "").replace(/x/, "."))
    }

    const changeSelect = (e) =>{
        setSelectOneAdd(e.target.value)
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        
          const request = {
            [valueInputOne]: {
                unit: valueInputOne,
                name: valueInputTwo,
                convert_to: {
                [selectOneAdd]: valueInputConvert,
              },
            },
        }
        Object.assign(request, data);
        console.log(request)
        setValueInputOne('');
        setValueInputTwo('');
        setValueInputConvert('')
    }

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
            <AddUnit 
                handleClick={handleClick} 
                valueInputOne={valueInputOne} 
                valueInputTwo={valueInputTwo} 
                valueInputConvert={valueInputConvert}
                regInputLat={regInputLat}
                regInputCirilic={regInputCirilic}
                changeSelect={changeSelect}
                regInputNumber={regInputNumber}
                />
        </div>
    )
}