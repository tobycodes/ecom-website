import React from 'react';
import './_homebanner.styles.scss';
import { withRouter } from 'react-router-dom'

const HomeBanner = ({ title, imageUrl, size, history, match, linkUrl }) => {
    return (
        <div className={size ? `${size} banner` : 'banner'}
        onClick={()=> (history.push(`${match.url}${linkUrl}`))}>
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

export default withRouter(HomeBanner);