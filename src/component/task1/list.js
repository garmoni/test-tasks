import data from './data.json';

const newData = Object.entries(data)
export const listOption = newData.map(([key,value]) => 
        <option
            key={key}
            value={value.unit}
        >
            {value.name}
        </option>
    ) 