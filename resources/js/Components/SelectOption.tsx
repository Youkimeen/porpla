import React from 'react'
import {SelectStyled} from "../Design/Components/SelectionOptionDesign";

interface IOption<T> {
    key: number,
    value: T
}

interface ISelect<T> {
    option: IOption<T>[]
    defaultOption: string
}

interface ISelectOptionDesign {
    width: number,
    height: number,
    borderRadius?: number,
    color?: string,
    bgColor?: string
}

export default function SelectOption (
    {option, defaultOption, width, height, borderRadius = 10, color = "white", bgColor = "lightgray"}
        : ISelect<string | number> & ISelectOptionDesign)
{
    return (
        <SelectStyled
        width={width}
        height={height}
        borderRadius={borderRadius}
        color={color}
        bgColor={bgColor}
        className="focus:border-transparent focus:ring-0"
        >
            <option>{defaultOption}</option>
            {option.map(({key, value}) => (
                <option value={key}>{value}</option>
            ))}
        </SelectStyled>
    )
}
