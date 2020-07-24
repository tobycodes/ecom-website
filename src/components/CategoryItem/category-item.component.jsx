import React from 'react';
import { connect } from 'react-redux';

import './_category-item.styles.scss';
import CustomButton from '../CustomButton/custom-button.component';
import { addItemToCart } from '../../redux/cart/cart.actions';

const CategoryItem = ({item, addItemToCart}) => {
    const {name, imageUrl, price} = item;
    return (
        <div className='category__item'>
            <div className='category__item-image' style={{backgroundImage:`url(${imageUrl})`, height: '35rem'}}>
            </div>
            <div className='category__item-info'>
                <span>{name}</span>
                <span>{`$${price}`}</span>
            </div> 
            <CustomButton inverted='true' onClick={() => addItemToCart(item)} >
                Add to cart
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CategoryItem);