import {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";


export default {
    title: 'Components/Accordion stories',
    component: Accordion,
}

const onClick = action('some item was clicked')

export const UncollapsedMode = () => <Accordion title={'Some Items'}
                                                items={[{title: 'Mik', value: 1}, {
                                                    title: 'Nick',
                                                    value: 2
                                                }, {title: 'Victor', value: 3}, {title: 'Valera', value: 4}]}
                                                onChange={action('collapsed true or false')} collapsed={false}
                                                onClick={onClick}/>
export const CollapsedMode = () => <Accordion title={'Some Items'}
                                              items={[{title: 'Mik', value: 1}, {
                                                  title: 'Nick',
                                                  value: 2
                                              }, {title: 'Victor', value: 3}, {title: 'Valera', value: 4}]}
                                              onChange={action('collapsed true or false')}
                                              collapsed={true} onClick={onClick}/>
export const ChangeMode = () => {
    let [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion title={'Some Items'} items={[{title: 'Mik', value: 1}, {title: 'Nick', value: 2}, {
        title: 'Victor',
        value: 3
    }, {title: 'Valera', value: 4}]}
                      collapsed={collapsed} onChange={() => setCollapsed(!collapsed)} onClick={onClick}/>
}