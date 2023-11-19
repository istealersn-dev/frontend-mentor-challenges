import {CheckboxProps} from './types'

export default function Checkbox({id, children}: CheckboxProps) {
  return (
    <div>
        <input type="checkbox" id={id} />
        <label htmlFor="">{children}</label>
    </div>
  )
}
