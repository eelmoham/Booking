'use client';
import Datepicker from "tailwind-datepicker-react"
import { useEffect, useState } from 'react';

const DatePicker = ({ name, seter, defaultDate }) => {

    const options = {
        title: "",
        autoHide: true,
        todayBtn: false,
        clearBtn: false,
        maxDate: new Date("01/01/2030"),
        minDate: new Date(),
        theme: {
            background: "bg-white",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: "",
            input: "",
            inputIcon: "",
            selected: new Date(defaultDate)
        },
        icons: {
            prev: () => <span>{'<'}</span>,
            next: () => <span>{'>'}</span>
        },
        datepickerClassNames: "top-12",
        defaultDate: new Date(defaultDate),
        language: "en",

    };
    const [show, setShow] = useState(false)

    const handleClose = (state) => {
        setShow(state)
        options.defaultDate = new Date(defaultDate)
    }

    const handleChange = (selectedDate) => {
        seter(selectedDate)
    }

    useEffect(() => {
        options.defaultDate = new Date(defaultDate)
        options.theme.selected = new Date(defaultDate)
    }, [])

    return (
        <div>
            <Datepicker
                options={options}
                onChange={handleChange}
                show={show}
                setShow={handleClose} />
        </div>
    )
}
export default DatePicker
