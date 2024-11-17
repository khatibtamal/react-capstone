
import { Input } from "@chakra-ui/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calenderLogo from '../../../images/calendar.png';
import "./CustomDatePicker.css";

function CustomDatePicker(props) {
    return (
        <div className="custom-date-picker-container">
            <DatePicker
                id="date"
                name="date"
                wrapperClassName="react-datepicker-wrapper"
                selected={props.selected}
                onChange={props.changeCallback}
                customInput={<Input className="date-picker-custom-input" id="date" name="date" />} />
            <img src={calenderLogo} />
        </div>
    );
}

export default CustomDatePicker;