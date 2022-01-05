import {useState} from "react";

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    let onstyle = {
        marginLeft: '10px',
        padding: '5px',
        width: '40px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        background: props.on ? 'green' : 'white'

    }

    let offstyle = {
        padding: '5px',
        width: '40px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        background: props.on ? 'white' : 'red'
    }

    let indicatorstyle = {
        marginLeft: '10px',
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        background: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onstyle} onClick={() => props.onChange(true)}>On</div>
            <div style={offstyle} onClick={() => props.onChange(false)}>Off</div>
            <div style={indicatorstyle}></div>
        </div>
    )
}