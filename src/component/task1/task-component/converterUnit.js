export const ConverterUnit = ({list, result, valueInput, changeInputHandle, handleSelectChangeOne, handleSelectChangeSecond}) => {

    const nameLable = 'Выберите значение';

    return (
        <>
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
                        className='units-input'
                        value={valueInput}
                        onChange={changeInputHandle}
                    />
                </label>
                <label>
                    Расчет
                    <input
                        className='units-input'
                        defaultValue={!isNaN(result) ? result : 'не верные данные'}
                    />
                </label>
            </div>
        </>
    )
}