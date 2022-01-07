import React from "react";

export type AccordionPropsType = {
    title: string,
    value: object,
    collapsed: boolean
    onChange: () => void
    onClick: () => void
    /**
     *  optional Color is header text
     */
    color?: string
}

export default function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange} color={props.color}/>
            {!props.collapsed && <AccordionBody value={props.value}/>}
        </div>

    );

}

type AccordionTitlePropsType = {
    title: string
    color?: string
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 style={{color: props.color ? props.color : "black"}} onClick={(e) => props.onChange()}>{props.title} </h3>
    )
}

export function AccordionBody(props: any) {

    let liArr = props.value.map((item: any) => <li> {item}</li>)
    return (
        <ul>{liArr}</ul>
    )
}