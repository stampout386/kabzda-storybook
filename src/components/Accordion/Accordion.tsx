import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string,
    items: ItemType[],
    collapsed: boolean
    onChange: () => void
    onClick: (value: any) => void
}


export default function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>

    );

}

type AccordionTitlePropsType = {
    title: string,
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[],
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {

    let itemsArr = props.items.map((item, index) => {
        return <li onClick={() => props.onClick(item.value)} key={index}>{item.title}</li>
    })
    return (
        <ul>{itemsArr}</ul>
    )
}