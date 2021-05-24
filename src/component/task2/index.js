import React, { useState, useEffect } from 'react';

import jsonData from './data.json';
import './styles.css';

export const Task2 = () => {
    const [user, setUser] = useState(jsonData)
    const [sortedField, setSortedField] = useState('');

    useEffect(() =>{
        console.log(user)
        setSortedField(user.data.map((value, key)=>(
            <tr key={key}>
                <td>{value.name}</td>
                <td>{value.email}</td>
            </tr>
        ))) 
    }, [user] )
  
    const letSortName = ()=> {
        user.data.sort(function(a, b){
        let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0 
        })
        setUser(user)
        console.log(user)
    }
    const letSortEmail = ()=> {
        user.data.sort(function(a, b){
            let emailA=a.email.toLowerCase(), emailB=b.email.toLowerCase()
            if (emailA < emailB) 
                return -1
            if (emailA > emailB)
                return 1
            return 0 
            })
        setUser(user)
        console.log(user)
    }


    return(
        <div className='container'>
            <h1>Сортировка данных</h1>
            <table>
            <thead>
                <tr>
                    <th onClick={letSortName}>Имя</th>
                    <th onClick={letSortEmail}>Email</th>
                </tr>
            </thead>
            <tbody>
                {sortedField}
            </tbody>
            </table>
        </div> 
    )
}