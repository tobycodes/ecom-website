import React from 'react';

import './_custom-button.style.scss';



const CustomButton = ({ isGoogle, children, inverted, ...otherProps }) => (
    <button className={`${isGoogle ? 'google' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);


export default CustomButton;