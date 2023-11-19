"use client"

import styles from './styles/PwdGenForm.module.css'

import Checkbox from "./Checkbox";
import RangeSlider from "./RangeSlider";
import { Strength } from "./Strength";

export default function PwdGenForm() {
    return (
        <div className={styles.container}>
            <form>
                <input type="text" id="password" placeholder="P4$5W0rD!" className={styles.textInput}/>
                <div>
                    <RangeSlider id="rangeSlider" min={0} max={20} value={0} />
                    <div>
                        <Checkbox id="uppercase">Include uppercase letters</Checkbox>
                        <Checkbox id="lowercase">Include lowercase letters</Checkbox>
                        <Checkbox id="numbers">Include Numbers</Checkbox>
                        <Checkbox id="symbols">Include Symbols</Checkbox>
                    </div>
                </div>
                <Strength status="too weak"/>
                <div>
                    <button type="submit">Generate
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
                    </button>
                </div>
            </form>
        </div>
    )
};
