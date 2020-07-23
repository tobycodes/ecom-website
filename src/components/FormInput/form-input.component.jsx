import React from 'react';
import './_form-input.styles.scss';

const FormInput = ({ label, handleChange, ...otherInputProps }) => (
    <div className='group'>
        <input className='form__input' onChange={handleChange} {...otherInputProps} autoComplete='off' />
        {label && (
            <label className={`${otherInputProps.value.length ? 'shrink' : ''} form__input-label`} >{label}</label>
        )}
    </div>
);


export default FormInput;