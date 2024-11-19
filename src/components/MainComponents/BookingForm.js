
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useFormik } from "formik";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSearchParams } from "react-router-dom";
import * as Yup from 'yup';
import clockIcon from '../../images/clock.png';
import occassionLogo from '../../images/occassion_logo.png';
import validInputIcon from '../../images/valid_input.png';
import { getTodaysDate, getTwoWeeksAdvanceDate, getYesterdayDate } from "../../utils/utility";
import './BookingForm.css';
import OccassionDropDownMenu from "./MiscComponents/OccassionDropDownMenu";
import TimeDropDownMenu from "./MiscComponents/TimeDropDownMenu";

function BookingForm(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [date, setDate] = useState(getTodaysDate());

    const availableTimes = ['11:30', '12:00', '12:30', '13:00', '13:30',
        '14:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
    const availableTimesPattern = new RegExp(availableTimes.join('|'));
    const phoneNumPattern = /^\d{10}$/;
    const occasions = ['none', 'Birthdays', 'Anniversaries', 'Engagements'];
    const dropDownMenuItems = ['Birthdays', 'Anniversaries', 'Engagements'];

    const formik = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                date: date,
                time: 'none',
                guests: 1,
                occassion: occasions[0],
            },
            validationSchema: Yup.object({
                firstName: Yup.string().required('Required').min(1, 'Must be at least 1 character').max(20, 'Maximum 20 characters'),
                lastName: Yup.string().required('Required').min(1, 'Must be at least 1 character').max(20, 'Maximum 20 characters'),
                email: Yup.string().email("Invalid email address").required("Required"),
                phone: Yup.string().matches(phoneNumPattern, "Can only be 10 digits.").required('Required'),
                guests: Yup.number().required('Required').min(1, 'Must be at least 1').max(10, 'Must be 10 or less'),
                date: Yup.date("Invalid Date").min(getYesterdayDate(), "Cannot book before today").max(getTwoWeeksAdvanceDate(), "Max 2 weeks advance booking").required('Required'),
                time: Yup.string().matches(availableTimesPattern, "Select from available time.").required('Required'),
            }),
            onSubmit: values => {
                console.log(values);
                props.dispatch({
                    booking: {
                        date: values.date,
                        time: values.time
                    }
                });
                setSearchParams({ booking: 'success',
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    phone: values.phone,
                    date: values.date,
                    time: values.time,
                    guests: values.guests,
                    occassion: values.occassion
                });
            }
        }
    );

    const errorComponent = (touched, errors) => {
        if (touched) {
            if (errors) {
                return <FormErrorMessage className="validation-message">{errors}</FormErrorMessage>
            }
            else {
                return <img src={validInputIcon} width={35} height={30}/>
            }
        }
        else {
            return <></>
        }
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
        }}>
            <div>
                <h1>Reserve a table</h1>
            </div>
            <div>
                <FormControl className="firstNameContainer" isInvalid={formik.touched.firstName && formik.errors.firstName}>
                    <div className="inputArea">
                        <FormLabel htmlFor="firstName">First Name:</FormLabel>
                        <Input
                            id="firstName"
                            name="firstName"
                            onChange={formik.handleChange}
                            {...formik.getFieldProps('firstName')}
                        />
                    </div>
                    <div>{errorComponent(formik.touched.firstName, formik.errors.firstName)}</div>
                </FormControl>
                <FormControl className="guestsContainer" isInvalid={formik.touched.guests && formik.errors.guests}>
                    <div className="inputArea">
                        <FormLabel htmlFor="guests">No of Diners:</FormLabel>
                        <Input
                            id="guests"
                            name="guests"
                            type="number"
                            onChange={formik.handleChange}
                            {...formik.getFieldProps('guests')}
                        />
                    </div>
                    <div>{errorComponent(formik.touched.guests, formik.errors.guests)}</div>
                </FormControl>
            </div>

            <div>
                <FormControl className="lastNameContainer" isInvalid={formik.touched.lastName && formik.errors.lastName}>
                    <div className="inputArea">
                        <FormLabel htmlFor="lastName">Last Name:</FormLabel>
                        <Input
                            id="lastName"
                            name="lastName"
                            onChange={formik.handleChange}
                            {...formik.getFieldProps('lastName')}
                        />
                    </div>
                    <div>{errorComponent(formik.touched.lastName, formik.errors.lastName)}</div>
                </FormControl>
                <FormControl className="dateContainer" isInvalid={formik.touched.date && formik.errors.date}>
                    <div className="inputArea">
                        <FormLabel htmlFor="date">Date:</FormLabel>
                        <DatePicker
                            showIcon={true}
                            calendarIconClassName="date-picker-calendar-icon"
                            wrapperClassName="react-datepicker-wrapper"
                            selected={date}
                            minDate={getTodaysDate()}
                            maxDate={getTwoWeeksAdvanceDate()}
                            onChange={(e) => {
                                formik.setFieldValue('date', e);
                                formik.touched.date = true;
                                setDate(e);
                            }}
                            customInput={<Input className="date-picker-custom-input"  />}
                        />
                    </div>
                    <div>{errorComponent(formik.touched.date, formik.errors.date)}</div>
                </FormControl>
            </div>
            
            <div>
                <FormControl className="emailContainer" isInvalid={formik.touched.email && formik.errors.email}>
                    <div className="inputArea">
                        <FormLabel htmlFor="email">Email:</FormLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            {...formik.getFieldProps('email')}
                        />
                    </div>
                    <div>{errorComponent(formik.touched.email, formik.errors.email)}</div>
                </FormControl>
                <FormControl className="timeContainer" isInvalid={formik.touched.time && formik.errors.time}>
                    <div className="inputArea">
                        <TimeDropDownMenu dropDownIcon={ clockIcon }
                            menuButtonText='Time'
                            availableTimesState={ props.availableTimesState }
                            selectedDate={ date }
                            dropDownMenuCallback={ (e) => {
                                formik.touched.time = true;
                                formik.setFieldValue('time', e);
                            } }
                        />
                    </div>
                    <div>{errorComponent(formik.touched.time, formik.errors.time)}</div>
                </FormControl>
            </div>
            
            <div>
                <FormControl className="phoneContainer" isInvalid={formik.touched.phone && formik.errors.phone}>
                    <div className="inputArea">
                        <FormLabel htmlFor="phone">Phone:</FormLabel>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            onChange={formik.handleChange}
                            {...formik.getFieldProps('phone')}
                        />
                    </div>
                    <div>{errorComponent(formik.touched.phone, formik.errors.phone)}</div>
                </FormControl>
                <FormControl className="occassionContainer">
                    <div className="inputArea">
                        <OccassionDropDownMenu
                            dropDownIcon={ occassionLogo }
                            menuButtonText='Occassion'
                            menuItems={ dropDownMenuItems }
                            dropDownMenuCallback={ (e) => {
                                formik.setFieldValue('occassion', e);
                            }}
                        />
                    </div>
                </FormControl>
            </div>

            <div>
                <button className="app-button" type="submit">Book Now</button>
            </div>
        </form>
    );
}

export default BookingForm;