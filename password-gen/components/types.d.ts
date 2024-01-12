import { ReactEventHandler } from "react"

export interface CheckboxProps {
    id: string
    checked: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    label: string
}

export interface RangeSliderProps {
    id: string
    min: number
    max: number
    value: number
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onValueChange?: (value:number) => void
}