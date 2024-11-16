
import { useState } from 'react';
import 'react-clock/dist/Clock.css';
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import "./CustomTimePicker.css";

function CustomTimePicker() {
    const [time, setTime] = useState('10:00');

    const timeOnChage = (e) => {
        setTime(e);
    }

    return (
        <TimePicker
            className="time-picker-input"
            onChange={timeOnChage}
            value={time}
        />
    );
}

export default CustomTimePicker;