
import { useState } from 'react';
import 'react-clock/dist/Clock.css';
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import "./CustomTimePicker.css";

function CustomTimePicker(props) {
    const [time, setTime] = useState('10:00');

    const timeOnChage = (e) => {
        setTime(e);
    }

    return (
        <TimePicker
            className="time-picker-input"
            onChange={props.changeCallback}
            value={props.value}
        />
    );
}

export default CustomTimePicker;