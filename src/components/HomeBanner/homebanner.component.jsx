import React from 'react';
import './_homebanner.styles.scss';

const HomeBanner = (props) => {
    const { title, imageUrl, size } = props
    return (
        <div className={`${size} banner`}>
            <div
             style={{
                backgroundImage: `url(${imageUrl})`
             }} 
             className={`back-image`}
            ></div>
            <div className={`banner__inner`}>
                <h2 className={'banner__title'}>{title}</h2>
                <span className={'banner__subtitle'}>{`Shop Now`}</span>
            </div>
        </div>
    )
}

export default HomeBanner;