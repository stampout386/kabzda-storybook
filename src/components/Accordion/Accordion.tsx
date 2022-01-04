import React, {useState} from "react";

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
type UnAccordionPropsType = {
    title: string
    value: object
}

export function UnAccordion(props: UnAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    let collapsedState = (collapsed: boolean) => {
        if (collapsed) {
            return false
        } else {
            return true
        }


    }

    return (
        <div>
            <div onClick={() => {
                setCollapsed(collapsedState)
            }}>
                <AccordionTitle title={props.title}/></div>
            {!collapsed && <AccordionBody value={props.value}/>}
        </div>

    );
}

function AccordionTitle(props: any) {

    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

function AccordionBody(props: any) {

    let liArr = props.value.map((item: any) => <li> {item}</li>)
    return (
        <ul>{liArr}</ul>
    )
}