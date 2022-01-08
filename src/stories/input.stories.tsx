import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Input',
    // component: Input,
}


export const UncontrolledInput = () => <input/>;

export const TrackValueInput = () => {
    let [value, setValue] = useState('')
    const onchange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <>  <input onChange={onchange}/> - {value}   </>
};

export const GetValueByButtonPress = () => {
    let [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <div>
        <button onClick={save}>save
        </button>
        <input ref={inputRef}/> actual value - {value}

    </div>
};

export const ControlledInput = () => {
    let [parentValue, setParentValue] = useState('');
    const onchange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
    return <><input value={parentValue} onChange={onchange}/> - {parentValue}</>
};

export const ControlledCheckbox = () => {
    let [parentValue, setParentValue] = useState(true);
    const onchange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)
    return <><input type='checkbox' checked={parentValue} onChange={onchange}/> - {parentValue} </>
}
export const ControlledSelect = () => {
    let [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onchange = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)
    return <select value={parentValue} onChange={onchange}>
        <option>none</option>
        <option value={1}>Minsk</option>
        <option value={2}>Moscow</option>
        <option value={3}>Kiev</option>
    </select>
}
