import {UnAccordion} from "./UnAccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UnComponents/UnAccordionstories',
    component: UnAccordion,
}

const callback = action('Click')

export const ChangeMode = () => <UnAccordion title={'Some Items'}
                                             value={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']}
                                             onChange={callback}/>