import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'ef338085-803a-45d3-9741-d81a508ad222',
    },

}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {
            title:
                "Mik todo"
        }, settings).then((res) => {
            setState(res.data);
        })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistID = 'f0522ea4-5bdb-4339-a7c6-f4aff7bf1d1a'
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistID}`, settings)
            .then(res => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'bded4f30-f87b-4277-ba56-abc757e085cd'
        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: 'REACT>>>>>>>>>'}, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}