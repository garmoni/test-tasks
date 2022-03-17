
export const OptionName = ({ objectOption }) => {
    return (
        <>
            {objectOption.map((value, key) => (
                <option
                    key={key}
                    value={value.name}
                >
                    {value.name}
                </option>
            )
            )}
        </>
    )
}