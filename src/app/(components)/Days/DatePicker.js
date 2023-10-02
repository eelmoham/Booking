'use client';
import Datepicker from "tailwind-datepicker-react"
import {useEffect, useState} from 'react';

const DatePicker = ({seter, NewdefaultDate}) => {
   
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
            selected: new Date(NewdefaultDate)
        },
        icons: {
            prev: () => <span>Previous</span>,
            next: () => <span>Next</span>
        },
        datepickerClassNames: "top-12",
        defaultDate:  new Date(NewdefaultDate),
        language: "en"
    };
    const [show, setShow] = useState(false)
    
    const handleClose = (state) => {
        setShow(state)
    }
    const handleChange = (selectedDate) => {
        seter(selectedDate)
    }
    useEffect(() => {
        options.defaultDate = new Date(NewdefaultDate)
    }, [NewdefaultDate])
    return (
        <div>
            <Datepicker
                options={options}
                onChange={handleChange}
                show={show}
                setShow={handleClose}/>
        </div>
    )
}
export default DatePicker
