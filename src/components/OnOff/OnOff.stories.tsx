import {OnOff} from "./OnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Components/OnOff stories',
    component: OnOff,
}


export const OnMode = () => <OnOff on={true} onChange={action('on or off Click')}/>
export const OffMode = () => <OnOff on={false} onChange={action('on or off Click')}/>
export const ModeChanging = () => {
    const [on, setOn] = useState(false)
    return <OnOff on={on} onChange={setOn}/>

}