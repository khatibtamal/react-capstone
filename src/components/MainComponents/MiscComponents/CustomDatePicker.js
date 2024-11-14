
import { Input } from "@chakra-ui/input";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calenderLogo from '../../../images/calendar.png';
import "./CustomDatePicker.css";

function CustomDatePicker() {
    const [ date, setDate ] = useState(new Date());

    return (
        <div className="custom-date-picker-container">
            <DatePicker
                wrapperClassName="react-datepicker-wrapper"
                selected={date}
                customInput={<Input className="date-picker-custom-input" id="date" name="date" />} />
            <img src={calenderLogo} />
        </div>
    );
}

export default CustomDatePicker;