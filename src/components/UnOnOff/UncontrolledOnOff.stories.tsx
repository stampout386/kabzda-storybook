import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from './UncontrolledOnOff'


export default {
    title: 'UnComponents/UncontrolledOnOff stories',
    component: UncontrolledOnOff,
}

const callback = action('on/off')

export const OnMode = () => <UncontrolledOnOff onChange={callback} defaultOn={true}/>
export const OffMode = () => <UncontrolledOnOff onChange={callback} defaultOn={false}/>
