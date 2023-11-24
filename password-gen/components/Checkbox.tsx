import {CheckboxProps} from './types'
import styles from './styles/Checkbox.module.css'

export default function Checkbox({id, checked, onChange, label}: CheckboxProps) {
  return (
    <div className={styles.container}>
        <input type="checkbox" id={id} checked={checked} onChange={onChange}/>
        <label htmlFor={id}>{label}</label>
    </div>
  )
}
