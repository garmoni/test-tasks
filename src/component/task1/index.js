import React, { useState, useEffect } from 'react';

import jsonData from './data.json';
import { ConverterUnit } from './task-component/converterUnit';
import { AddUnit } from './task-component/addUnit';
import './styles.css';

export const Task1 = () => {
    const LocalData = !JSON.parse(localStorage.getItem('data')) ? jsonData : JSON.parse(localStorage.getItem('data'));
    const nameLable = 'Выберите значение';
    const [data, setData] = useState(LocalData)
    const [valueInput, setValueInput] = useState('');
    const [selectOne, setSelectOne] = useState(nameLable);
    const [selectSecond, setSelectSecond] = useState(nameLable);
    const [result, setResult] = useState('');
    const [valueInputOne, setValueInputOne] = useState('');
    const [valueInputTwo, setValueInputTwo] = useState('');
    const [valueInputConvert, setValueInputConvert] = useState('');
    const [selectOneAdd, setSelectOneAdd] = useState(nameLable);
    const [list, setList] = useState('')
    let numOne
    let numSecond
    let request

    useEffect(() => {
        if (selectOne === 'Выберите значение' || selectSecond === 'Выберите значение') return
        else if (selectOne && selectSecond && valueInput) {
            setResult(parseFloat((valueInput * data[numOne].convert_to[numSecond]).toFixed(2)))
        }
    }, [data, valueInput, selectOne, selectSecond, numOne, numSecond])

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    useEffect(() => {
        const newData = Object.entries(data)
        setList(newData.map(([key, value]) =>
            <option
                key={key}
                value={value.unit}
            >
                {value.name}
            </option>
        ))
        setResult('')
    }, [data])

    const regInputLat = (e) => {
        setValueInputOne(e.target.value.replace(/[^A-Za-z]/ig, ''))
    }

    const regInputCirilic = (e) => {
        setValueInputTwo(e.target.value.replace(/[^А-яЁё]/g, ''))
    }

    const regInputNumber = (e) => {
        setValueInputConvert(e.target.value.replace(',', '.').replace(/[^\d.]/g, "").replace(/\./, "x").replace(/\./g, "").replace(/x/, "."))
    }

    const changeSelect = (e) => {
        setSelectOneAdd(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();

        if (Object.keys(data).includes(valueInputOne)){
            setValueInputTwo('');
            setValueInputConvert('')
            return setValueInputOne('Такое название уже есть');   
        }
        else {
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
            setValueInputTwo('');
            setValueInputConvert('')
            setValueInputOne('');
        }
    }

    const handleSelectChangeOne = (e) => {
        setSelectOne(e.target.value);
    }

    const handleSelectChangeSecond = (e) => {
        setSelectSecond(e.target.value);
    }

    const changeInputHandle = (e) => {
        setValueInput(e.target.value.replace(',', '.').replace(/[^\d.]/g, "").replace(/\./, "x").replace(/\./g, "").replace(/x/, "."))
    }
    const keyData = Object.keys(data)

    keyData.forEach(function (item) {
        if (item === selectOne) {
            numOne = item
            return numOne
        }
    })
    keyData.forEach(function (item) {
        if (item === selectSecond) {
            numSecond = item
            return numSecond
        }
    })

    return (
        <div className='container'>
            <ConverterUnit
                handleSelectChangeOne={handleSelectChangeOne}
                handleSelectChangeSecond={handleSelectChangeSecond}
                changeInputHandle={changeInputHandle}
                valueInput={valueInput}
                list={list}
                result={result}
            />
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
