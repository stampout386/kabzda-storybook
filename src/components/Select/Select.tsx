import {MouseEventHandler, useState} from "react";

type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    // onChange: () => void
    items: ItemsType[]
    itemClick: (value: any) => void
}


export const Select = (props: SelectPropsType) => {

    let [selectCollapsed, setSelectCollapsed] = useState<boolean>(true)

    let filterEl: any = props.items.find(item => item.value === props.value);
    let titleElement = filterEl.title


    return (
        <div>
            <div onClick={() => {
                setSelectCollapsed(!selectCollapsed)
            }}>
                {titleElement}

            </div>
            {!selectCollapsed && props.items.map(item => <div key={item.value}
                                                              onClick={() => {
                                                                  props.itemClick(item.value)
                                                                  setSelectCollapsed(!selectCollapsed)
                                                              }}>{item.title}</div>)}
        </div>
    )

}