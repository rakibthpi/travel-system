import React from 'react';
import { ClipLoader } from 'react-spinners'

const Button = ({disabled, label, className}) => {
    const defaltClassname = "rounded-xl w-2/3 bg-blue-500 text-white px-4 py-2 disabled:bg-blue-700"
    return (
        <button disabled={disabled} className={className ? className : defaltClassname}>
            {
                disabled ? <ClipLoader size={16} />: label
            }
        </button>
    );
};

export default Button;