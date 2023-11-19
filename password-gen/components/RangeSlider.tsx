import { useState } from 'react'
import {RangeSliderProps} from './types'

export default function RangeSlider({id, min, max, value}: RangeSliderProps) {

    const [sliderVal, setsliderVal] = useState(0)

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = parseInt(event.target.value, 10)
        setsliderVal(newVal)
    }

    return (
        <div>
            <div>
                <label htmlFor={id}>Character Length</label>
                <span>{sliderVal}</span>
            </div>
            <input id={id} type="range" min={min} max={max} value={sliderVal} onChange={handleSliderChange}/>
        </div>
    )
}