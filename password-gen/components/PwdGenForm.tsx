"use client";

import styles from "./styles/PwdGenForm.module.css";

import Checkbox from "./Checkbox";
import RangeSlider from "./RangeSlider";
import { Strength } from "./Strength";
import { useState } from "react";

export default function PwdGenForm() {
  // Define useState to capture the checkbox states
  const [checkboxState, setcheckboxState] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const trueCount = Object.values(checkboxState).filter(
    (val) => val === true
  ).length;

  return (
    <div className={styles.container}>
      <form className={styles.frmcontainer}>
        <div className={styles.pwdText}>
          <input
            type="text"
            id="password"
            placeholder="P4$5W0rD!"
            className={styles.textInput}
            disabled
          />
          <svg
            width="21"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
          >
            <path
              d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
              fill="#A4FFAF"
            />
          </svg>
        </div>
        <div className={styles.pwdCriteria}>
          <RangeSlider id="rangeSlider" min={0} max={20} value={0} />
          <div className={styles.checkboxes}>
            <Checkbox
              id="uppercase"
              checked={checkboxState.uppercase}
              onChange={() =>
                setcheckboxState((current) => ({
                  ...current,
                  uppercase: !current.uppercase,
                }))
              }
              label="Include uppercase letters"
            />
            <Checkbox
              id="lowercase"
              checked={checkboxState.lowercase}
              label="Include lowercase letters"
              onChange={() =>
                setcheckboxState((current) => ({
                  ...current,
                  lowercase: !current.lowercase,
                }))
              }
            />
            <Checkbox
              id="numbers"
              label="Include Numbers"
              checked={checkboxState.numbers}
              onChange={() =>
                setcheckboxState((current) => ({
                  ...current,
                  numbers: !current.numbers,
                }))
              }
            />
            <Checkbox
              id="symbols"
              label="Include Symbols"
              checked={checkboxState.symbols}
              onChange={() =>
                setcheckboxState((current) => ({
                  ...current,
                  symbols: !current.symbols,
                }))
              }
            />
          </div>
          <Strength strength={trueCount} />
          <div className={styles.btn}>
            <button type="submit">Generate</button>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#24232C"
                d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
}
