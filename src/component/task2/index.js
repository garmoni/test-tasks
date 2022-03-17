import React, { useState, useEffect } from 'react';
import { TableHead } from './component/tableHead';
import { SortingOrder } from './sorting/sortingOrder';
import jsonData from './data.json';
import './styles.css';
import { UseFilter } from './sorting/useFilter';
import { TableRow } from './component/tableRow';

export const Task2 = () => {
    const [user, setUser] = useState(jsonData)
    const [selectName, setSelectName] = useState('');
    const [revert, setRevert] = useState(false)
    const [revertEmail, setRevertEmail] = useState(false)

    const objectOption = jsonData.filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i)

    const dumpFilter = () => {
        setUser(jsonData)
    }

    const useFilter = () => {
        if (selectName !== '') {
            const filter = UseFilter(jsonData, selectName)
            setUser(filter)
            setSelectName('')
        }
    }

    const sortRating = () => {
        let sort = SortingOrder(user, 'rating', revert);
        setUser(sort)
        setRevert(!revert)
    }
    const sortEmail = () => {
        let sort = SortingOrder(user, 'email', revertEmail)
        setUser(sort)
        setRevertEmail(!revertEmail)
    }

    const handleSelectName = (e) => {
        setSelectName(e.target.value)
    }

    return (
        <div className='container'>
            <h1>Сортировка данных</h1>
            <table>
                <thead>
                    <TableHead
                        sortEmail={sortEmail}
                        sortRating={sortRating}
                        useFilter={useFilter}
                        objectOption={objectOption}
                        handleSelectName={handleSelectName}
                    />
                </thead>
                <tbody>
                    <TableRow user={user}/>
                </tbody>
            </table>
            <button onClick={dumpFilter}>Сбросить фильтр</button>
        </div>
    )
}