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

