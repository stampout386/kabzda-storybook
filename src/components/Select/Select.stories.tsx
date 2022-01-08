import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";


export default {
    title: 'Components/Select stories',
    component: Select,
}

export const ChangeMode = () => {
    let [selectValue, setSelectValue] = useState(1)

    const itemClick = (value: any) => {
        setSelectValue(value)
    }


    return <Select value={selectValue} items={[{title: 'Minsk', value: 1}, {title: 'Kiev', value: 2}, {
        title: 'Warshava',
        value: 3
    }, {title: 'Vilnius', value: 4}]} itemClick={itemClick}/>
}
