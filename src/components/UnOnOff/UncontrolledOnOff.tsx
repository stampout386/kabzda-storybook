import {useState} from "react";

type PropsType = {
    onChange: (on:boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: PropsType) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    let onstyle = {
        marginLeft: '10px',
        padding: '5px',
        width: '40px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        background: on ? 'green' : 'white'

    }

    let offstyle = {
        padding: '5px',
        width: '40px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        background: on ? 'white' : 'red'
    }

    let indicatorstyle = {
        marginLeft: '10px',
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        background: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onstyle} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div style={offstyle} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div style={indicatorstyle}></div>
        </div>
    )
}