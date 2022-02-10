import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    console.log('generateData')
    //какое либо долгое вычисление
    return 1
}

export const Example11 = () => {
    console.log('Example1')

    const changer = (state: number) => state + 1;
    // const initialState = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData)

    return (
        <>
            <button onClick={() => {
                setCounter(changer)
            }}>+
            </button>

            {counter}

        </>
    )
}

