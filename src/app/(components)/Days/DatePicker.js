'use client';
import Datepicker from "tailwind-datepicker-react"
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
// reduce
import {useSelector, useDispatch} from 'react-redux'
import {setOrder} from '../Shared/Days';
// fin
import {useEffect, useState} from 'react';
const options = {
    title: "Demo Title",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
        background: "bg-white",
        todayBtn: "",
        clearBtn: "",
        icons: "",
        text: "",
        disabledText: "",
        input: "",
        inputIcon: "",
        selected: ""
    },
    icons: {
        prev: () => <span>Previous</span>,
        next: () => <span>Next</span>
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date("2022-01-01"),
    language: "en"
};
const DatePicker = ({seter}) => {

    const [show, setShow] = useState(false)
    
    const handleClose = (state) => {
        setShow(state)
    }
    const handleChange = (selectedDate) => {
        seter(selectedDate)
    }
    return (
        <div>
            <Datepicker options={options}
                onChange={handleChange}
                show={show}
                setShow={handleClose}/>
        </div>
    )
}
export default DatePicker
