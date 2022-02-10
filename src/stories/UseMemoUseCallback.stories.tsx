import React, {useCallback, useMemo, useState} from "react";

export const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS SECRET')
    return (
        <div>{props.users.map((item, i) => <div key={i}>item</div>)}</div>
    )
}

const Users = React.memo(UsersSecret);


export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['dim', 'mik', 'val', 'pit'])

    const newArray = useMemo(() => {
        const newArray = users.filter(item => item.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'sveta' + new Date().getDate()];
        setUsers(newUsers);
    }

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={() => {
                addUser()
            }}>add user
            </button>
            {counter}
            <Users users={newArray}/>
        </>

    )
}


export const BookSecret = (props: { book: Array<string>, addBock: () => void }) => {
    console.log('BookSecret')
    return (
        <div>
            <button onClick={props.addBock}>add book</button>
            {props.book.map((item, i) => <div key={i}>{item}</div>)}
        </div>
    )
}

const Book = React.memo(BookSecret);


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['pratchet', 'rouling', 'doil', 'bulgakov'])

    const newArray = useMemo(() => {
        const newArray = books.filter(item => item.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])

    // useMemo
    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'sapkovsky ' + new Date().getTime()];
            setBooks(newBooks);
        }
    }, [books])
    // useCallback
    const memoizedAddBook2 = useCallback(() => {
            const newBooks = [...books, 'sapkovsky ' + new Date().getTime()];
            setBooks(newBooks);

        }, [books]
    )

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {counter}
            <Book book={newArray} addBock={memoizedAddBook2}/>
        </>

    )
}