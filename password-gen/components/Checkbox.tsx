import {CheckboxProps} from './types'
import styles from './styles/Checkbox.module.css'

export default function Checkbox({id, children}: CheckboxProps) {
  return (
    <div className={styles.container}>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{children}</label>
    </div>
  )
}
