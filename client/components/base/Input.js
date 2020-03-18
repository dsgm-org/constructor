import React from 'react';
import './Input.css';

function Input({placeholder, onValueChange}) {
    return (
        <input type="text" className="input" placeholder={placeholder} onChange={onValueChange}/>
    );
}

export default Input;
