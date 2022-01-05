import {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion,
}


export const UncollapsedMode = () => <Accordion title={'Some Items'}
                                                value={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']}
                                                onChange={action('collapsed true or false')} collapsed={false}/>
export const CollapsedMode = () => <Accordion title={'Some Items'}
                                              value={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']}
                                              onChange={action('collapsed true or false')}
                                              collapsed={true}/>
export const ChangeMode = () => {
    let [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion title={'Some Items'} value={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']}
                      collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}/>
}