import {MouseEventHandler, useState, KeyboardEvent} from "react";
import s from './Select.module.css'

type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    items: ItemsType[]
    itemClick: (value: any) => void
}


export const Select = (props: SelectPropsType) => {

    let [active, setActive] = useState<boolean>(false)
    let [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const hoveredItem = props.items.find(item => item.value === hoveredElementValue)
    const selectedItem = props.items.find(item => item.value === props.value);
    const onclickCollapsed = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.itemClick(value)
        setActive(!active)
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hoveredElementValue) {
                if (props.items[i + 1]) {
                    if (e.key === 'ArrowDown') {
                        setHoveredElementValue(props.items[i + 1].value)
                        props.itemClick(props.items[i + 1].value)
                        break;
                    }
                }
                if (props.items[i - 1]) {
                    if (e.key === 'ArrowUp') {
                        setHoveredElementValue(props.items[i - 1].value)
                        props.itemClick(props.items[i - 1].value)
                        return
                    }
                }
            }
        }
        if (!selectedItem) {
            props.itemClick(props.items[0].value)
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={onclickCollapsed}>{selectedItem && selectedItem.title}</span>
                <div className={s.items}>
                    {active && props.items.map(item => <div
                        onMouseEnter={() =>
                            setHoveredElementValue(item.value)
                        }
                        className={s.item + ' ' + (hoveredItem === item ? s.selected : '')}
                        key={item.value}
                        onClick={() => {
                            onItemClick(item.value)
                        }}>{item.title}
                    </div>)}
                </div>
            </div>
        </>
    )

}