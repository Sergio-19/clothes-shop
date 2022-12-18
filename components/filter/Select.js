
const Select = ({name, options}) => {

    return (
        <select className = 'filter__select'>
            <option value = ''>{name}</option>
            {options.map((option, i)=> {
                return (
                    <option key = {i}>{option}</option>
                )
            })}

        </select>
    )
}


export default Select