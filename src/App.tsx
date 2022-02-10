import React, {ChangeEvent, useRef, useState} from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnAccordion} from "./components/UnAccordion/UnAccordion";
import {Select} from "./components/Select/Select";
import {Example1} from "./stories/ReactMemo.stories";
import {LikeUseCallback} from "./stories/UseMemoUseCallback.stories";
import {Example11} from "./stories/UseState.stories";

export type TodoListArrayType = {
    id: number,
    isDone: boolean,
    title: string
}


function App() {
    const todoListTitle_1: string = "what a want learn";
    const todoListTitle_2: string = "what a want bye";

    const todoListDate_1: Array<TodoListArrayType> = [
        {id: 1, isDone: true, title: 'HTML'},
        {id: 2, isDone: false, title: 'CSS'},
        {id: 3, isDone: true, title: 'CSS'},
    ]

    const todoListDate_2: Array<TodoListArrayType> = [
        {id: 1, isDone: true, title: 'Milk'},
        {id: 2, isDone: false, title: 'Bread'},
        {id: 3, isDone: false, title: 'Meat'},
    ]

    let [ratingValue, setRatingValue] = useState<number>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    let [selectValue, setSelectValue] = useState(1)

    const itemClick = (value: any) => {
        setSelectValue(value)
    }

    return (
        <div className={'App'}>
            {/*<TehTask/>*/}
            {/*<LikeUseCallback/>*/}
            <Example11/>
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Select value={selectValue} items={[{title: 'Minsk', value: 1}, {title: 'Kiev', value: 2}, {*/}
            {/*    title: 'Warshava',*/}
            {/*    value: 3*/}
            {/*}, {title: 'Vilnius', value: 4}]} itemClick={itemClick}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string,
}

const users = [{id: 1, name: 'Александр'}, {id: 2, name: 'Михаил'}, {id: 3, name: 'Володя'}]

const TehTask = () => {


    let [value, setValue] = useState('')
    let [usersValue, setUsersValue] = useState(users)

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        let newValue = usersValue.filter(item => item.name.toUpperCase().includes(value.toUpperCase()))
        setUsersValue(newValue)
        if (usersValue.length === 0) {
            setUsersValue(users)
        } else {
            return undefined
        }
        console.log(usersValue.length)
    }
    let userRef = useRef(users)
    console.log(userRef)

    const onClickButton = () => {
        console.log(usersValue)
        let newValue = usersValue.filter(item => item.name.toUpperCase().includes(value.toUpperCase()))
        setUsersValue(newValue)

    }
    let usersArray = usersValue.map(item => <li key={item.id + 1}>{item.name}</li>)
    return (
        <div>
            <input value={value} type="text" onChange={onChangeInput}/>
            <button onClick={onClickButton}>Click</button>
            <div>{usersArray}</div>
        </div>
    )
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
