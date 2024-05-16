import React from 'react';

const Input = ({type, placeholder, register, className, id=undefined, step=undefined}) => {
    const defaltClassname = "text-slate-400 rounded-md w-2/3 outline-none p-2"
    return (
        <div>
            <input 
            type={type} 
            className={className ? className : defaltClassname} 
            placeholder={placeholder} 
            {...register} 
            id={id} 
            step={step} />
        </div>
    );
};

export default Input;