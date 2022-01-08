import React from "react";

type AccordionPropsType = {
    title: string,
    value: object,
    collapsed: boolean
    onChange: () => void
}

export default function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody value={props.value}/>}
        </div>

    );

}

export function AccordionTitle(props: any) {

    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}

export function AccordionBody(props: any) {

    let liArr = props.value.map((item: any) => <li> {item}</li>)
    return (
        <ul>{liArr}</ul>
    )
}