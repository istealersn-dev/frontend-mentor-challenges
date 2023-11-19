export interface CheckboxProps {
    id: string;
    children: React.ReactNode
}

export interface RangeSliderProps {
    id: string
    min: number
    max: number
    value?: number
}

export interface StrengthProps {
    status: string
}