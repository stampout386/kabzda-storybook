import {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default {
    title: 'components/Accordion stories',
    component: Accordion,
}


const Template: Story<AccordionPropsType> = (args: AccordionPropsType) => <Accordion {...args}/>;

const callbacksProps = {
    onChange: action('collapsed true or false'),
    onClick: action('onClick')
}

export const MenuUnCollapsedMode = Template.bind({})
MenuUnCollapsedMode.args = {
    ...callbacksProps,
    title: 'Some Items',
    value: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
    collapsed: false,

}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbacksProps,
    title: 'Some Items',
    value: [],
    collapsed: true,

}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    let [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion {...args} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}/>
}

ModeChanging.args = {
    title: 'Some Items',
    value: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
    onClick: action('onClick')
}