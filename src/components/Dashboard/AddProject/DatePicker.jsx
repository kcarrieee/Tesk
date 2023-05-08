import React, { useState } from 'react';
import { options } from './Options';
import Datepicker from "tailwind-datepicker-react";


export const Picker = ({ setStart }) => {
	const [show, setShow] = useState(false);

	const handleChange = (selectedDate) => {
    setStart(selectedDate);
	}
	const handleClose = (state) => {
		setShow(state)
	}
	return (
		<div>
			<Datepicker 
            options={options} onChange={handleChange} show={show} setShow={handleClose} />
		</div>
	)
}
export const Picker2 = ({ setEnd }) => {
	const [show, setShow] = useState(false);

	const handleChange = (selectedDate) => {
    setEnd(selectedDate);
	}
	const handleClose = (state) => {
		setShow(state)
	}
	return (
		<div>
			<Datepicker 
            options={options} onChange={handleChange} show={show} setShow={handleClose} />
		</div>
	)
}