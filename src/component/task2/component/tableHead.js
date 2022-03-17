import { OptionName } from './optionName'

export const TableHead = ({ handleSelectName, sortEmail, sortRating, useFilter, objectOption}) => {
    return (
        <>
            <tr>
                <th>
                    <p>Имя</p>
                    <select
                        name="listName"
                        defaultValue=""
                        onChange={handleSelectName}
                        onClick={useFilter}
                    >
                        <OptionName objectOption={objectOption} />
                    </select>
                </th>
                <th onClick={sortEmail}>
                    <p>Email</p>
                </th>
                <th onClick={sortRating}>
                    <p>Рейтинг</p>
                </th>
            </tr>
        </>
    );
}