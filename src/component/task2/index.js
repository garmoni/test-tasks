import React, { useState, useEffect } from 'react';

import jsonData from './data.json';
import './styles.css';

export const Task2 = () => {
    const [user, setUser] = useState(jsonData)
    const [sortedField, setSortedField] = useState('');
    const [selectName, setSelectName] = useState('');

    const objectOption = jsonData.filter((v,i,a)=>a.findIndex(t=>(t.name === v.name))===i)

    useEffect(() =>{
        setSortedField(user.map((value, key)=>(
            <tr key={key}>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.rating}</td>
            </tr>
        ))) 
    }, [user] )
  
    const dumpFilter = () =>{
        setUser(jsonData)
    }
   
    const optionName = objectOption.map((value, key)=>(
        <option
            key={key}
            value={value.name}
        >
        {value.name}
        </option>
        )
    )    

    const useFilter = () => {
    if(selectName !== ''){
        const filter = jsonData.filter(user => user.name === selectName)
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
}

const sortRating = () => {
    const newUser = [...user]
    newUser.sort(function(a, b){
        let ratingA=a.rating, ratingB=b.rating
        if (ratingA < ratingB) 
            return -1
        if (ratingA > ratingB)
            return 1
        return 0 
    })   
    setUser(newUser)
}

const sortEmail = () => {
    const newUser = [...user]
    newUser.sort(function(a, b){
        let emailA=a.email.toLowerCase(), emailB=b.email.toLowerCase()
        if (emailA < emailB) 
            return -1
        if (emailA > emailB)
            return 1
        return 0 
    })
    setUser(newUser)
}

    return(
        <div className='container'>
            <h1>Сортировка данных</h1>
            <table>
            <thead>
                <tr>
                    <th>
                        <p>Имя</p>
                        <select
                        name="listName"
                        defaultValue="selectName"
                        onChange={e => setSelectName(e.target.value)}
                        onClick={useFilter}
                        >
                            {optionName}
                        </select>
                    </th>
                    <th onClick={sortEmail}>
                    <p>Email</p>
                    </th>
                    <th onClick={sortRating}>
                    <p>Рейтинг</p>
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