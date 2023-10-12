'use client';
import Datepicker from "tailwind-datepicker-react"
import { useEffect, useState } from 'react';
import "./DatePicker.css"

const DatePicker = ({seter, defaultDate }) => {
    const [prevHidden, setPrevHidden] = useState(false)
    const options = {
        title: "",
        autoHide: false,
        todayBtn: false,
        clearBtn: false,
        maxDate: new Date("01/01/2030"),
        minDate: new Date() - 1 * 24 * 60 * 60 * 1000,
        theme: {
            background: "bg-white",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: ' text-gray-400 opacity-30 cursor-not-allowed',
            input: "",
            inputIcon: "",
            selected: new Date(defaultDate)
        },
        datepickerClassNames: "",
        defaultDate: new Date(defaultDate),
        language: "en",

    };
    // useEffect(() => {
    //     if (options.theme.selected.getMonth() === new Date().getMonth()) {
    //         setPrevHidden(true)
    //     } else {
    //         setPrevHidden(false)
    //     }
    //     console.log(options.theme.selected.getMonth(), new Date().getMonth())
    // }, [options.selected])

    const [show, setShow] = useState(false)

    const handleClose = (state) => {
        setShow(state)
        options.defaultDate = new Date(defaultDate)
    }

    const handleChange = (selectedDate) => {
        seter(selectedDate)
    }
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
