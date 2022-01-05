import {useState} from "react"
import {Star} from "../Rating/Rating";

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UnRating(props: RatingPropsType) {

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    let divStyle = {
        display: 'inline-block',
        marginLeft: '3px'
    }

    return (
        <div>
            <div style={divStyle} onClick={() => {
                setValue(1);
                props.onChange(1)
            }}>
                <Star selected={value > 0} value={value} onClick={() => {
                    setValue(1);
                    props.onChange(1)
                }}/>
            </div>
            <div style={divStyle} onClick={() => {
                setValue(2);
                props.onChange(2)
            }}>
                <Star selected={value > 1} value={value} onClick={() => {
                    setValue(2);
                    props.onChange(2)
                }}/>
            </div>
            <div style={divStyle} onClick={() => {
                setValue(3);
                props.onChange(3)
            }}>
                <Star selected={value > 2} value={value} onClick={() => {
                    setValue(3);
                    props.onChange(3)
                }}/>
            </div>
            <div style={divStyle} onClick={() => {
                setValue(4);
                props.onChange(4)
            }}>
                <Star selected={value > 3} value={value} onClick={() => {
                    setValue(4);
                    props.onChange(4)
                }}/>
            </div>
            <div style={divStyle} onClick={() => {
                setValue(5);
                props.onChange(5)
            }}>
                <Star selected={value > 4} value={value} onClick={() => {
                    setValue(5);
                    props.onChange(5)
                }}/>
            </div>

        </div>

    )
}