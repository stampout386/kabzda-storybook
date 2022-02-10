import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every time')
        document.title = counter.toString()
    },)

    useEffect(() => {
        console.log('useEffect changeCounter')
        document.title = counter.toString()
    }, [counter])


    useEffect(() => {
        console.log('useEffect one time')
        document.title = counter.toString()
    }, [])

    return (
        <>
            Hello {counter} , {fake}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setFake(fake + 1)}>+</button>
        </>
    )
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)
    console.log('SetTimeoutExample')

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout')
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])


    useEffect(() => {
        setInterval(() => {
            console.log('tick ' + counter)
            setCounter((state) => state + 0.01)
        }, 1000)
    }, [])


    return (
        <>
            Hello counter: {counter} fake: {fake}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setFake(fake + 1)}>+</button>
        </>
    )
}


export const Clock = () => {


    let time = new Date();
    let hours = time.getHours()
    let minutes = time.getMinutes()
    // let seconds = time.getSeconds()
    let [seconds, setSeconds] = useState(time.getSeconds())

    useEffect(() => {
        setInterval(() => {
            console.log('tick')
            // @ts-ignore
            setSeconds((state: number) => {
                if (state < 59) {
                    return state + 1
                } else {
                    return 0
                }
            })
        }, 1000)
    }, [])

    return (
        <div>
            {hours}: {minutes} : {seconds}
        </div>
    )
}
