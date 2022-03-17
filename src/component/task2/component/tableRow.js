import React, { useEffect, useState } from 'react';

export const TableRow = ({ user }) => {
    const [sortedField, setSortedField] = useState('');

    useEffect(() => {
        let userRow = user.map((value, key) => (
            <tr key={key}>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.rating}</td>
            </tr>
        ))
        setSortedField(userRow)
    }, [user])

    return (
        <>
            {sortedField}
        </>
    );
}