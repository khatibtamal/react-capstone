
import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useFormik } from "formik";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { CgChevronDown } from "react-icons/cg";
import * as Yup from 'yup';
import occassionLogo from '../../images/occassion_logo.png';
import './BookingForm.css';
import CustomDatePicker from "./MiscComponents/CustomDatePicker";

function BookingForm() {
    const [ width, setWidth ] = useState(window.innerWidth);

    let dropDownButtonStyles = {
        backgroundColor: "#EDEFEE",
        borderRadius: "15px",
    }

    let dropDownItemStyles = {
        backgroundColor: "#EDEFEE",
        borderRadius: 0,
    }

    if (width <= 630) {

    }
    else if (width <= 1024) {

    }
    else {
        dropDownButtonStyles.width = "400px";
        dropDownItemStyles.width = "400px";
        dropDownItemStyles.borderRadius = "0px";
        dropDownItemStyles.mb = "3px";
    }

    const formik = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                guests: 0,
                occassion: "none",
            },
            validationSchema: Yup.object({
                firstName: Yup.string().required('Required'),
                lastName: Yup.string().required('Required'),
                email: Yup.string().email("Invalid email address").required("Required"),
                phone: Yup.number().required('Required'),
                guests: Yup.number().required('Required').min(1, 'Must be at least 1').max(10, 'Must be 10 or less'),
                date: Yup.date("Invalid Date").required('Required'),
                time: Yup.string().required('Required'),
            })
        }
    );

    return (
        <form>
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
                            borderRadius={10}
                            {...formik.getFieldProps('firstName')}
                        />
                    </div>
                    <div>
                        <FormErrorMessage>
                            {formik.errors.firstName}
                        </FormErrorMessage>
                    </div>
                </FormControl>
                <FormControl className="guestsContainer" isInvalid={formik.touched.guests && formik.errors.guests}>
                    <div className="inputArea">
                        <FormLabel htmlFor="guests">No of Diners:</FormLabel>
                        <Input
                            id="guests"
                            name="guests"
                            borderRadius={10}
                            {...formik.getFieldProps('guests')}
                        />
                    </div>
                    <div>
                        <FormErrorMessage>
                            {formik.errors.guests}
                        </FormErrorMessage>
                    </div>
                </FormControl>
            </div>

            <div>
                <FormControl className="lastNameContainer" isInvalid={formik.touched.lastName && formik.errors.lastName}>
                    <div className="inputArea">
                        <FormLabel htmlFor="lastName">Last Name:</FormLabel>
                        <Input
                            id="lastName"
                            name="lastName"
                            borderRadius={10}
                            {...formik.getFieldProps('lastName')}
                        />
                    </div>
                    <div>
                        <FormErrorMessage>
                            {formik.errors.lastName}
                        </FormErrorMessage>
                    </div>
                </FormControl>
                <FormControl className="dateContainer" isInvalid={formik.touched.date && formik.errors.date}>
                    <div className="inputArea">
                        <FormLabel htmlFor="date">Date:</FormLabel>
                        <CustomDatePicker />
                    </div>
                    <div>
                        <FormErrorMessage>
                            {formik.errors.date}
                        </FormErrorMessage>
                    </div>
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
                            borderRadius={10}
                            {...formik.getFieldProps('email')}
                        />
                    </div>
                    <div>
                        <FormErrorMessage>
                            {formik.errors.email}
                        </FormErrorMessage>
                    </div>
                </FormControl>
                <FormControl className="timeContainer" isInvalid={formik.touched.time && formik.errors.time}>
                    <div className="inputArea">
                        <FormLabel htmlFor="time">Time:</FormLabel>
                        <Input
                            id="time"
                            name="time"
                            borderRadius={10}
                            {...formik.getFieldProps('time')}
                        />
                    </div>
                    <div>
                        <FormErrorMessage>
                            {formik.errors.time}
                        </FormErrorMessage>
                    </div>
                </FormControl>
            </div>
            
            <div>
                <FormControl className="phoneContainer" isInvalid={formik.touched.phone && formik.errors.phone}>
                    <div className="inputArea">
                        <FormLabel htmlFor="phone">Phone:</FormLabel>
                        <Input
                            id="phone"
                            name="phone"
                            borderRadius={10}
                            {...formik.getFieldProps('phone')}
                        />
                    </div>
                    <div>
                        <FormErrorMessage>
                            {formik.errors.phone}
                        </FormErrorMessage>
                    </div>
                </FormControl>
                <FormControl className="occassionContainer">
                    <div className="inputArea">
                        <Menu className="dropDownMenu">
                            <MenuButton as={Button}
                                rightIcon={<CgChevronDown />}
                                leftIcon={<img src={ occassionLogo } style={{marginLeft:"20px"}}/>}
                                sx={dropDownButtonStyles}
                            >
                                Occassion
                            </MenuButton>
                            <MenuList>
                                <MenuItem sx={dropDownItemStyles}>Birthday</MenuItem>
                                <MenuItem sx={dropDownItemStyles}>Anniversary</MenuItem>
                                <MenuItem sx={dropDownItemStyles}>Engagement</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </FormControl>
            </div>

            <div>
                <button type="submit">Book Now</button>
            </div>
        </form>
    );
}

export default BookingForm;