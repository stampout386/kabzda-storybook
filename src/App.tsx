import React, {useState} from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnAccordion} from "./components/UnAccordion/UnAccordion";

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

    return (
        <div className={'App'}>

            <Accordion title={'Menu'} collapsed={accordionCollapsed} value={[10, 9, 8, 7, 'six', 6, 5]}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            {/*<Accordion title={'Settings'} value={[10, 9, 8, 7, 'six', 6, 5]} collapsed={true}/>*/}
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UnAccordion title={'Menu'} value={['Home', 'About', 'Product', 'Blog', 'Contact']}/>
            <UnAccordion title={'Settings'} value={['Video', 'Audio', 'Game', 'Options']}/>

            {/*<UnRating/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string,
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
