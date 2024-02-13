'use client'

import type { DatePickerProps } from 'antd';
import { Button, DatePicker } from 'antd';

import './UserInput.scss'

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
}

export const UserInput = () => {
    return (
    <header>
        <form action="">
            <div className="userInput">
                <label htmlFor="date">Select a date:</label>
                <DatePicker id="date" onChange={onChange} /> 
            </div>
            <Button type='primary' htmlType='submit'>Submit</Button>
        </form>
    </header>
    )
}