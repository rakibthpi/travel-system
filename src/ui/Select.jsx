import React from 'react';

const Select = ({ data, register,className}) => {
    const defaltClassname = "text-slate-700 rounded-md w-2/3 outline-none p-2"
    return (
        <select className={className ? className: defaltClassname} {...register}>
            {
                data?.map((element) =>(
                <option key={element.value} value={element.value}>
                    {element.text ? element.text : element.city}
                </option>)
            )}
        </select>
    );
};

export default Select;