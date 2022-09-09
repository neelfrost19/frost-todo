import './Button.css';
import React, {useState} from 'react'

const styles = ['btn--primary', 'btn--outline', 'btn--test', 'btn--black'];
const sizes = ['btn--medium', 'btn--large'];


export const Button = ({
    children,
    type,
    onClick,
    style,
    size,
    })=>{

    const checkStyle = styles.includes(style) ? style : styles[0];

    const checkSize = sizes.includes(size) ? size : sizes[0];

    return(
    <div className='btn-mobile'>
        <button
        type={type}
        className={"" +checkStyle +" "+checkSize}
        onClick={onClick}
        >
            {children}
        </button>
        </div>
    )

};