import {useState} from "react";
import {Select} from "./Select";


export default {
    title: 'Components/Select stories',
    component: Select,
}

export const WithValue = () => {
    let [selectValue, setSelectValue] = useState(1)

    const itemClick = (value: any) => {
        setSelectValue(value)
    }
    const dataArray = [{title: 'Minsk', value: 1}, {title: 'Kiev', value: 2}, {
        title: 'Warshava',
        value: 3
    }, {title: 'Vilnius', value: 4}]


    return <Select value={selectValue} items={dataArray} itemClick={itemClick}/>
}

export const WithoutValue = () => {
    let [selectValue, setSelectValue] = useState(null)

    const itemClick = (value: any) => {
        setSelectValue(value)
    }

    const dataArray = [{title: 'Minsk', value: 1}, {title: 'Kiev', value: 2}, {
        title: 'Warshava',
        value: 3
    }, {title: 'Vilnius', value: 4}]

    return <Select value={selectValue} items={dataArray} itemClick={itemClick}/>
}