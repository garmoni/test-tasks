import React, { useState } from 'react';
import jsonData from './data.json';

export const Task2 = () => {
 
    return(
        <div>
            <h1>Сортировка данных</h1>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {jsonData.map((index, key) => (
                <tr key={key}>
                    <td>{index.name}</td>
                    <td>{index.email}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div> 
    )
}