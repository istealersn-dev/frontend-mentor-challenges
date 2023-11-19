import { StrengthProps } from "./types"
import styles from './styles/Strength.module.css'

export const Strength = ({status}: StrengthProps) => {
    return (
        <div className={styles.container}>
            Strength
            <div className={styles.status}>
                <span className={styles.statusmessage}>{status}</span>
                <div className={styles.statusboxes}>
                    <span id="1"></span>
                    <span id="2"></span>
                    <span id="3"></span>
                    <span id="4"></span>
                </div>
            </div>
        </div>
    )
}