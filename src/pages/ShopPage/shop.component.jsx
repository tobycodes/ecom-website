import React from 'react';
import { Route } from 'react-router-dom';

import './_shop.styles.scss';

import CollectionView from '../../components/CollectionView/collection-view.component';
import CategoryPage from '../CollectionPage/collection.component';


const ShopPage = ({ match }) => {
    return (
    <div className='shop'>
        <Route exact path={`${match.path}`} component={CollectionView} />
        <Route path={`${match.path}/:collectionId`} component={CategoryPage}/>
    </div>
   
)};

export default ShopPage;