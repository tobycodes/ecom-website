import React from 'react';
import { connect } from 'react-redux';

import './_collection.styles.scss';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CategoryItem from '../../components/CategoryItem/category-item.component';


const CollectionPage = ({ collection }) => {
    const {title, items} = collection;

    return (
        <div className='collection'>
            <h2 className='title'>{title}</h2>
            <div className='collection__items'>
                {
                    items.map(item => <CategoryItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);