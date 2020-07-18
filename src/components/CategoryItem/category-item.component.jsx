import React from 'react';
import './_category-item.styles.scss';


const CategoryItem = (props) => {
    const {name, imageUrl, price} = props;
    return (
        <div className='category__item'>
            <div className='category__item-image' style={{backgroundImage:`url(${imageUrl})`, height: '35rem'}}>
            </div>
            <div className='category__item-info'>
                <span>{name}</span>
                <span>{`$${price}`}</span>
            </div> 
        </div>
    );
};


export default CategoryItem;