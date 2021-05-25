import React, { useState, useEffect } from 'react';

import jsonData from './data.json';
import  { AddUnit } from './add';
import './styles.css';

export const Task1 = () => {
    
    const nameLable = 'Выберите значение';
    const [data,setData] = useState(jsonData)
    const [valueInput, setValueInput] = useState('');
    const [selectOne, setSelectOne] = useState(nameLable);
    const [selectSecond, setSelectSecond] = useState(nameLable);
    const [result, setResult] = useState('');
    const [valueInputOne, setValueInputOne] = useState('');
    const [valueInputTwo, setValueInputTwo] = useState('');
    const [valueInputConvert, setValueInputConvert] = useState('');
    const [selectOneAdd, setSelectOneAdd] = useState(nameLable);
    let [list, setList] = useState('')
    let numOne
    let numSecond  
    let request  

    useEffect(() =>{
        if (selectOne === 'Выберите значение' || selectSecond === 'Выберите значение') return
        else if(selectOne && selectSecond && valueInput ) {
            setResult(parseFloat((valueInput * data[numOne].convert_to[numSecond]).toFixed(2)))
        }
    }, [data, valueInput, selectOne, selectSecond, numOne, numSecond] )


    useEffect(() =>{
        const newData = Object.entries(data)
        setList(newData.map(([key,value]) =>
        <option
            key={key}
            value={value.unit}
        >
            {value.name}
        </option>
        ))
        setResult('')
    }, [data] )
    

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
        
          request = {
            [valueInputOne]: {
                unit: valueInputOne,
                name: valueInputTwo,
                convert_to: {
                [selectOneAdd]: valueInputConvert,
                [valueInputOne]: 1.0,
              },
            },
        }
        Object.assign(request, data);
        setData(request)
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
                        {list}
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
                        {list}
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
                list={list}
                />
        </div>
    )
}
