import React from 'react';

import './_custom-button.style.scss';



const CustomButton = ({ isGoogle, children, ...otherProps }) => (
    <button className={isGoogle ? 'google custom-button' : 'custom-button'} {...otherProps}>
        {children}
    </button>
);


export default CustomButton;