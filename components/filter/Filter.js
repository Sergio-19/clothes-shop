import Select from "./Select"

const Filter = () => {

    return (
        <div className="filter__wrapper">
            <Select name = 'Сортировать' options = {['По возрастанию цены', 'По убыванию цены']}/>
            <Select name = 'Размер' options = {['Размер 1', 'Размер 2', 'Размер 3','Размер 4']}/>
            <Select name = 'Бренд' options = {['Бренд 1', 'Бренд 2', 'Бренд 3','Бренд 4']}/>
        </div>
    )
}


export default Filter