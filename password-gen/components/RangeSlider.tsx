import {RangeSliderProps} from './types'
import styles from './styles/RangeSlider.module.css'
import { useState } from 'react'

export default function RangeSlider({value, onChange, onValueChange, ...props}: RangeSliderProps) {

    return (
        <div className={styles.rangeSlider}>
            <div className={styles.container}>
                <label htmlFor={props.id}>Character Length</label>
                <span className={styles.sliderVal}>{value}</span>
            </div>
            <input className={styles.inputRange} id={props.id} type="range" min={props.min} max={props.max} value={value} onChange={onChange}/>
        </div>
    )
}