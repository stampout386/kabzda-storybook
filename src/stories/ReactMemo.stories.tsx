import React, {ChangeEvent, useMemo, useState} from "react";


const UsersOld = () => {
    return <div></div>
}

const Users = React.memo(UsersOld)


export const Example1 = () => {

    let [a, setA] = useState<number>(3);
    let [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {

            resultA = resultA * i
        }
        return resultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <div>
            <input value={a} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setA(+e.currentTarget.value)
            }}/>
            <input value={b} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setB(+e.currentTarget.value)
            }}/>
            <div>Result for a : {resultA}</div>
            <div>Result for b : {resultB}</div>
        </div>
    )
}


export const Example2 = () => {



    return (
        <div>
        </div>
    )
}


