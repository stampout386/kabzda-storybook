type RatingPropsType = {
    value: number
    onClick: (value: number) => void
}

export default function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>

        </div>
    )
}

// export function UnRating() {
//
//     let [value, setValue] = useState(0)
//
//     let divStyle = {
//         display: 'inline-block',
//         marginLeft: '3px'
//     }
//
//     return (
//         <div>
//             <div style={divStyle} onClick={() => {
//                 setValue(1)
//             }}>
//                 <Star selected={value > 0}/>
//             </div>
//             <div style={divStyle} onClick={() => {
//                 setValue(2)
//             }}>
//                 <Star selected={value > 1}/>
//             </div>
//             <div style={divStyle} onClick={() => {
//                 setValue(3)
//             }}>
//                 <Star selected={value > 2}/>
//             </div>
//             <div style={divStyle} onClick={() => {
//                 setValue(4)
//             }}>
//                 <Star selected={value > 3}/>
//             </div>
//             <div style={divStyle} onClick={() => {
//                 setValue(5)
//             }}>
//                 <Star selected={value > 4}/>
//             </div>
//
//         </div>
//
//     )
// }

type StarPropsType = {
    selected: boolean,
    value: number,
    onClick: (value: number) => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.onClick(props.value)}>{props.selected ? <b>star </b> : 'star '}</span>

}

