import { useState } from 'react'
import {RangeSliderProps} from './types'
import styles from './styles/RangeSlider.module.css'

export default function RangeSlider({id, min, max, value}: RangeSliderProps) {

    const [sliderVal, setsliderVal] = useState(0)

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = parseInt(event.target.value, 10)
        setsliderVal(newVal)
    }

    return (
        <div className={styles.rangeSlider}>
            <div className={styles.container}>
                <label htmlFor={id}>Character Length</label>
                <span className={styles.sliderVal}>{sliderVal}</span>
            </div>
            <input className={styles.inputRange} id={id} type="range" min={min} max={max} value={sliderVal} onChange={handleSliderChange}/>
        </div>
    )
}