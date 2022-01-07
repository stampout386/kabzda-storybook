import React, {useState} from "react";
import {AccordionBody, AccordionTitle} from "../Accordion/Accordion";

type UnAccordionPropsType = {
    title: string
    value: object
    onChange?:()=>void
}

export function UnAccordion(props:UnAccordionPropsType) {

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