import React, { useState, useEffect } from 'react';

import jsonData from './data.json';
import './styles.css';

export const Task2 = () => {
    const [user, setUser] = useState(jsonData)
    const [sortedField, setSortedField] = useState('');
    const [selectName, setSelectName] = useState('');
    const [selectEmail, setSelectEmail] = useState('');

    const objectOption = require('./data.json')

    useEffect(() =>{
        setSortedField(user.map((value, key)=>(
            <tr key={key}>
                <td>{value.name}</td>
                <td>{value.email}</td>
            </tr>
        ))) 
    }, [user] )
  

    const optionName = objectOption.map((value, key)=>(
        <option
            key={key}
            value={value.name}
        >
        {value.name}
        </option>
        )
    )    

    const optionEmail = objectOption.map((value, key)=>(
        <option
            key={key}
            value={value.email}
        >
        {value.email}
        </option>
        )
    )

    if(selectName !== ''){
        const filter = user.filter(user => user.name === selectName)
        filter.sort(function(a, b){
            let emailA=a.email.toLowerCase(), emailB=b.email.toLowerCase()
            if (emailA < emailB) 
                return -1
            if (emailA > emailB)
                return 1
            return 0 
        })
        setUser(filter)
        setSelectName('')
    }
    if(selectEmail !== ''){
        const filter = user.filter(user => user.email === selectEmail)
        filter.sort(function(a, b){
            let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0 
        })
        setUser(filter)
        setSelectEmail('')
    }

    const dumpFilter = () =>{
        setUser(jsonData)
    }

    return(
        <div className='container'>
            <h1>Сортировка данных</h1>
            <table>
            <thead>
                <tr>
                    <th>
                        <select
                        name="listName"
                        defaultValue="selectName"
                        onChange={e => setSelectName(e.target.value)}
                        >
                            {optionName}
                        </select>
                    </th>
                    <th>
                        <select
                        name="listEmail"
                        defaultValue="selectEmail"
                        onChange={e => setSelectEmail(e.target.value)}
                        >
                            {optionEmail}
                        </select>
                    </th>
                </tr>
                </thead>
            <tbody>
                {sortedField}
            </tbody>
            </table>
            <button onClick = {dumpFilter}>Сбросить фильтр</button>
        </div> 
    )
}